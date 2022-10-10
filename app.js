let oneEurois = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const fromEuroToDollar = function(valueInEuro){
    let valueinDollar = valueInEuro * 1.2;
    return valueinDollar;
}

const fromDollarToYen = function(valueinDollar){
    let valueinYen = valueinDollar * 127.9;
    return valueinYen;
}

const fromYenToPound = function(valueinYen){
    let valueinPound = valueinYen / (127.9/0.8);
    return valueinPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
