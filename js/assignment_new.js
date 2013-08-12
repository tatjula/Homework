$(document).ready(function() {

// CREATE A BASIC TO-DO LIST WITH AN ARRAY

var groceries = ["eggs", "milk", "bacon", "paper towles", "monkies"];

var container = "<ul>";

for (var i = 0; i < groceries.length; i++) {
    container += "<li>" +  groceries[i] + "</li>";
}

container += "</ul>";

// GENERATE THE HTML

$("div.container").html(container);


/*$("div.container").html(function() {
  var listItems = "<li>" + $("groceries[i]") + "<li>";
  return $( "ul" ).append( $( "li" ) + listItems);
});*/

console.log(container);

});