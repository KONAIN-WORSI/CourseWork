const signInForm = document.getElementById('sign_in');
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit_btn')

const IsValidateForm = () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }
    
    alert("Your message has been successfulllty sent!");
    return true;
}





