//Event listener for Name
document.getElementById('name').addEventListener('blur', validateName);

//Event listener for Zipcode
document.getElementById('zipcode').addEventListener('blur', validateZipcode);

//Event listener for Email
document.getElementById('email').addEventListener('blur', validateEmail);

//Event listener for Phone
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;
  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

//Zipcode must be of 6 digits 
function validateZipcode(){
  const zip = document.getElementById('zipcode');
  const re = /^[0-9]{6}$/;
  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail(){
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^[0-9]{10}$/;
  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}