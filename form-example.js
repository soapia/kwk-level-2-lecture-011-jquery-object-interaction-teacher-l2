function emailIsValid(email) {
  // this uses regex to check whether a given string (the parameter "email") is a valid email address.
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function rewardUser() {
  $("#medium-cat-gif").animate({
    position: "relative",
    height: "70%", 
    width: "70%" 
  }, 1500, roar)
}

function validateEmail() {
  var emailString = $("#email-input").val() // note how `.val()` grabs the actual string entered into the input field
  if (emailIsValid(emailString)) {
    rewardUser()
  }
}

// add the event listener/handler!
