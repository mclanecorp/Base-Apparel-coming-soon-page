const emailFalse = document.querySelector(".email-false");
const iconFalse = document.querySelector(".icon-false");

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  let email = document.getElementById("email").value;
  if (checkEmail(email)) {
    /*alert("ok");*/
  } else {
    emailFalse.style.display = "block";
    iconFalse.style.display = "block";
  }
  return false;
}
