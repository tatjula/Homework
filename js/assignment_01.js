$(document).ready(function() {
    // create an oject within a string, include a name and level of completion
    var groceries = [{
        "name": "eggs",
        "complete": true
    }, {
        "name": "bread",
        "complete": true
    }, {
        "name": "milk",
    }, {
        "name": "paper towels",
        "complete": true
    }, {
        "name": "monkeys",
        "complete": false
    }];
    // use jquery to produce HTML
    var html = "<h1>Groceries</h1>";
    html += "<ul>";
    // create a loop that prints out the above string
    for (var i = 0; i < groceries.length; i++) {
        try {
            html += printGroceries(groceries[i]);
        } catch (error) {
            console.log(error);
        }
    }
    html += "</ul>";
    $('.container').html(html);
    $(".complete").remove();
    // create a function defining printGroceries

    function printGroceries(items) {
        if (typeof items.name === "undefined") {
            throw "Aren't you forgetting something?";
        } else if (typeof items.complete === "undefined") {
            throw "Did you get everything you need?";
        }
        if (items.complete) {
            return "<li class='complete'>" + items.name + "</li>";
        } else if (items.complete === false) {
            return "<li>" + items.name + "</li>";
        }
    }
});