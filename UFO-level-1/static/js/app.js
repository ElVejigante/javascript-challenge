// from data.js
var tableData = data;

// Select table body
var tBody = d3.select('tbody');
// loop through data
tableData.forEach(function(ufo){
// append data to each table row
    var row = tBody.append('tr');
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
//select input element html
    var inputElement = d3.select('.form-control');
})