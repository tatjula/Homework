var listApp;
//NOT WORKING
$(document).ready(function() {
    // create an oject within a string, include a name and level of completion
    var Groceries = function (name, finish, dueDate){
        this.name = name || "newGroceries";
        this.finish = true;
        this.dueDate = dueDate || "newDate";
    };

    // use jquery to produce HTML
    
    listApp = {
        "groceries" : {
        "list" : [],
        },
        "add" : function (name, finish, dueDate) {
            this.Groceries.list.push(new Groceries(name, dueDate));  
        },
        "addGroceries" : function () {
            this.add ("eggs", true, Date(2013, 7, 25));
            this.add ("bread", true, Date(2013, 7, 25));
            this.add ("milk", true, Date(2013, 7, 5));
            this.add ("paper towels", true, Date(2013, 7, 15));
            this.add ("monkeys", true, Date(2015, 1, 1));
        },
        "printTask" : function (items) {
            if (typeof items.name === "undefined") {
                throw "Aren't you forgetting something?";
            } else if (typeof items.complete === "undefined") {
                throw "Did you get everything you need?";
            }
            if (items.finish) {
                return "<li class='complete'>" + items.name + "</li>";
            } else if (items.finish === false) {
                return "<li>" + items.name + "</li>";
            }
        },
        "printAll" :function() {
            var groceries = this.groceries;
            var html = "<h1>Groceries</h1>";
            html += "<ul>";
            // create a loop that prints out the above string
            for (var i = 0; i < groceries.length; i++) {
                try {
                    html += listApp.printTask(groceries.list[i]);
                } catch (error) {
                    //console.log(error);
                }
        }
            html += "</ul>";
            $('.container').html(html);
            $(".complete").remove();
        
    }
};

listApp.printAll();

});

