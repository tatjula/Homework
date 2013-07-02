// use jquery to produce HTML

function generateDOM() {

    var $h1 = $("<h1/>");
    var $ul = $("<ul/>");
    var $li;
        
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
            var printGroceries(groceries[i]);
            } catch (error) {
                console.log(error);
            }    
    }
    
    // create a function defining printGroceries
    
        function printGroceries (items) {
            if(typeof items.name === "undefined") {
                throw "Aren't you forgetting something?";
            } else if (typeof items.complete === "undefined") {
                throw "Did you get everything you need?";
            }
            
            if(items.complete === true) {
                $li = $("<li/>", {"class" : "complete"})items.name;
            } else if(items.complete === false) {
                $li = $("<li/>")items.name;
            } 
        }
            $ul.append($li);
    
    $("ul").append($("li"));

}