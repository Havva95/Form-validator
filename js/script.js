//DOM Elements
let formEl = document.getElementById("form");
let messageEl = document.getElementById("message");
let messagecontainerEl = document.querySelector(".message-container");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwords = document.querySelectorAll(".password");

//Validate the form before we store the data

let isValid = false;
let passwordMatch = false;
let storedData = {};

const validateForm = () => {
  isValid = formEl.checkValidity();

  if (!isValid) {
    messageEl.innerHTML = "Something is wrong";
    messagecontainerEl.classList.remove("pass");
    messagecontainerEl.classList.add("fail");
    return false;
  } else {
    messageEl.innerHTML = "Registration Succesful";
    messagecontainerEl.classList.remove("fail");
    messagecontainerEl.classList.add("pass");
    return true;
  }
};

const checkPassword = () => {
  let password1Value = passwords[0].value;
  let password2Value = passwords[1].value;

  if (password1Value === password2Value) {
    messagecontainerEl.classList.remove("fail");
    messagecontainerEl.classList.add("pass");

    passwordMatch = true;

    passwords.forEach((password) => {
        
        passwordMatch === true ? password.classList.remove("fail") + password.classList.add("pass") : ""

      
        });
        return true;
  } else {
    messageEl.innerHTML = "Password mismatch found";
    messagecontainerEl.classList.remove("pass");
    messagecontainerEl.classList.add("fail");

    passwords.forEach((password) => {
      password.classList.remove("pass");
      password.classList.add("pass");
    });
    return false;
  }
};

const storeFormData = () => {
    storedData = {
        fullName : formEl.name.value,
        phNumber : formEl.phone.value,
        emailAddress : formEl.email.value,
        websiteUrl : formEl.website.value,
        password : formEl.password1.value
    }
    console.log(storedData);
}

const processFormData = (event) => {
  event.preventDefault();

  //Form Validation

 let check1 =  validateForm();
 let check2;
 if(check1 === true){
  let check2 =  checkPassword();
 }
 
  //Now the data is ready
 if(check1 === true && check2 === true){
     storeFormData();
 }else{
     console.log("something is wrong");
     
 }
};

formEl.addEventListener("submit", processFormData);
