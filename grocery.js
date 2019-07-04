var Grocery = /** @class */ (function () {
    function Grocery(inputName, inputQuantity) {
        this.inputName = inputName;
        this.inputQuantity = inputQuantity;
        this.name = inputName;
        this.quantity = inputQuantity;
    }
    return Grocery;
}());
var groceries = [new Grocery("Milk", 3), new Grocery("Bread", 6), new Grocery("Eggs", 11)];
function showItem(groceries) {
    var text = "";
    groceries.forEach(function (item) {
        text += "<b>Item:</b> " + item.name + "  <br><b>Quantity:</b> " + item.quantity + " <br><br>";
    });
    return "<h1>Grocery List: </h1> <hr><br>" + text;
}
document.body.innerHTML = showItem(groceries);
