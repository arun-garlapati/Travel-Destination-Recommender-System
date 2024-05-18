document.addEventListener("DOMContentLoaded", function () {
    const selectBtn = document.querySelector(".select-btn");
    const items = document.querySelectorAll(".item");

    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");

            let checked = document.querySelectorAll(".checked");
            let btnText = document.querySelector(".btn-text");

            if (checked.length > 0) {
                btnText.textContent = `${checked.length} Selected`;
            } else {
                btnText.textContent = "Select";
            }
        });
    });

    const countDisplay = document.getElementById('count');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    let count = 1; // Initial count value

    // Function to update the count display
    function updateCountDisplay() {
        countDisplay.textContent = count;
    }

    // Function to handle increase button click
    function increaseCount() {
        if (count < 10) { // Limit the count to 10
            count++;
            updateCountDisplay();
        }
    }

    // Function to handle decrease button click
    function decreaseCount() {
        if (count > 1) { // Ensure count doesn't go below 1
            count--;
            updateCountDisplay();
        }
    }

    // Add event listeners to buttons
   // Prevent the button from submitting the form
increaseBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (form submission)
    increaseCount(); // Call the increaseCount function
});

decreaseBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (form submission)
    decreaseCount(); // Call the decreaseCount function
});

    var input = document.getElementById("use-autocomplete-demo");
    var dropdown = document.getElementById("city-dropdown");

    // Event listener to handle when a city is selected from the dropdown
    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            input.value = event.target.textContent;
            dropdown.classList.add("hidden");
        }
    });

    // Event listener to toggle dropdown visibility when input is clicked
    input.addEventListener("click", function (event) {
        dropdown.classList.toggle("hidden");
        event.stopPropagation(); // Prevents the click event from bubbling up to the document
    });

    // Event listener to hide dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== input) {
            dropdown.classList.add("hidden");
        }
    });

    var calendarButton = document.getElementById("calendarButton");
    var selectedDatesText = document.getElementById("selectedDatesText");

    // Initialize Flatpickr
    var calendar = flatpickr(calendarButton, {
        enableTime: false, // Whether to enable time selection
        dateFormat: "Y-m-d", // Date format
        showMonths: 2, // Show two months at once
        minDate: "today", // Minimum selectable date (today)
        maxDate: "+10d", // Maximum selectable date (today + 10 days)
        defaultDate: "today", // Default starting date (today)
        mode: "range", // Allow selecting a range of dates
        // Add more configuration options as needed
        onChange: function (selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                var duration = selectedDates.length - 1; // Calculate duration (number of selected days minus one)
                var endDate = new Date(selectedDates[selectedDates.length - 1]); // Get the last selected date
                endDate.setDate(endDate.getDate() + 1); // Add one day to get the actual end date
                var endDateStr = endDate.toISOString().split('T')[0]; // Format the end date

                // Update the text with the selected dates
                selectedDatesText.textContent = dateStr;

                // Update the maxDate dynamically based on the selected end date
                calendar.set('maxDate', endDateStr);
            } else {
                // If no date is selected, revert to the default text and maxDate
                selectedDatesText.textContent = "Select dates";
                calendar.set('maxDate', '+10d'); // Reset maxDate to default
            }
        },
    });

    // Prevent the button from submitting the form
    calendarButton.addEventListener("click", function (event) {
        event.preventDefault();
    });

    // document.getElementById("destinationButton").addEventListener("click", function () {
    //     this.classList.add("zoom-in");
    //     setTimeout(() => {
    //         this.classList.remove("zoom-in");
    //     }, 100); // Reduced the timeout duration for quicker animation
    // });
});
