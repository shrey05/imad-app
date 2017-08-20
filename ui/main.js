// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
  
  // Make request to the counter and point
  
  // Capture the response and store it in a varible
  
  // Render the variable in the correct span 
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
    
};