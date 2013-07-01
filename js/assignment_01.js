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
    
    
// create a loop that prints out the above string

for (var i=0; i < groceries.length; i ++) {
    try {
        printGroceries(groceries[i]);
        } catch (error) {
            console.log(error);
        }    
}

// create a function defining printGroceries

document.write("<ul>");
function printGroceries (items) {
    if(items.complete === true) {
        document.write("<li class='complete'>" + items.name + "</li>");
    } else if(items.complete === false) {
        document.write("<li>" + items.name + "</li>");
    } 
    
    if(typeof items.name === "undefined") {
        throw "Aren't you forgetting something?"
    } else if (typeof items.complete === "undefined") {
        throw "Did you get everything you need?"
    }
};
document.write("</ul>");