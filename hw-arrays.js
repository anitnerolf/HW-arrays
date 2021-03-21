// let groceriesList = [
//     {
//         name: 'Milk',
//         amount: 5,
//         bought: 0
//     },
//     {
//         name: 'Bread',
//         amount: 10,
//         bought: 1
//     },
//     {
//         name: 'Potatoe',
//         amount: 20,
//         bought: 1
//     },
//     {
//         name: 'Tomatoe',
//         amount: 15,
//         bought: 1
//     },
//     {
//         name: 'Chocolate',
//         amount: 50,
//         bought: 0
//     }
// ];

// function sortNotPurchase() {
//     let newArr = groceriesList.sort((a, b) => {
//         if (a.bought < b.bought)  {
//             return -1;
//         } else if (a.bought > b.bought)  {
//             return 1;
//         }
//         return 0;
//     });
// }

// function checkIfExists(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name == item)
//             return (1);
//     }
//     return (0);
// }

// function getIndex(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name == item)
//             return (i);
//     }
//     return (-1);
// }

// function addPurchase(arr, purchase, number) {
//     let existing = checkIfExists(arr, purchase);
//     if (existing == 1) {
//         arr[getIndex(arr, purchase)].amount += number;
//     } else {
//         let res = [];
//         res.name = purchase;
//         res.amount = number;
//         res.bought = 0;
//         arr.push(res);
//     }
//     return arr;
// }

// let res = addPurchase(groceriesList, 'Chocolate', 50);

// function purchaseProduct(arr, name) {
//     let existing = checkIfExists(arr, name);
//     if (existing == 1) {
//         arr[getIndex(arr, name)].bought = 1;
//     } else {
//         return (-1);
//     }
//     return arr;
// }

//let res = purchaseProduct(groceriesList, 'Chocolate');

//console.log(groceriesList);

//Detyra2

let shopReceipt = [
    {
        name: 'Milk',
        amount: 10,
        pricePerItem: 1
    },
    {
        name: 'Bread',
        amount: 5,
        pricePerItem: 0.5
    },
    {
        name: 'Chocolate',
        amount: 8,
        pricePerItem: 1.2
    },
    {
        name: 'Tomatoe',
        amount: 6,
        pricePerItem: 0.3
    },
    {
        name: 'Potatoe',
        amount: 20,
        pricePerItem: 0.2
    }
];


// function printReceipt() {
//     for (let i = 0; i < shopReceipt.length; i++) {
//         document.write("<ul><uli>Product Name: " + shopReceipt[i].name + "<br>Amount: " + shopReceipt[i].amount + "<br>PricePerItem: " + shopReceipt[i].pricePerItem + "</uli></ul>");
//         console.log(shopReceipt[i]);
//     }    
// }

// //printReceipt();
// function countSumOfPurchase() {
//     let sum = 0;
//     for (let i = 0; i < shopReceipt.length; i++) {
//         sum += (parseFloat(shopReceipt[i].pricePerItem) * parseFloat(shopReceipt[i].amount));
//     }
//     return (sum.toFixed(2));
// }

//let sum = countSumOfPurchase();
//console.log(sum);

// function findMostExpensive() {
//     let max = shopReceipt[0].pricePerItem;
//     for (let i = 0; i < shopReceipt.length; i++) {
//         if (shopReceipt[i].pricePerItem > max) {
//             max = shopReceipt[i].pricePerItem;
//         }
//     }
//     return (max);
// }

// function getMostExpensiveItem(item) {
//     let result = null;
//     for (let i = 0; i < shopReceipt.length; i++) {
//         if (shopReceipt[i].pricePerItem == item) {
//             result = shopReceipt[i];
//         }
//     }
//     return(result);
// }

// let mostExpensive = findMostExpensive();
// let item = getMostExpensiveItem(mostExpensive);
// console.log(item);

// function countSumOfPurchase() {
//     let sum = 0;
//     for (let i = 0; i < shopReceipt.length; i++) {
//         sum += (parseFloat(shopReceipt[i].pricePerItem) * parseFloat(shopReceipt[i].amount));
//     }
//     return (sum.toFixed(2));
// }

// function countAveragePrice() {
//     let average = 0;
//     let sum = countSumOfPurchase();
//     average = sum / shopReceipt.length;
//     return(average);
// }

// let average = countAveragePrice();
// console.log(average);

//Detyra3















