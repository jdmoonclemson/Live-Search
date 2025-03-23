// This function will trigger on each keyup in the search input field
function liveSearch() {
    var query = document.getElementById('searchlive').value;
    
    // If the query is empty, clear the results
    if (query.length == 0) {
        document.getElementById('list').innerHTML = "<li>[Search results will display here.]</li>";
        return;
    }

    // Call the ajaxRequest function with the PHP file and a custom callback function
    var filename = "search.php?query=" + encodeURIComponent(query);
    
    // Use the ajaxRequest function defined in ajax.js
    ajaxRequest(filename, function() {
        // Once the response is received, update the results
        var xmlDoc = ajaxreq.responseXML;
        var names = xmlDoc.getElementsByTagName("name");
        var resultHTML = "<ul>";

        // If there are results, display them
        if (names.length > 0) {
            for (var i = 0; i < names.length; i++) {
                resultHTML += "<li>" + names[i].textContent + "</li>";
            }
        } else {
            resultHTML += "<li>No results found</li>";
        }

        resultHTML += "</ul>";
        document.getElementById('list').innerHTML = resultHTML;
    });
}

// Event listener for the input field
document.getElementById('searchlive').addEventListener('keyup', liveSearch);
