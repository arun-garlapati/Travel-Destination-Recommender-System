
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBxaesb6VN7EWTeBxgi55JYGH0rmHzZlT8",
    authDomain: "login-7a7d8.firebaseapp.com",
    projectId: "login-7a7d8",
    storageBucket: "login-7a7d8.appspot.com",
    messagingSenderId: "384558667104",
    appId: "1:384558667104:web:96b46ad9c93684889dba05"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location.href="../newpage.html";
    
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  })