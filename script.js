'use strict';


// Toggle Dark/Light Mode
const button = document.getElementById('toggleBtn');
const allBtn = document.querySelector('.btn');
const body = document.querySelector('body');
const title = document.querySelector('h2');
const header = document.querySelector('h1');

let toggle = false;
const darkMode = function() {
  body.style.backgroundColor = '#1e1e20';
  button.style.backgroundColor = '#ffc6fc';
  allBtn.style.backgroundColor = '#ffc6fc';
  button.style.color = 'black';
  allBtn.style.color = 'black';
  title.style.color = '#ffc6fc'
  header.style.color = '#ffc6fc'
  button.textContent = 'Light Mode';
  toggle = true;
  console.log(toggle);
};
const lightMode = function() {
  body.style.backgroundColor = '#ffffff';
  button.style.backgroundColor = "black";
  allBtn.style.backgroundColor = "black";
  button.style.color = '#ffffff';
  allBtn.style.color = '#ffffff';
  title.style.color = 'black';
  header.style.color = 'black';
  button.textContent = 'Dark Mode';
  toggle = false;
  console.log(toggle);
}

button.addEventListener('click', function() {
  if (toggle === false) {
    darkMode();
  } else {
    lightMode();
  }
});






// Increase/Decrease Button
const btnNumber = document.getElementById('btnNumber');
const btnIncrease = document.getElementById('btnIncrease');
const btnDecrease = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');

let total = 0;

btnIncrease.addEventListener('click', function() {
  total += 1;
  btnNumber.textContent = total;
});
btnDecrease.addEventListener('click', function() {
  total -= 1;
  btnNumber.textContent = total;  
});
btnReset.addEventListener('click', function() {
  total = 0;
  btnNumber.textContent = total;
});







// Simple Tip Calculator //
let inputBill = document.getElementById('inputBill');
const btnSaveValue = document.getElementById('btnSaveValue')
// const btnTipPercent = document.querySelectorAll('btnTipPercent')
const tipPercent0 = document.getElementById('tip-percent-0');
const tipPercent1 = document.getElementById('tip-percent-1');
const tipPercent2 = document.getElementById('tip-percent-2');
const btnCalculate = document.getElementById('btnCalculate');
const totalTip = document.getElementById('totalTip');
const totalAmount = document.getElementById('totalAmount');

let billAmount;
let numSave = false;
let tipPercent;
let tipAmount;
let totalBill; 


function calcTip(tipValue) {
  tipPercent = tipValue;
  tipAmount = billAmount * tipPercent;
  console.log(tipAmount);
}

btnSaveValue.addEventListener('click', function() {
  billAmount = Number(inputBill.value);
  console.log(billAmount);
  numSave = true
});


tipPercent0.addEventListener('click', function() {
  if (numSave) {
    calcTip(tipPercent0.value);
    tipPercent0.classList.add('selected');
    tipPercent1.classList.remove('selected');
    tipPercent2.classList.remove('selected');
  } else {
    alert('Save the Bill Amount!');
  }
});
tipPercent1.addEventListener('click', function() {
  if (numSave) {
    calcTip(tipPercent1.value);
    tipPercent0.classList.remove('selected');
    tipPercent1.classList.add('selected');
    tipPercent2.classList.remove('selected');
  } else {
    alert('Save the Bill Amount!');
  }

});
tipPercent2.addEventListener('click', function() {
  if (numSave) {
    calcTip(tipPercent2.value);
    tipPercent0.classList.remove('selected');
    tipPercent1.classList.remove('selected');
    tipPercent2.classList.add('selected');
  } else {
    alert('Save the Bill Amount!');
  }
});

btnCalculate.addEventListener('click', function() {
  console.log(billAmount, tipAmount);
  totalBill = tipAmount + billAmount
  totalTip.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmount.textContent = `$${totalBill.toFixed(2)}`;
});







// Password Strength Checker //
/* Create an input field where a user can type a password, and as they type, display the password’s strength:
	•	“Too short” (less than 6 characters)
	•	“Weak” (only letters or only numbers)
	•	“Moderate” (letters and numbers)
	•	“Strong” (letters, numbers, and at least one special character like !@#$%^&*) */

  let passwordInput = document.getElementById('passwordInput');
  let passwordStrength = document.getElementById('strengthMessage');
  const toggleVisibility = document.getElementById('toggleVisibility');

passwordInput.addEventListener('input', function() {
  let password = passwordInput.value;
  const hasSpecialChars = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/.test(password);
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  console.log(password);
  if (password.length < 6) {
    passwordStrength.textContent = 'Strength: Too short';
  } else if (hasLetters && hasNumbers && hasSpecialChars) {
    passwordStrength.textContent = 'Strength: Strong';
  } else if (hasLetters && hasNumbers) {
    passwordStrength.textContent = 'Strength: Moderate';
  } else {
    passwordStrength.textContent = 'Strength: Weak';
    passwordStrength.style.color = `'red'`;
  }
});

let visible = false;

toggleVisibility.addEventListener('click', function() {
  if (!visible) {
    passwordInput.setAttribute("type", "text");
    toggleVisibility.textContent = 'Hide';
    visible = true;
    console.log(visible);
  } else {
    passwordInput.setAttribute("type", "password");
    toggleVisibility.textContent = 'Show';
    visible = false;
    console.log(visible);
  }
});






// Login Form 
/*
  Objective: Create a simple login form with basic input validation and dynamic feedback.

  ✅ Requirements:
	1.	HTML Structure:
	•	Two input fields: one for username, one for password.
	•	A “Login” button.
	•	A message area for feedback (<p> or <div>).
	•	A “Show/Hide Password” toggle (reuse what you built!).
	2.	JavaScript Functionality:
	•	When the “Login” button is clicked:
	•	Check if both fields are filled out.
	•	If either is empty, show an error message: "Please fill in both fields."
	•	If both are filled, display: "Logging in as [username]...".
	•	Implement the password Show/Hide feature again using a toggle button.
*/
const usernameInput1 = document.getElementById('usernameInput1'); 
const passwordInput1 = document.getElementById('passwordInput1');
const toggleVisibility1 = document.getElementById('toggleVisibility1'); 
const btnLogin = document.getElementById('btnLogin');
const textarea = document.getElementById('loginText');

const loginForm = document.getElementById('loginForm');
const btnLogout = document.getElementById('btnLogout');

let isUsernameValid = false;
let isPasswordValid = false;
let userUsernameInput, userPasswordInput;

function resetLogin () { // logout logic & Show/Hide Login Form After Success
  isUsernameValid = false;
  isPasswordValid = false;
  userUsernameInput = '';
  userPasswordInput = '';
  textarea.textContent = '';
  loginForm.reset();
  loginForm.classList.remove('hidden');
  btnLogout.classList.add('hidden');
  localStorage.setItem('isLoggedIn', 'false');
  document.getElementById('h3Login').textContent = 'Login Form';
};

function checkUsername() {
  if (userUsernameInput) {
    isUsernameValid = true;
    console.log(isUsernameValid);
  } else {
    isUsernameValid = false;
  }
};

function checkPassword() {
  if (userPasswordInput) {
    isPasswordValid = true;
    console.log(isPasswordValid);
  } else {
    isPasswordValid = false;
  }
};

// Challenge: Add Basic Authentication Check
const correctUsername = "admin";
const correctPassword = "1234";

function authenticationCheck() {
  if (userPasswordInput === correctPassword && userUsernameInput === correctUsername) {
    loginForm.classList.add('hidden');
    btnLogout.classList.remove('hidden');
    localStorage.setItem('isLoggedIn', 'true')
  } else if (!userPasswordInput || !userUsernameInput) {
    textarea.textContent = "Please fill both fields!";
  } else {
    textarea.textContent = "Incorrect username or password.";
  }
};

usernameInput1.addEventListener('input', function() {
  userUsernameInput = usernameInput1.value.trim();
  checkUsername();
});
passwordInput1.addEventListener('input', function() {
  userPasswordInput = passwordInput1.value.trim();
  checkPassword();
});

btnLogin.addEventListener('click', function(event) {
  event.preventDefault();
  authenticationCheck();
});

window.onload = function () {
  if (localStorage.getItem('isLoggedIn') === 'true') { // Need some help understanding/ implementing this 
    loginForm.classList.add('hidden');
    btnLogout.classList.remove('hidden');
    document.getElementById('h3Login').textContent = 'Welcome Back!';
  } else {
    resetLogin();
  }
};

let visible1 = false;

toggleVisibility1.addEventListener('click', function(event) {
  event.preventDefault();
  if (!visible1) {
    passwordInput1.setAttribute("type", "text");
    toggleVisibility1.textContent = 'Hide';
    visible1= true;
    console.log(visible1);
  } else {
    passwordInput1.setAttribute("type", "password");
    toggleVisibility1.textContent = 'Show';
    visible1 = false;
    console.log(visible1);
  }
});

btnLogout.addEventListener('click', function() {
  resetLogin();
});





// Live Character Counter
// Practice: input event, string length
// Challenge: Show a live character count under a text area, with a max limit. Turn the count red if the user exceeds the limit.
const characterCounter = document.getElementById('characterCounter');
const characterInput = document.getElementById('characterInput');
const maxCounter = document.getElementById('maxCounter');

const maxCount = 50;

maxCounter.textContent = `/${maxCount}`

characterInput.addEventListener('input', function(character) {
  let count = characterInput.value.length;
  if (character.key !== 'Backspace') {
    characterCounter.textContent = count;
  } else if (character.key === 'Backspace' && count > 0) {
    characterCounter.textContent = count;
  }
  if (count > maxCount) {
    characterCounter.style.color = "#C70039";
  } else {
    characterCounter.style.color = "#000000";
  }
});





// Light Switch / Simple Color Picker
/* Practice: click events, classList.toggle() or changing styles
Challenge: Build a light bulb that turns on/off when clicked. Use a circle div and change its color (e.g., yellow = on, gray = off).
*/
const lightSwitch = document.getElementById('lightSwitch');
const lightBulb = document.getElementById('lightBulb');
const colorPicker = document.getElementById('colorPicker');

let light = false;
let colorSelected = false;
let lightColor = '';

colorPicker.addEventListener('input', function(color) {
  lightColor = color.target.value;
  colorSelected = true;
  console.log(lightColor);
});

lightSwitch.addEventListener('click', function() {
  if (colorSelected) {
    if (!light) {
      lightBulb.style.backgroundColor = lightColor;
      lightSwitch.textContent = 'Off';
      light = true;
    } else {
      lightBulb.style.backgroundColor =' #e1e1e1';
      lightSwitch.textContent = 'On';
      light = false;
    }
  }
});






// Random Quote Generator 
const generateQuote = document.getElementById('generateQuote');
const quoteDisplay = document.getElementById('quoteDisplay');

const quotes = [
  '"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"', 
  '"The most effective way to do it, is to do it. - Albert Einstein"',
  '"Your talent is God\'s gift to you. What you do with it is your gift back to God. - (Attributed to) Billy Graham"',
  '"I never dreamed about success. I worked for it. - Estée Lauder"',
  '"Don\'t watch the clock; do what it does. Keep going. - Sam Levenson"',
  '"Our greatest glory is not in never failing, but in rising every time we fall. - Confucius"',
  '"The journey of a thousand miles begins with one step. - Lao Tzu"',
  '"What you do not know is not the truth, but rather the potential truth to be known. - William D. Miller"',
  '"The only way to do great work is to love what you do. - Steve Jobs"'
]

generateQuote.addEventListener('click', function() {
  let quoteNumber = Math.trunc(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[quoteNumber];
  console.log(quoteNumber);
});






// 🥤 Drink Order Builder
/*
Goal: Create a simple form where a user can build a custom drink order, and display a summary when they submit.

🧩 Features to Implement:
	1.	Text Input for customer name
	2.	Dropdown Select for drink type (e.g., Coffee, Tea, Smoothie)
	3.	Checkboxes for add-ons (e.g., Milk, Sugar, Ice, Lemon)
	4.	Submit Button that shows the final order summary below the form

💡 Extra Challenge (Optional):
	•	Clear the form after submission
	•	Prevent empty name or no drink type from being submitted
	•	Change the background color of the summary section based on the drink (e.g., brown for coffee, green for tea)
*/

const nameInput = document.getElementById('nameInput');
const drinksSelect = document.getElementById('drinksSelect');

const coffeeOptions = document.getElementById('coffeeOptions');
const sodaOptions = document.getElementById('sodaOptions');
const smoothieOptions = document.getElementById('smoothieOptions');

let userName = '';
let userDrink = '';

nameInput.addEventListener('input', function() {
  userName = nameInput.value.trim();
});

drinksSelect.addEventListener('input', function() {
  userDrink = drinksSelect.value;
  console.log(userDrink);
  if (userDrink === 'Coffee') {
    coffeeOptions.classList.remove('hidden');
    sodaOptions.classList.add('hidden');
    smoothieOptions.classList.add('hidden');
  } else if (userDrink === 'Soda') {
    sodaOptions.classList.remove('hidden');
    coffeeOptions.classList.add('hidden');
    smoothieOptions.classList.add('hidden');
  } else if (userDrink === 'Smoothie') {
    smoothieOptions.classList.remove('hidden');
    sodaOptions.classList.add('hidden');
    coffeeOptions.classList.add('hidden');
  }
});


const coffeeOptionsClass = document.querySelectorAll('.coffeeOptions-class');
const smoothieOptionsClass = document.querySelectorAll('.smoothieOptions-class');
const sodaOptionsClass = document.querySelectorAll('.sodaOptions-class');

// coffee
let userCoffee = [];
let userCoffeeItem = '';

for (let i = 0; i < coffeeOptionsClass.length; i++) {
  coffeeOptionsClass[i].addEventListener('change', function() {
    if (coffeeOptionsClass[i].checked) {
      userCoffeeItem = coffeeOptionsClass[i].value;
      if (!userCoffee.includes(userCoffeeItem)) {
        userCoffee.push(coffeeOptionsClass[i].value);
        console.log('checkbox checked')
        console.log(userCoffee);
      } 
    } else {
      userCoffee.splice(userCoffee.indexOf(coffeeOptionsClass[i].value), 1);
      console.log('checkbox unchecked')
      console.log(userCoffee);
    }
  });
};

// smoothie
let userSmoothie = [];
let userSmoothieItem = '';

for (let i = 0; i < smoothieOptionsClass.length; i++) {
  smoothieOptionsClass[i].addEventListener('change', function() {
    if (smoothieOptionsClass[i].checked) {
      userSmoothieItem = smoothieOptionsClass[i].value;
      if (!userSmoothie.includes(userSmoothieItem)) {
        userSmoothie.push(smoothieOptionsClass[i].value);
        console.log('checkbox checked');
        console.log(userSmoothie);
      }
    } else {
      userSmoothie.splice(userSmoothie.indexOf(smoothieOptionsClass[i].value), 1);
      console.log('checkbox unchecked');
      console.log(userSmoothie);
    }
  });
};

// soda
let userSoda = '';

for (let i = 0; i < sodaOptionsClass.length; i++ ) {
  sodaOptionsClass[i].addEventListener('change', function() {
    userSoda = sodaOptionsClass[i].value;
    console.log(`Selected - ${userSoda}`);
  });
};


// submit function
const submitDrink = document.getElementById('submitDrink');
const resetOrder = document.getElementById('resetOrder');

const drinkReceipt = document.getElementById('drinkReceipt')
const nameValue = document.getElementById('nameValue');
const drinkValue = document.getElementById('drinkValue');

submitDrink.addEventListener('click', function() {
  if (userDrink && userName) { // makes sure an item is selected 
    // coffee submit
    if (userDrink === 'Coffee') { // check if Coffee was selected
      coffeeOptions.classList.add('hidden');
      submitDrink.classList.add('hidden');
      drinkReceipt.classList.remove('hidden');
      resetOrder.classList.remove('hidden');
      nameValue.textContent = ` ${userName}`;
      if (userCoffee.length > 0) { // check if userCoffee[] has items
        drinkValue.textContent = ` ${userDrink} w/ `
        drinkValue.textContent += userCoffee.join(', ');
    } else {
      drinkValue.textContent = ` Black ${userDrink}`
      console.log('Black Coffee')
    }
    } else if (userDrink === 'Smoothie') { // check if Smoothie was selected 
        if (userSmoothie.length > 0) {
          smoothieOptions.classList.add('hidden');
          submitDrink.classList.add('hidden');
          drinkReceipt.classList.remove('hidden');
          resetOrder.classList.remove('hidden');
          nameValue.textContent = ` ${userName}`;
          drinkValue.textContent = ` ${userDrink} w/ `
          drinkValue.textContent += userSmoothie.join(', ');
        } else {
          alert('Select at least one Smoothie option!');
        }
      } else if (userDrink === 'Soda') {
          if (userSoda) {
            sodaOptions.classList.add('hidden');
            submitDrink.classList.add('hidden');
            drinkReceipt.classList.remove('hidden');
            resetOrder.classList.remove('hidden');
            nameValue.textContent = ` ${userName}`;
            drinkValue.textContent = ` ${userSoda}`
          } else {
            alert("Select your soda!");
          }
      }
  } else if (!userDrink && userName) {
    alert('You forgot to pick your drink!');
  } else if (userDrink && !userName) {
    alert("Don't forget a name for your order");
  } else {
    alert("Did you even order?!")
  }

});

// reset function 
resetOrder.addEventListener('click', function() {
  // reset values
  userName = '';
  userDrink = '';
  nameInput.value = '';
  drinksSelect.value = ''
  userCoffee = [];
  userCoffeeItem = '';
  userSmoothie = [];
  userSmoothieItem = '';
  userSoda = '';

  // reset form
  coffeeOptions.classList.add('hidden');
  smoothieOptions.classList.add('hidden');
  sodaOptions.classList.add('hidden');
  drinkReceipt.classList.add('hidden');
  resetOrder.classList.add('hidden');
  submitDrink.classList.remove('hidden');
  nameValue.textContent = '';
  drinkValue.textContent = '';
});














