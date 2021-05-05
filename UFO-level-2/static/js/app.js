// from data.js
var tableData = data;
// Select table body
var tableBody = d3.select('tbody');
// loop through data
tableData.forEach(function(ufo){
    // append data to each table row
    var row = tableBody.append('tr');
    // get key-value pairs
    Object.entries(ufo).forEach(function([key, value]){
        //console.log(key, value);
        // insert text values into cell
        var cell = row.append('td').text(value);
    });
});
// Button Function
var button = d3.select('#filter-btn');
button.on('click', function(){
    // select input element html
    var inputElement = d3.select('.form-control');
    // input element value property
    var inputDate = inputElement.property('value');
    //console.log(inputDate);
    // filter data by date
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    //console.log(filteredData);
    // display table rows and cells in html
    var tableBody = d3.select('tbody');
    // clear table body
    tableBody.html('');
    // loop through filtered data to insert objects
    filteredData.forEach(function(ufo){
        var row = tableBody.append('tr');
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append('td').text(value);
        });
    });
});