const passwordInput = document.querySelector("#password");
const eyeIcon = document.querySelector("#togglePassword");
const requirementList = document.querySelectorAll(".requirement-lists li");

// Array of password requirements
// regular expressions and index of the requirement list item
const requirements = [
    //Min 8 characters (dot  = any character)
    {regex: /.{8,}/, index: 0},   
    
    // At least one number
    {regex: /[0-9]/, index: 1},  
    
    // At least one lowercase letter
    {regex: /[a-z]/, index: 2},      
    
    // At least one special character
    {regex: /[^A-Za-z0-9]/, index: 3}, 
    
    // At least one uppercase letter
    {regex: /[A-Z]/, index: 4},           
];


passwordInput.addEventListener("keyup", (e) => {
    const passwordValue = e.target.value;
    let passwordStrength = 0;

    requirements.forEach(item => {
        // Check if password meets requirement regex
        const isValid = item.regex.test(passwordValue);
        const requirementItem = requirementList[item.index];
        
        // Update class & icon based on requirement
        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";  // Check mark
            requirementItem.classList.add("is-valid")
            passwordStrength++;  // Increase password strength if valid

            
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";  // Circle mark
            requirementItem.classList.remove("is-valid");
        }
    });

    // Update password strength meter
    if(passwordStrength<=2){
        passwordInput.style.border = "2px solid #FF6E77";
    }else if(passwordStrength===3){
        passwordInput.style.border = "2px solid #F49F17";
    }else if(passwordStrength===5){
        passwordInput.style.border = "2px solid #06EBAE";
    }
});

eyeIcon.addEventListener("click", () => {
    // Toggle input type
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";

    // Toggle eye icon
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
