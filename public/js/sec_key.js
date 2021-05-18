

function getRandomString() {
    var length = 9;
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
var key1 = getRandomString()
function generate_key(){

    var key =  key1;
    document.getElementById("gen_key").innerText = key;
    document.getElementById("cpy_btn").style.visibility = "visible";


    // console.log(document.getElementById("gen_key").innerHtml);

}

function done() {
    var key2 = document.getElementById("roomX").value;
    var uname = document.getElementById("uname").value;
    
    if (key1 == key2){
        // alert("Musk");

        // exports.hello = functions.database.ref('/hello').onWrite(event => {
        //     // set() returns a promise. We keep the function alive by returning it.
        //     return event.data.ref.set('world!').then(() => {
        //       console.log('Write succeeded!');
        //     });
        //   });
        let promise = new Promise(function(resolve, reject) {
            resolve("done");
            
            db.collection('users').add({
                username: "gruud",
                roomID: "asnf",
            }); 

            reject(new Error("…")); // ignored
            setTimeout(() => resolve("…")); // ignored
          });
        
        // console.log(this.db.ref('users/' + uname).child(key2).set({'username': uname}));
        document.getElementById("form1").action = "chat.html";

        // let userRef = this.db.ref('users/');
        // userRef.child(
        //     key2).set({'username': uname})

          

        // console.log(document.getElementById("form1").action = "chat.html"
        // );



    }
    else{
        alert("Enter correct secret key");
    }
}

function cpy_btn1(){
    // var copyText = document.getElementById("cpy_btn");

    var aux = document.createElement("input");

    // Get the text from the element passed into the input
    aux.setAttribute("value", document.getElementById("gen_key").innerHTML);
  
    // Append the aux input to the body
    document.body.appendChild(aux);
  
    // Highlight the content
    aux.select();
  
    // Execute the copy command
    document.execCommand("copy");
  
    // Remove the input from the body
    document.body.removeChild(aux);

}
// var iframex =     document.getElementById("youtube-iframe");
// var link  = document.getElementById("youtube-link").value;

// document.getElementById("youtube-button").onclick = function() {
    // document.getElementById('youtube-iframe').src = "https://www.youtube.com/embed/bo2KQer1KNM";
//  };
 




// refresh_button= document.querySelector("#");

// refresh_button.addEventListener("click", function(){
//     iframex.setAttribute("src",link);
    
//     console.log(link);
//     // location.reload(true);
// });
