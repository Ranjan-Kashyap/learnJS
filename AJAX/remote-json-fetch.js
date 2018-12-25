var btn = document.getElementById("btn");

btn.addEventListener('click', displayData());

function displayData () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
          let ourData = JSON.parse(ourRequest.responseText);
          renderHTML(ourData);
        }
        else {
            console.log("We connected to the server, but it returned an error.");
          }
      };
      ourRequest.send();
};


  
