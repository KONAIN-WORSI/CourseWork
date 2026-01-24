const name = document.getElementById("name")
const email = document.getElementById("email")
const feedback = document.getElementById("feedback")
const submitBtn = document.getElementById("submit_btn")

function IsValidateForm() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const feedbackValue = feedback.value.trim();

    if(nameValue === "" || emailValue === "" || feedbackValue === "") {
        showToast("Please fill in all fields", "error");
        return false;
    }

    if(!isNaN(nameValue)) {
        showToast("Please enter a valid name", "error")
        return false;
    }

    if(feedbackValue.length < 10) {
        showToast("Please enter a valid feedback", "error")
        return false;
    }

    showToast("Feedback submitted successfully", "success")

    name.value = "";
    email.value = "";
    feedback.value = "";

    return false;

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