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

// let shopReceipt = [
//     {
//         name: 'Milk',
//         amount: 10,
//         pricePerItem: 1
//     },
//     {
//         name: 'Bread',
//         amount: 5,
//         pricePerItem: 0.5
//     },
//     {
//         name: 'Chocolate',
//         amount: 8,
//         pricePerItem: 1.2
//     },
//     {
//         name: 'Tomatoe',
//         amount: 6,
//         pricePerItem: 0.3
//     },
//     {
//         name: 'Potatoe',
//         amount: 20,
//         pricePerItem: 0.2
//     }
// ];


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

// let cssStyles = [
//     {
//         name: 'color',
//         value: 'red'
//     },
//     {
//         name: 'font-size',
//         value: '50px'
//     },
//     {
//         name: 'text-decoration',
//         value: 'underline'
//     },
//     {
//         name: 'text-align',
//         value: 'center'
//     },
//     {
//         name: 'font-family',
//         value: 'verdana'
//     }
// ];

// function print(text) {
//     for (let i = 0; i < cssStyles.length; i++) {
//         document.write("<p style=\"" + cssStyles[i].name + ":" + cssStyles[i].value + "\">" + text + "</p>");
//     }
// }

// print("Hello, my name is Florentina.");

//Detyra4

let classrooms = [
    {
        name: 'Biokimi',
        numberOfSeats: 15,
        faculty: 'FSHMN'
    },
    {
        name: 'Analitike',
        numberOfSeats: 18,
        faculty: 'Heimerer'
    },
    {
        name: 'Ekonomiks',
        numberOfSeats: 17,
        faculty: 'Ekonomik'
    },
    {
        name: 'Mekatronike',
        numberOfSeats: 20,
        faculty: 'FIEK'
    },
    {
        name: '411',
        numberOfSeats: 12,
        faculty: 'FIEK'
    }
];


function displayClassrooms() {
    for (let i = 0; i < classrooms.length; i++) {
        console.log(classrooms[i]);
    }
}

//displayClassrooms();

function displayFacultyClassrooms(item) {
    for (let i = 0; i < classrooms.length; i++) {
        if (classrooms[i].faculty == item) {
            console.log(classrooms[i]);
        }
    }    
}

//displayFacultyClassrooms('FIEK');

function findSpecificClassroom(item) {
    let result = [];
    for (let i = 0; i < classrooms.length; i++) {
        if (classrooms[i].faculty == item) {
            result.push(i);
        }
    }
    return(result);
}

function displayFacultyGroup(group) {
    for (let i = 0; i < group.length; i++) {
        let res = findSpecificClassroom(group[i].faculty);
        if (res != null) {
            for (let j = 0; j < res.length; j++) {
                if (group[i].numberOfStudents <= classrooms[res[j]].numberOfSeats) {
                    console.log(classrooms[res[j]]);
                }
            }
        }
    }
}

let group = [
    {
        name: 'IT',
        numberOfStudents: 14,
        faculty: 'FIEK'
    }
]

//displayFacultyGroup(group);

function sortBySeats(arr) {
    let newArr = arr.sort((a, b) => {
    if (a.numberOfSeats < b.numberOfSeats)  {
        return -1;
    } else if (a.numberOfSeats > b.numberOfSeats)  {
        return 1;
    }
    return 0;
    });
    console.log(newArr);
}

//sortBySeats(classrooms);


function sortByName(arr) {
    let newArr = arr.sort((a, b) => {
    if (a.name < b.name)  {
        return -1;
    } else if (a.name > b.name)  {
        return 1;
    }
    return 0;
    });
    console.log(newArr);
}

//sortByName(classrooms);




