const signInForm = document.getElementById('sign_in');
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit_btn')

function IsValidateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if(name === "" || email === "" || message === "") {
        showToast("Please fill in all fields", "error");
        return false;
    }

    if(!isNaN(name)) {
        showToast("Please enter a valid name", "error")
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        showToast("Please enter a valid email address", "error");
        return false;
    }
    
    if(message.length < 10) {
        showToast("Please enter a valid message", "error")
        return false;
    }
    
    showToast("Your message has been successfulllty sent!", "success");
    
    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    
    return false; // Prevent page reload
}

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'success' ? 'bx bx-check-circle' : 'bx bx-x-circle';
    icon.style.fontSize = '1.5rem';
    icon.style.color = type === 'success' ? '#2D5016' : '#d32f2f';
    
    const text = document.createElement('span');
    text.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(text);
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300); 
    }, 3000);
}





