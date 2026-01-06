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
    
    alert("You have successfully Signed In!");
    signInForm.submit();
    return true;
}





