

function addItem(){

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // Work with JSON data here
        var ul = document.getElementById("list");

        for(var i=0;i<5;i++){
          var li = document.createElement("li");
          li.setAttribute('id',data[i].id);
          li.appendChild(document.createTextNode(data[i].title));

          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);
          ul.appendChild(li);
          var close = document.getElementsByClassName("close");
          var i;
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
          console.log(data[i].title);
        }

      })
      .catch(err => {
        // Do something for an error here
      })

}
addItem();
function newElement() {

  var li = document.createElement("li");
  var input = document.getElementById("input").value;
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
