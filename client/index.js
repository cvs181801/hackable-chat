const submitBtn = document.getElementById("submit-btn");
const chatArea = document.getElementById("chat-area");
const inputUsername = document.getElementById("input-username");
const inputPw = document.getElementById("input-password");
const form = document.getElementById('form');
const welcomeDiv = document.getElementById('welcome-area')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
 
})

async function login() {
    try {
        var search = await axios.post('api/login', {
            username: inputUsername.value,
            password: inputPw.value
        })
        chatArea.textContent=''
        welcomeDiv.textContent = search.data[0]

        const messages = search.data[1];
        for(let i=0; i<messages.length; i++) {
            const messageP = document.createElement('p');
            messageP.textContent = `${messages[i].username}: ${messages[i].text}`
            chatArea.append(messageP)
        }
        return search
    }
    catch(err) {
        console.log(err)
    }
}







