console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item){
    basket.push(item);
    return true;

    isFull();
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding oranges (expect true)', addItem('oranges'));
console.log('Adding milk (expect true)', addItem('milk'));
// console.log('Adding cereal (expect true)', addItem('cereal'));
// console.log('Adding coffee (expect true)', addItem('coffee'));
console.log(`Basket is now ${basket}`);

function listItems(){
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);        
    }
}

listItems(); //test to see if it console logs each item in the basket

function empty(){
    basket = [];
}

// empty();
// console.log(basket); // test to see if basket is an empty array 

const maxItems = 5;

function isFull(){
    if (basket.length < maxItems){
        return false;
    }        
        return true;
}

console.log (isFull()); //test to see if isFull function works