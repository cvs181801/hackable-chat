const submitBtn = document.getElementById("submit-btn");
const msgBtn = document.getElementById("message-btn")
const chatArea = document.getElementById("chat-area");
const inputUsername = document.getElementById("input-username");
const inputPw = document.getElementById("input-password");
const inputMsg = document.getElementById("input-message")
const newChatArea = document.getElementById("newchat-area")
const form = document.getElementById('form');
const welcomeDiv = document.getElementById('welcome-area')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
})

// async function login() {
//     try {
//         var search = await axios.post('api/login', {
//             username: inputUsername.value,
//             password: inputPw.value
//         })
//         chatArea.textContent=''
//         welcomeDiv.textContent = search.data[0]

//         const messages = search.data[1];
//         console.log(messages)
//         for(let i=0; i<messages.length; i++) {
//             const messageP = document.createElement('p');
//             messageP.innerHTML = `${messages[i].username}: ${messages[i].text}`
//             chatArea.append(messageP)
//         }
//         return search
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

//*** */
async function login(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin'
        //headers: {
        //    'Content-Type': 'application/json'
        //},
        //body: JSON.stringify(data)
    });
    return response.json();
}

login('api/login', {username: 'spongebob', password: 'iheartcrabbypatty'})
        .then(data => {
            console.log(data)
        })

//*** */

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });


function postMsg() {
    const newMsg = document.createElement('p');
    newMsg.innerHTML = inputMsg.value;
    newChatArea.append(newMsg);
}

msgBtn.addEventListener("click", function(event) {
    event.preventDefault();
    postMsg();
    
})







