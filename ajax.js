// global variables to keep track of the request
var ajaxreq = false, ajaxCallback;

// ajaxRequest: Sets up a request
function ajaxRequest(filename, callback) {
   try {
      // Create a new request object
      ajaxreq = new XMLHttpRequest();
   } catch (error) {
      return false;
   }

   // Set up the callback function to handle the response
   ajaxCallback = callback;
   
   // Open the request (GET method for search.php with query parameters)
   ajaxreq.open("GET", filename);
   
   // Define the response handler
   ajaxreq.onreadystatechange = ajaxResponse;
   
   // Send the request (no request body for GET)
   ajaxreq.send(null);
}

// ajaxResponse: Waits for the response and calls the function
function ajaxResponse() {
   if (ajaxreq.readyState != 4) return; // Wait for the response
   if (ajaxreq.status == 200) {
      // If the request succeeded, call the callback
      if (ajaxCallback) ajaxCallback();
   } else {
      alert("Request failed: " + ajaxreq.statusText); // Display an error if failed
   }
   return true;
}
