// function generateToken() {
//         return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //     }
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    if (isError) {
        feedback.style.backgroundColor = 'red'; // Error message in red
    } else {
        feedback.style.backgroundColor = 'green'; // Success message in green
    }
    toast.className = "toast show";

    setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById('responseForm').addEventListener('submit', function (event) {

        // Check if a token already exists
        if (localStorage.getItem('formSubmitted')) {
            showToast('You have already submitted the form.',true);
            event.preventDefault()
            return;
        }

        // Store a token in localStorage
        localStorage.setItem('formSubmitted', 'true');
        showToast('Form submitted successfully!');
    });
        

