
let changeArray = function (arr) {
    let newArray = [];
    for (let obj of arr) {

        for (let type in obj) {
            if (obj[type] == "EUR") {
                let newObj = {};
                let newValue = 2 * obj['value'];
                newObj['value'] = newValue;
                newObj['type'] = obj[type];
                newArray.push(newObj);
            }
        }

    }
    return newArray;
}

var arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
];
let sumOfDollars = 0;
for (let i = 0; i < arr.length; i++) {
    for (let type in arr[i]) {
        if (arr[i][type] == "USD" && arr[i]['value'] < 100) {
            sumOfDollars = arr[i].value + sumOfDollars;
        }
    }
}
console.log('Sum of dollars:' + sumOfDollars);

let newArray = changeArray(arr);
console.log(newArray);



