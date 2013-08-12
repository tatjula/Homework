$(document).ready(function() {

// CREATE A BASIC TO-DO LIST WITH AN ARRAY

var groceryApp = { 
    
    "listGroceries" : [];

    function Groceries(name, complete, dueDate) {
      this.name = name;
      this.complete = complete;
      this.dueDate = Date();
    }

    var eggs = new Groceries ("eggs", true, Date(2013, 7, 25));
    var milk = new Groceries ("milk", true, Date(2013, 7, 25));
    var bacon = new Groceries ("bacon", true, Date(2013, 7, 25));
    var paperTowles = new Groceries ("paper towles", true, Date(2013, 7, 25));
    var monkies = new Groceries ("monkies", false, Date(2015, 7, 25));

    // GENERATE THE HTML
    
    "gather" : {
        var groceries = this.Groceries;
        var container = "<ul>";
        
        for (var i = 0; i < groceries.length; i++) {
            try {
                container += listGroceries(groceries[i]);
            } catch (e) {
                container =+ "There is a problem!";
            }
        }
        
        container += "</ul>";
    
        
        $("div.container").html(container);
        
    },
    
    "display" : function listGroceries (items) {
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
        },
        
    "remove" : $(".complete").remove();
}

});