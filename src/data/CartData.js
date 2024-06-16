function addItem(item){
    const items = JSON.parse(localStorage.getItem('cart'));
    const updatedItems = items?[...items,item]:[item];
    localStorage.setItem('cart',JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('storage'));
}

function getNoOfItems(){
    const items = JSON.parse(localStorage.getItem('cart'));
    return items?items.length:0;
}
export  {addItem,getNoOfItems};