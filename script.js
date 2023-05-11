const captchaTextBox = document.querySelector(".captch-box input");
const refreshButton = document.querySelector(".refresh-button");
const captchaInputBox = document.querySelector(".captch-input input");
const message = document.querySelector(".message");
const submit = document.querySelector(".button");

let captchaText = null;

const generateCapcha = () =>{
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArrray = randomString.split("");
    const changeString = randomStringArrray.map((el) => (Math.random() > 0.5 ? el.toUpperCase() : el));
    captchaText = changeString.join("   ");
    captchaTextBox.value = captchaText;
    console.log(captchaText, "captchaText");
}

const refrshBtnClick = () =>{
    generateCapcha();
    captchaInputBox.value = "";
}

const captchaKeyUpValidate = () =>{
    submit.classList.toggle("disabled", !captchaInputBox.value);

    if(!captchaInputBox.value) message.classList.remove("active");
}

const submitBtnClick = () => {
    captchaText = captchaText.split("").filter((el) => el !== " ").join("");
    message.classList.add("active");

    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is correct";
        message.style.color = "#766cea";
    }else{
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF2525";
    }
}

refreshButton.addEventListener("click", refrshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submit.addEventListener("click", submitBtnClick);

generateCapcha();