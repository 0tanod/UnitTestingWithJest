// const { sum } = require('./app.js');



test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);

})

test("One dollar  should be 127.9", function(){
    const { fromDollarToYen  } = require('./app.js')
    expect(fromDollarToYen (1)).toBe(127.9);

})

test("127.9 yem should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(127.9)).toBe(0.8);

})