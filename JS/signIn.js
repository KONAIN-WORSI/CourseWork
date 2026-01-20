const signInForm = document.getElementById('sign_in');
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address')
const passwordInput = document.getElementById('password')
const submitBtn = document.getElementById('submit_btn')

const IsValidateForm = () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();
    const password = passwordInput.value.trim();

    if(name === "" || email === "" || address === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    if(!isNaN(name)) {
        alert("Please enter a valid name")
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }

    if(!isNaN(address)) {
        alert("Please enter a valid address")
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    
    alert("You have successfully Signed In!");
    signInForm.submit();
    return true;
}





