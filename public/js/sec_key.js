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
function done(){
    var key2=document.getElementById("roomX").value;
    console.log(key2);
    if (key1==key2){
        // alert("M");


        document.getElementById("form1").action = "chat.html";
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