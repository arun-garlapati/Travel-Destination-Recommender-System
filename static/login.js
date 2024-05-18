const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
        
        // loginBtn.addEventListener('click', () => {
        //     container.classList.remove("active");
        // });
        
        loginBtn.addEventListener('click', () => {
    // Redirect to the sign-in page
    window.location.href = ""; // Replace "sign-in.html" with your desired page
});