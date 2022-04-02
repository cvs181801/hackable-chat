const submitBtn = document.getElementById("submit-btn");
const chatArea = document.getElementById("chat-area");
const inputUsername = document.getElementById("input-username");
const inputPw = document.getElementById("input-password");
const form = document.getElementById('form');
const welcomeDiv = document.createElement('p')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
    //chatArea.innerHTML = inputUsername.value += inputPw.value;
})

async function login() {
    try {
        var search = await axios.post('api/login', {
            username: inputUsername.value,
            password: inputPw.value
        })
        console.log(search)
        return search
    }
    catch(err) {
        console.log(err)
    }
}

// function handleClick(event) {
//     event.preventDefault();
//     if (usernameInputValue !== "" && passwordInputValue !== "" ) {
//         login()
//             .then(res=>{
//                 if(res.data[3]) {
//                     const userId = res.data[1]
//                     const username = res.data[2]
//                     //localStorage.setItem(`userId`, `${userId}`)
//                     //localStorage.setItem(`username`, `${username}`)
//                     //history.push("/chat")
     
//                 } else {
//                     //setError('sorry, something went wrong!  Please try again.')
//                     console.log('sorry, something went wrong!  Please try again.')
//                 }
//             })
//     } else {
//         //setError('User not found...please try again.')
//         console.log('User not found...please try again.')
//     }
// }





