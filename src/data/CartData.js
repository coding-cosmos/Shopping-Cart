function updateCart(items) {
  localStorage.setItem("cart", JSON.stringify(items));
  window.dispatchEvent(new Event("storage"));
}

function addItem(item) {
  const items = JSON.parse(localStorage.getItem("cart"));
  const updatedItems = items ? [...items, item] : [item];
  updateCart(updatedItems);
}

function getNoOfItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  return items ? items.length : 0;
}

function getItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  return items ? items : null;
}

function removeItem(item) {
  const items = JSON.parse(localStorage.getItem("cart"));
  const index = items.findIndex((itemItr) => itemItr.title === item.title);
  items.splice(index, 1);
  updateCart(items);
}

function updateQuantity(item, quantity) {
  const items = JSON.parse(localStorage.getItem("cart"));
  const index = items.findIndex((itemItr) => itemItr.title === item.title);
  items[index].quantity = quantity;
  updateCart(items);
}

function getTotalCost() {
  const items = JSON.parse(localStorage.getItem("cart"));
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export {
  addItem,
  getNoOfItems,
  getItems,
  removeItem,
  updateQuantity,
  getTotalCost,
};
