function checkValid() {
  var myEmail = document.getElementById('myEmail').value;
  if (document.getElementById('myName').value == "") {
    alert("Empty Name");
  } else if (myEmail == "") {
    alert("Empty Email");
  } else if (!validateEmail(myEmail)) {
    alert("Invalid Email");
  } else if (document.getElementById('myTitle').value == "") {
    alert("Empty Title");
  } else if (document.getElementById('myTitle').value == "") {
    alert("Empty Text");
  } else {
    alert("Đã gửi liên hệ");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  return re.test(email);
}
