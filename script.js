<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  </head>
  <body>

    <h1>National Park Services API Project</h1>
    <div>
        <form>
          <fieldset>
            <h1>Parks & Monuments API</h1>
            <label for="jsStateChoice">State: </label>
              <input id="jsStateChoice" type="text" placeholder="new jersey.." required >
              </br>
            <label>Max: </label>
            <input type="number" name="numberInput" id="jsNumberChoice" min="1" max="50" value="10" required />
            <input type="submit" value="search" />
          </fieldset>
        </form>
    </div>
    <div class="results hidden">
        <ul id="resultsList"></ul>
    </div>

    <script src="script.js"></script>
  </body>
</html>
