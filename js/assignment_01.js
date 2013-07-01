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
    } ];
    
// use jquery to produce HTML

$("div.container").html("<h1>Groceries</h1>");
    
// create a loop that prints out the above string

for (var i=0; i < groceries.length; i ++) {
    try {
        printGroceries(groceries[i]);
        } catch (error) {
            console.log(error);
        }    
}

// create a function defining printGroceries

$("ul").html(function() {
    function printGroceries (items) {
        if(items.complete === true) {
            $("li.complete").html(items.name);
        } else if(items.complete === false) {
            $("li").html(items.name);
        } 
        
        if(typeof items.name === "undefined") {
            throw "Aren't you forgetting something?"
        } else if (typeof items.complete === "undefined") {
            throw "Did you get everything you need?"
        }
    };
});

});