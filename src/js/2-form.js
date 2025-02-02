'use strict';

const formData = {email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const localStorageKey = "message";

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageTextarea.value = message;
    formData.email = email;
    formData.message = message;
}

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event =>{
    event.preventDefault();

    if(!formData.email || !formData.message){
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
});