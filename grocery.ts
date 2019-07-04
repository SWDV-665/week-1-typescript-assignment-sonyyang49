class Grocery {
  name: string;
  quantity: number;
  constructor (public inputName: string, public inputQuantity: number) {
    this.name = inputName;
    this.quantity = inputQuantity;
  }
}

let groceries = [new Grocery("Milk", 3), new Grocery("Bread", 6), new Grocery("Eggs", 11)];

function showItem(groceries) {
  var text = "";

  groceries.forEach((item) => {
    text += `<b>Item:</b> ${item.name}  <br><b>Quantity:</b> ${item.quantity} <br><br>`;
  })

  return "<h1>Grocery List: </h1> <hr><br>" + text;
}


document.body.innerHTML = showItem(groceries);
