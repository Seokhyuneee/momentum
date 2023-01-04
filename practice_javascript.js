const loginForm_qS = document.querySelector("#login-form");
const loginForm_input_qS = loginForm_qS.querySelector("input");
const greeting_qS = document.querySelector("#greeting");

const USERNAME_KEY = "user_name";
const HIDDEN_CLASSNAME = "hidden";

function fc_helloValue(user_name_value) {
    greeting_qS.innerText = `Welcome! ${user_name_value}~`;
    greeting_qS.classList.remove(HIDDEN_CLASSNAME);
}

function fc_inputValue(event) {
    event.preventDefault();
    const user_name_value = loginForm_input_qS.value;
    localStorage.setItem(USERNAME_KEY, user_name_value);
    loginForm_qS.classList.add(HIDDEN_CLASSNAME);
    fc_helloValue(user_name_value);
}

const KeyUsername = localStorage.getItem(USERNAME_KEY);
if (KeyUsername === null) {
    loginForm_qS.classList.remove(HIDDEN_CLASSNAME);
    loginForm_qS.addEventListener("submit", fc_inputValue);
} else {
    fc_helloValue(KeyUsername);
}

/* 1. key의 값이 없다면, input 창을 보이게 한 뒤, 값을 입력받게 해야함.
   2. 입력받은 값을 키의 값으로 저장시킨 다음, input 창을 가리고, Hello (입력 값)을 띄워야 함.
   3. 만약 기존에 입력받은 key의 값이 있다면 바로 Hello (입력 값)을 띄워야 함.*/