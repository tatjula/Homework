$(document).ready(function() {

// a list of items that print to HTML
// use jquery to produce HTML

    var html = "<h1>Groceries</h1>";
    html += "<ul>";

    function Groceries(name, dueDate, complete) {
        this.name = name || "eggs";
        this.dueDate = dueDate || new Date(2013, 07, 05);
        this.complete = true;
        this.speak = function() {
            return this.name + "" + this.date;
        };

// create a loop that prints out the above object

        for (var i = 0; i < Groceries.length; i++) {
            try {
                html += printGroceries(Groceries[i]);
            } catch (error) {
                console.log(error);
            }
        }

// use the object above to create new items

        var milk = new Groceries("milk", false, true);
        var papertowels = new Groceries("paper towels", false, true);
        var monkeys = new Groceries("monkeys", new Date(2013, 07, 10), false);

// print out the stuff so it displays in HTML

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

// adding dates to the list

        function weeklyEssentials() {
            var nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            var runningOut = new Date();
            runningOut.setDate(runningOut.getDate() < 7);
            if (nextWeek.getTime() > runningOut.getTime()) {
                console.log("Get to the store now! You don't have time to wait.");
            } else {
                console.log("You have a week to pick up these items");
            }
        }
    });
}