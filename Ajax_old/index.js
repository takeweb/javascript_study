let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
xhr.responseType = 'json'
xhr.send(null)
xhr.onload = function(e) {
  if (xhr.readyState == 4) {
    if (xhr.status == 200 ) {

      let btn = document.getElementById('btn');
      let messages = xhr.response;
      let lists = document.getElementById('lists');

      btn.addEventListener('click', function() {
        users.forEach(function (msg) {
          let li = document.createElement('li');
          li.innerText = msg;
          lists.appendChild(li);
        });
      });

    }
  }
}