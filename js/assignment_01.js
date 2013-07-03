
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
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
        if (items.complete === true) {
            return ("<li class='complete'>" + items.name + "</li>");
        } else if (items.complete === false) {
            return ("<li>" + items.name + "</li>");
        }
    }
});