const form = document.querySelector(`.login-form`);

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
       alert(`Всі поля повинні бути заповнені`)
    };
    console.log({ "Email": email.value, "Password": password.value });
    event.currentTarget.reset();
}