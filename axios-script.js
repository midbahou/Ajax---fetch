
// axios('https://jsonplaceholder.typicode.com/users')



document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);


//* request interceptor
axios.interceptors.request.use(request => {
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();
    return request;
});

//* response interceptor
axios.interceptors.response.use(
    (response) => {
        response.config.metadata.endTime = new Date().getTime();
        response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;

        console.log(`Request took ${response.config.metadata.durationInMS} milliseconds.`)
        return response;
    },
    (error) => {
        error.config.metadata.endTime = new Date().getTime();
        error.config.metadata.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;

        console.log(`Request took ${error.config.metadata.durationInMS} milliseconds.`)
        throw error;
});


/**
 * @method POST
 * @route /todos
 * @description create a new todo
 */
//* Test Request
async function testRequest() {
	let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal, user: "username" };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
        requestBody, { 
        headers: { 
            'Content-Type': 'application/json; charset=UTF-8' 
        }
    });

    console.log("Response Time in MS: ", response.durationInMS);
    
    logResponse(response);
}

//* Log Response
async function logResponse(response) {
    console.log(response);
    console.log(response.data);
}


/**
 * @method get
 * @description fetch users data from the API
 * @param
 */

// axios request
async function fetchData() {
    const res = await axios("https://jsonplaceholder.typicode.com/users")
    console.log(res.data);
}
fetchData();