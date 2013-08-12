$(document).ready(function() {

// CREATE A BASIC TO-DO LIST WITH AN ARRAY

var groceries = [{
        "name" : "eggs",
        "complete" : true,
        "dueDate": Date(2013, 7, 25)
    }, {
        "name" : "milk",
        "complete" : true,
        "dueDate": Date(2013, 7, 25)
    }, {
        "name" : "bacon",
        "complete" : true,
        "dueDate": Date(2013, 7, 25)
    }, {
        "name" : "paper towles",
        "complete" : true,
        "dueDate": Date(2013, 7, 25)
    }, {
        "name" : "monkies",
        "complete" : false,
        "dueDate": Date(2015, 7, 25)
    }];

var container = "<ul>";

for (var i = 0; i < groceries.length; i++) {
    try {
        container += listGroceries(groceries[i]);
    } catch (e) {
        container =+ "There is a problem!";
    }
}

container += "</ul>";

// GENERATE THE HTML

$("div.container").html(container);

function listGroceries (items) {
    if(typeof items.name === "undefined") {
        throw "Did you forget something?";
    } else if (typeof items.complete === "undefined") {
        throw "Did you get this yet?";
    }
    
    if(items.complete) {
        return "<li class='complete'>" + items.name + "</li>";
    } else {
        return "<li>" + items.name + "</li>"; 
    }
}

$(".complete").remove();

});