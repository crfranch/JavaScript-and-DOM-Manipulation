// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Step 1: Loop Through data.js to create new rows of UFO Sightings
data.forEach(function(UFOSighting) {
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
    })
  })
  ;

// Listen for events and search through the date/time column to find rows that match user input
// Select the submit button
var submitButton = d3.select("#filter-btn");

submitButton.on("click", function() {

// Prevent the page from refreshing in order to execute the js function
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter-btn");

// Get the value property of the input element
  var inputValue = inputElement.property("value");

// Print input value and data to console
console.log(inputValue);
console.log(tableData);

// Search through the date/time column
var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

// Print filtered data to console
console.log(filteredData);

// Finally, add the filtered UFO Sighting data to the `table-head` tag

d3.select("ufo-table")
  .append("table-head").text(`Date: ${datetime}`)
  .append("table-head").text(`City: ${City}`);
  .append("table-head").text(`State: ${State}`)
  .append("table-head").text(`Country: ${Country}`)
  .append("table-head").text(`Shape: ${Shape}`)
  .append("table-head").text(`Duration: ${durationMinutes}`)
  .append("table-head").text(`Comments: ${comments}`)
})
;