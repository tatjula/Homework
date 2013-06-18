var groceries = ["eggs", "bread", "milk", "paper towels", "monkeys"];

document.write("<ul>");
for(var i = 0; i < groceries.length; i++) {
    document.write("<li>" + groceries[i] + "</li>");
    }
document.write("</ul>");