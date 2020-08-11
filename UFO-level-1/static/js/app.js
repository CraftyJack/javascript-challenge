// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");
// select the button
var button = d3.select("#filter-btn");
// select the form
var form = d3.select("form");

// function for writing the table
function tableWriter(sightings) {
    // out with the old...
    d3.select("tbody").selectAll("tr").remove();
    // ...and in with the new
    sightings.forEach((sighting) => {
        var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// function for the events (button or form submittal)
function buttonTap() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // // Clear the table
    // d3.select("tbody").selectAll("tr").remove();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // loop through the data and filter the ones that match

    function dateMatch(thingThing) {
        return thingThing.datetime == inputValue;
    }

    var filteredSightings = tableData.filter(dateMatch);
    console.log(filteredSightings);

    // write the matches to the table
    tableWriter(filteredSightings);
}

// write the whole table on page load
tableWriter(tableData);

// handler for the button
button.on("click", buttonTap);

// handler for the form
form.on("submit", buttonTap);