const dbBtn2 = document.getElementById('dbBtn2');
var user, key;  
var flag = true;

dbBtn2.addEventListener('click', e => {
    user = document.getElementById('username').value;
    key = document.getElementById('room').value;
    // flag = true;
    document.getElementById('dbBtn2').innerHTML = "Registered" ;
    document.getElementById('dbBtn2').disabled = true;
    document.getElementById('joinBtn').disabled = false;
    e.preventDefault();
    db.collection('users').add({
        username: user,
        roomID: key,
        admin:0
    });
});

function go2() {
    if(flag){
        
        
        document.getElementById('form2').action = 'chat.html';
        // flag = false;
    }
    else{
        alert('Please Register Yourself');
    }
}