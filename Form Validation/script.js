const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email'); 
const password = document.getElementById('password');
const Cpassword = document.getElementById('confirm-password');
const submit = document.getElementById('btn');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   validateInputs();
});

const validateInputs = () => {
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const CpasswordValue = Cpassword.value.trim();

   let flag = 4;

   // Username
   if (usernameValue === '') {
       setError(username, 'Username is required');
       flag--;
   }
   else {
       setSuccess(username);
   }

   // Email
   if (emailValue === '') {
       setError(email, 'Email is required');
       flag--;
   }
   else if (!isValidEmail(emailValue)) {
       setError(email, 'Email is not valid');
       flag--; 
   }
   else {
       setSuccess(email);
   }

   // Password
   if (passwordValue === '') {
       setError(password, 'Password is required');
       flag--;
   } else if (passwordValue.length < 6) {
       setError(password, 'Password must be at least 6 characters');
       flag--;
   }
   else {
       setSuccess(password);
   }

   // Confirm Password
   if (CpasswordValue === '') {
       setError(Cpassword, 'Please confirm your password');
       flag--;
   }
   else if (passwordValue !== CpasswordValue) {
       setError(Cpassword, 'Password does not match');
       flag--;
   }
   else {
       setSuccess(Cpassword);
   }

   // If all validations pass
   if (flag === 4) {
       // Removing all success/error classes and messages first
       const inputControls = form.querySelectorAll('.input-control');
       inputControls.forEach(inputControl => {
           inputControl.classList.remove('success');
           inputControl.classList.remove('error');
           const errorDisplay = inputControl.querySelector('.error');
           if (errorDisplay) {
               errorDisplay.innerText = '';
           }
       });

       // Clear the form after removing classes
    //    form.reset();
       
       // Show success alert last
       alert('Form submitted successfully!');
   }
};

const setError = (element, message) => {
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector('.error');

   errorDisplay.innerText = message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
};

const setSuccess = (element) => {
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector('.error');

   errorDisplay.innerText = '';
   inputControl.classList.add('success');
   inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};