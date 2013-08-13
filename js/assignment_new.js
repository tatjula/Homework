$(document).ready(function() {

// CREATE A BASIC TO-DO LIST WITH AN ARRAY

    var groceryApp = { 
        
        "listGroceries" : [],
    
    /*    function Groceries(name, complete, dueDate) {
          this.name = name;
          this.complete = complete;
          this.dueDate = Date();
        }
    
        var eggs = new Groceries ("eggs", true, Date(2013, 7, 25));
        var milk = new Groceries ("milk", true, Date(2013, 7, 25));
        var bacon = new Groceries ("bacon", true, Date(2013, 7, 25));
        var paperTowles = new Groceries ("paper towles", true, Date(2013, 7, 25));
        var monkies = new Groceries ("monkies", false, Date(2015, 7, 25)); */
    
        // GENERATE THE HTML
        
        "gather" : function (){
            var groceries = this.groceries;
            var container = "<ul>";
            
            for (var i = 0; i < groceries.listGroceries.length; i++) {
                try {
                    container += groceries.display(groceries.listGroceries[i]);
                } catch (e) {
                    container =+ "There is a problem:" + e;
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
            
        "add" : function(name, dueDate) {
            this.groceries.listGroceries.push(new Groceries(name, dueDate));
        },
        
        "remove" : $(".complete").remove(),
    
        'init' : function() {
            this.add(("eggs", true, Date(2013, 7, 25)));
            this.add(("milk", true, Date(2013, 7, 25)));
            this.add(("bacon", true, Date(2013, 7, 25)));
            this.add(("paper towles", true, Date(2013, 7, 25)));
            this.add("monkies", false, Date(2015, 7, 25));
            this.gather();
        }
         
    };
    
    groceryApp.init();
    
    var Groceries = function(name, dueDate) {
        // generate a task
        
        this.name = name || "Generic";
        this.complete = false;
        this.dueDate = dueDate || dueDate().add('days', 10);
        this.urgent = function() {
            var oneWeekFromNow = dueDate().add('days', 7);
            console.log(oneWeekFromNow);
    
            if(this.dueDate.isBefore(oneWeekFromNow)) {
                return true;
            } else {
                return false;
            }
        };
});