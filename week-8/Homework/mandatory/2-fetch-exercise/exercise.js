/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

//This function returns greeting in a random language each time the browser is refreshed
fetch('https://codeyourfuture.herokuapp.com/api/greetings')
    .then(response => {
        return response.text();
    })
    .then(greeting => {
        console.log(greeting);
        let randomGreeting = document.getElementById("greeting-text").innerText = greeting;
        return randomGreeting;
    })