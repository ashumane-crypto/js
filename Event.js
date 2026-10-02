<!DOCTYPE html>
<html>
<head>
    <title>Events</title>
</head>
<body>

    <button id="btn">Click Me</button>

    <script>
        let button = document.querySelector("#btn");

        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
    </script>

</body>
</html>