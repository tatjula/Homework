var groceries = [{
            "name": "eggs",
            "complete": true
        },  {
            "name": "bread",
            "complete": true
        },  {
            "name": "milk",
            "complete": true
        },  { 
            "name": "paper towles",
        }, {
            "name": "monkeys",
            "complete": false
        }];

document.write("<ul>");
for(var i = 0; i < groceries.length; i++) {
    document.write("<li>" + groceries[i].name + " ");
    document.write(groceries[i].complete + " ");
    }
document.write("</ul>");

for(var i = 0; i < groceries.length; i++) {
    try {
       print(groceries[i]);
    } catch (error) {
        document.write("<p>" + error + "</p>");
    }
}

function print(groceryItem) {
    if(typeof groceryItem.name == "undefined") {
        throw "Did you forget to write down what you needed?"
    } else if (typeof groceryItem.complete == "undefined") {
        throw "Your forgot to pick up an item!"
    } else {
        console.log("All done.");
    }
}


 
