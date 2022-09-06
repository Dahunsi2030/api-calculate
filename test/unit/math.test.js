const mathM = require('../../math');

test('sum', () => {
    const actualResult = mathM.add(20, 10)
    const expectResult = 30;
    expect(actualResult).toBe(expectResult);
});

test('subtract', () => {
    const actualResult = mathM.subtract(20, 10)
    const expectedResult = 10;
    expect(actualResult).toBe(expectedResult);
})

test('divide', () => {
    const actualResult = mathM.divide(20, 10)
    const expectResult = 2;
    expect(actualResult).toBe(expectResult);
})

test('multiply', () => {
    const actualResult = mathM.multiply(20, 10)
    const expectResult = 200;
    expect(actualResult).toBe(expectResult);
})