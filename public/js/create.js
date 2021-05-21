function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

const dbBtn1 = document.getElementById('dbBtn1');
var user, key;  
var flag = true;

dbBtn1.addEventListener('click', e => {
    user = document.getElementById('username').value;
    key = getRandomString(9);
    document.getElementById('room').value = key;
    document.getElementById('dbBtn1').innerHTML = "Registered" ;
    document.getElementById('dbBtn1').disabled = true;
    document.getElementById('createBtn').disabled = false;

    // flag = true;
    e.preventDefault();
    db.collection('users').add({
        username: user,
        roomID: key,
        admin:1
    });
});

function go1() {
    if(flag){
        document.getElementById('form1').action = 'chat.html';
        // flag = false;
    }
    else{
        alert('Please Register Yourself');
    }
}

