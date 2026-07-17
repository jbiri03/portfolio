const form = document.querySelector('form');
const thankYouMessage = document.getElementById('thank-you-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.classList.add('show');

    const formData = new FormData(form);

    const response = await fetch("https://forminit.com/f/65egt3pp0v0", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        form.reset();
        setTimeout(() => thankYouMessage.classList.remove('show'), 3000);
    }
});
