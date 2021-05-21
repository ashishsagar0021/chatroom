function cpyBtn(){
    // var copyText = document.getElementById("cpy_btn");
    // alert("clicker");

    var aux = document.createElement("input");

    // Get the text from the element passed into the input
    aux.setAttribute("value", document.getElementById("room-name").innerHTML);
  
    // Append the aux input to the body
    document.body.appendChild(aux);
  
    // Highlight the content
    aux.select();
  
    // Execute the copy command
    document.execCommand("copy");
  
    // Remove the input from the body
    document.body.removeChild(aux);

    // <i class="fa fa-check" ></i>


}
