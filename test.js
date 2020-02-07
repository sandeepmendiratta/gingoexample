<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    function init() {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
          }
      };
      xhr.send(JSON.stringify({
          username: 'yoshie',
          password: "456"
      }));
    }

  </script>
</head>
<body onload="init()">
</body>
</html>
