// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Step 1: Loop Through data.js assigned as tableData
data.forEach(UFOSighting){
  var row = tbody.append("tr");
  Object.defineProperties(UFOSighting).foreach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
    })
  })
});

// Listen for events and search through the date/time column to find rows that match user input
// Select the submit button
var button = d3.select("#filter-btn");

button.on("click", function() {

// Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter-btn");

// Get the value property of the input element
    var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);


