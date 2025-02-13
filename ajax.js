

const request = new XMLHttpRequest();
console.log(request.readyState); // 0 after we create the request

// GET request to request data
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

console.log(request.readyState); // 1 after we open the request


// POST request to send data: add to the database like making a post on Instagram or bluesky 
request.open("POST", "https://jsonplaceholder.typicode.com/users");
request.setRequestHeader("Content-Type", "application/json");
request.send();



request.onreadystatechange = function () {
    console.log(request.readyState); // 2, 3, 4 after we sent the request

    if (request.readyState === XMLHttpRequest.DONE) {
        console.log('got date');
        
    } else {
        console.log('downloading ...');
        
    }
}