import numpy as np
import tensorflow as tf
from .utils import Util
import pandas as pd
import matplotlib.pyplot as plt
import os
from sklearn.preprocessing import MinMaxScaler
import matplotlib
matplotlib.use('agg')


class RBM(object):
    """
    Class definition for a simple RBM
    """
    def __init__(self, alpha, H, num_vis):

        self.alpha = alpha
        self.num_hid = H
        self.num_vis = num_vis  # might face an error here, call preprocess if you do
        self.errors = []
        self.energy_train = []
        self.energy_valid = []

        # Initialize the weights and biases
        self.W = tf.Variable(tf.random.normal([self.num_vis, self.num_hid], mean=0.0, stddev=0.01), name="weights")
        self.vb = tf.Variable(tf.zeros([self.num_vis]), name="visible_bias")
        self.hb = tf.Variable(tf.zeros([self.num_hid]), name="hidden_bias")

    def reconstruct(self, user_data):
        # Assuming user_data is already prepared as a 2D tensor appropriate for input
        v0 = tf.constant(user_data, dtype=self.W.dtype)

        # Compute hidden activations
        hh0 = tf.nn.sigmoid(tf.matmul(v0, self.W) + self.hb)

        # Compute reconstructed visible activations
        vv1 = tf.nn.sigmoid(tf.matmul(hh0, tf.transpose(self.W)) + self.vb)

        return vv1.numpy(), self.W.numpy(), self.vb.numpy(), self.hb.numpy()

    def _prob_h_given_v(self, v):
        v = tf.cast(v, dtype=self.W.dtype)  # Casting to ensure matching data types
        return tf.nn.sigmoid(tf.matmul(v, self.W) + self.hb)  # Sigmoid activation of the matrix product

    def _prob_v_given_h(self, h):
        h = tf.cast(h, dtype=self.W.dtype)
        return tf.nn.sigmoid(tf.matmul(h, tf.transpose(self.W)) + self.vb)

    @staticmethod
    def _sample_prob(probs):
        return tf.nn.relu(tf.sign(probs - tf.random.uniform(tf.shape(probs))))

    def train(self, train_data, user_data=None, valid_data=None, epochs=10, batch_size=100,
              free_energy=False, verbose=True, filename=None):
        train_data_ = train_data.copy()
        train_data = tf.cast(train_data, dtype=self.W.dtype)
        train_data = tf.data.Dataset.from_tensor_slices(train_data).batch(batch_size)

        for epoch in range(epochs):
            batch_errors = []
            for batch in train_data:
                with tf.GradientTape() as tape:
                    h0 = self._sample_prob(self._prob_h_given_v(batch))
                    v1 = self._sample_prob(self._prob_v_given_h(h0))
                    h1 = self._prob_h_given_v(v1)

                    positive_grad = tf.matmul(tf.transpose(batch), h0)
                    negative_grad = tf.matmul(tf.transpose(v1), h1)

                    cd = (positive_grad - negative_grad) / tf.cast(tf.shape(batch)[0], tf.float32)

                    err = tf.reduce_mean(tf.square(batch - v1))
                    batch_errors.append(err)

                # Update weights and biases
                gradients = tape.gradient(err, [self.W, self.vb, self.hb])
                self.W.assign_add(self.alpha * cd)
                self.vb.assign_add(self.alpha * tf.reduce_mean(batch - v1, axis=0))
                self.hb.assign_add(self.alpha * tf.reduce_mean(h0 - h1, axis=0))

            self.errors.append(tf.reduce_mean(batch_errors))
            if verbose:
                print(f"Epoch {epoch+1}, Error: {self.errors[-1].numpy()}")
        filename = 'models/rbm_models/' + filename
        if not os.path.exists(filename):
            os.mkdir(filename)

        self.save_model(filename)
        if free_energy:
            print("Exporting free energy plot")
            self.export_free_energy_plot(filename)

        print("Exporting errors vs epochs plot")
        self.export_errors_plot(filename)

        # Reconstructing input for a specific user
        input_user = tf.expand_dims(train_data_[user_data], axis=0)
        hh0 = self._prob_h_given_v(input_user)
        vv1 = self._prob_v_given_h(hh0)

        return vv1.numpy(), self.W.numpy(), self.vb.numpy(), self.hb.numpy()

    def export_free_energy_plot(self, filename):
        fig, ax = plt.subplots()
        ax.plot(self.energy_train, label='train')
        ax.plot(self.energy_valid, label='valid')
        leg = ax.legend()
        plt.xlabel("Epoch")
        plt.ylabel("Free Energy")
        plt.savefig(filename + "/free_energy.png")

    def predict(self, train_data, user_data, filename):
        self.load_model(filename)

        # Reconstructing input for a specific user
        input_user = tf.expand_dims(train_data[user_data], axis=0)
        hh0 = self._prob_h_given_v(input_user)
        vv1 = self._prob_v_given_h(hh0)

        return vv1.numpy(), self.W.numpy(), self.vb.numpy(), self.hb.numpy()

    def export_errors_plot(self, filename):
        plt.figure(figsize=(8, 6))
        plt.plot(self.errors)
        plt.xlabel("Epoch")
        plt.ylabel("Error")
        plt.title("Training Errors Over Epochs")
        plt.savefig(f"{filename}/error_plot.png")
        plt.close()

    def save_model(self, directory):
        if not os.path.exists(directory):
            os.makedirs(directory)
        np.save(f"{directory}/weights.npy", self.W.numpy())
        np.save(f"{directory}/visible_biases.npy", self.vb.numpy())
        np.save(f"{directory}/hidden_biases.npy", self.hb.numpy())

    def load_model(self, directory):
        self.W.assign(np.load(f"models/rbm_models/{directory}/weights.npy"))
        self.vb.assign(np.load(f"models/rbm_models/{directory}/visible_biases.npy"))
        self.hb.assign(np.load(f"models/rbm_models/{directory}/hidden_biases.npy"))

    @staticmethod
    def calculate_scores(ratings, attractions, rec, user):
        """
        Function to obtain recommendation scores for a user
        using the trained weights
        """
        # Creating recommendation score for books in our data
        ratings["Recommendation Score"] = rec[0]

        """ Recommend User what books he has not read yet """
        # Find the mock user's user_id from the data
        #         cur_user_id = ratings[ratings['user_id']

        # Find all books the mock user has read before
        visited_places = ratings[ratings['user_id'] == user]['attraction_id']

        # converting the pandas series object into a list
        places_id = visited_places.tolist()

        # getting the book names and authors for the books already read by the user
        places_names = []
        places_categories = []
        places_prices = []
        for place in places_id:
            places_names.append(
                attractions[attractions['attraction_id'] == place]['name'].tolist()[0])
            places_categories.append(
                attractions[attractions['attraction_id'] == place]['category'].tolist()[0])
            places_prices.append(
                attractions[attractions['attraction_id'] == place]['price'].tolist()[0])

        # Find all books the mock user has 'not' read before using the to_read data
        unvisited = attractions[~attractions['attraction_id'].isin(places_id)]['attraction_id']
        unvisited_id = unvisited.tolist()

        # extract the ratings of all the unread books from ratings dataframe
        unseen_with_score = ratings[ratings['attraction_id'].isin(unvisited_id)]

        # grouping the unread data on book id and taking the mean of the recommendation scores for each book_id
        grouped_unseen = unseen_with_score.groupby('attraction_id', as_index=False)['Recommendation Score'].max()

        # getting the names and authors of the unread books
        unseen_places_names = []
        unseen_places_categories = []
        unseen_places_prices = []
        unseen_places_scores = []
        for place in grouped_unseen['attraction_id'].tolist():
            unseen_places_names.append(
                attractions[attractions['attraction_id'] == place]['name'].tolist()[0])
            unseen_places_categories.append(
                attractions[attractions['attraction_id'] == place]['category'].tolist()[0])
            unseen_places_prices.append(
                attractions[attractions['attraction_id'] == place]['price'].tolist()[0])
            unseen_places_scores.append(
                grouped_unseen[grouped_unseen['attraction_id'] == place]['Recommendation Score'].tolist()[0])

        # creating a data frame for unread books with their names, authors and recommendation scores
        unseen_places = pd.DataFrame({
            'att_id': grouped_unseen['attraction_id'].tolist(),
            'att_name': unseen_places_names,
            'att_cat': unseen_places_categories,
            'att_price': unseen_places_prices,
            'score': unseen_places_scores
        })

        # creating a data frame for read books with the names and authors
        seen_places = pd.DataFrame({
            'att_id': places_id,
            'att_name': places_names,
            'att_cat': places_categories,
            'att_price': places_prices
        })

        return unseen_places, seen_places

    @staticmethod
    def export(unseen, seen, filename, user):
        """
        Function to export the final result for a user into csv format
        """
        # sort the result in descending order of the recommendation score
        sorted_result = unseen.sort_values(
            by='score', ascending=False)

        x = sorted_result[['score']].values.astype(float)
        min_max_scaler = MinMaxScaler((0, 5))
        x_scaled = min_max_scaler.fit_transform(x)

        sorted_result['score'] = x_scaled

        # exporting the read and unread books  with scores to csv files
        if not os.path.exists(filename):
            os.mkdir(filename)

        seen.to_csv(filename + '/user' + user + '_seen.csv')
        sorted_result.to_csv(filename + '/user' + user + '_unseen.csv')