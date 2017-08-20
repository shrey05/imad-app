// Counter code
var button = document.getElementById('counter');

button.onclick = function (){
  
  // Create a request object
  var request = new XMLHttpRequest(); 
  
  
  // Capture the response and store it in a varible
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        // Take some action
        if (request.status === 200) {
            var counter = request.responseText;
              counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
  
        }
    }
    // Not done yet
  };
  
  //  Make the request 
  request.open('GET', 'http://http://shreyanschordia11.imad.hasura-app.io/counter', true);
  request.send(null);
};