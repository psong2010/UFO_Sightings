// from data.js
var tableData = data;

//set variable = to tbody tag
var tBody = d3.select('tbody');

//set up function that takes in table data and builds it in target

//function should be able to take in any parameter and build a table out of it
function buildTable(data) {
    //clear out the tbody of the html file
    tBody.html("");
    data.forEach((entry) => {
        //creating a row for each object
        var row = tBody.append('tr');
        Object.values(entry).forEach((value) => {
            var dataCell = row.append('td');
            dataCell.text(value);
        });
    });
};

buildTable(tableData);


var input = d3.select('input');
var button = d3.select('#filter-btn');

button.on('click', function() {
    d3.event.preventDefault();
    var newInput = input.property('value');
    var filterData = tableData.filter(row => row.datetime === newInput);
    buildTable(filterData);
});

