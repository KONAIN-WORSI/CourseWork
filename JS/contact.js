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

    if(!isNaN(name)) {
        alert("Please enter a valid name")
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }
    
    if(message.length < 10) {
        alert("Please enter a valid message")
        return false;
    }
    
    alert("Your message has been successfulllty sent!");
    return true;
}





