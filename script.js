function getPassword() {
    var key = document.getElementById("password").value;
    if (key == "") {
        alertBox("Error: The key value is empty.")
    }
    return key
}

function getInput() {
    var userInput = document.getElementById("user-input").value;
    if (userInput == "") {
        alertBox("Error: The input in empty.")
    }
    return userInput
}

function encrypt() {
    var userInput = getInput()
    var password = getPassword()
    if (password != "" && userInput != "") {
        var cipherText = CryptoJS.AES.encrypt(userInput, password).toString();
        document.getElementById("result").value = cipherText;
    }
}

function decrypt() {
    var userInput = getInput()
    var bytes = CryptoJS.AES.decrypt(userInput, getPassword());
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("result").value = plaintext;
}

function resetInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
    const alerts = document.querySelectorAll(".myAlert");
    alerts.forEach(alert => {
        alert.style.display = "none";
    });
}

function alertBox(message) {
    var alertBox = document.createElement("div");
    alertBox.id = "myAlert";
    alertBox.classList.add("myAlert");
    alertBox.innerHTML = message;
    document.body.appendChild(alertBox);
    
    setTimeout(function() {
        alertBox.style.display = "none";
      }, 5000);

  }