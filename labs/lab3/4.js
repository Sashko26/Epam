var arr = [ {value: 100, type: 'USD'}, {value: 215, type: 'EUR'}, {value: 7, type: 'EUR'}, {value: 99, type: 'USD'}, {value: 354, type: 'USD'}, {value: 12, type: 'EUR'}, {value: 77, type: 'USD'}, ]; 

function lab() {
    usdArr = arr.filter( (item) => {
        return item["type"] === "USD" && item["value"] < 100
    })
    let sum = 0;
    for (let i in usdArr) {
        sum += usdArr[i]["value"]
    }
    console.log(sum);
    alert(sum);
    eurArr = arr.filter( (item) => {
        return item["type"] === "EUR"
    })
    for (let i in eurArr) {
        eurArr[i]["value"] *= 2;
    }
    console.log(eurArr);
    alert(JSON.stringify(eurArr));
}

lab()