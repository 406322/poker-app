//importing my file to be tested
const func = require("./services");


describe("IsFlush test", () => {
    test("Test 1", () => {
        const suits = ['s', 's', 's', 's', 'x']
        expect(func.isFlush(suits)).toBe(false);
    })
    test("Test 2", () => {
        const suits = ['d', 'd', 'd', 'd', 'x']
        expect(func.isFlush(suits)).toBe(false);
    })
    test("Test 3", () => {
        const suits = ['c', 'c', 'c', 'c', 'c']
        expect(func.isFlush(suits)).toBe(true);
    })
})

describe("isOnePair test", () => {
    test("Test 1", () => {
        const ranks = ['1', '3', '4', 'K', '10']
        expect(func.isOnePair(ranks)).toBe(false);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', '4', 'K', 'K']
        expect(func.isOnePair(ranks)).toBe(true);
    })
})









// //testing the multiply function using toBe matcher
// test("multiplies 12 and 13 to give 156", () => {
//   expect(func.multiply(12, 13)).toBe(156);
// });

// //using the toBeLessThanOrEqual matcher
// test("Should be under 25", () => {
//   const weight = 70;
//   const height = 180 / 100;
//   const bmi = weight / (height * height);
//   expect(bmi).toBeLessThanOrEqual(25);
// });

// //using the toBeCloseTo matcher for floats
// test("Floating point numbers", () => {
//   const value = 1.3 + 2.9;
//   expect(value).toBeCloseTo(4.2);
// });

// //using the toMatch matcher for regex
// test("Secret Ingredient", () => {
//   expect("There is no secret ingredient").toMatch(/secret/);
// });

// //using the toEqual matcher for Object type
// test("Luke Skywalker", () => {
//   expect(func.createUser()).toEqual({
//     firstName: "Luke",
//     lastName: "Skywalker",
//   });
// });

// //using the toContain matcher for specific element in array
// test("Master Oogway", () => {
//   const hisWords = ["There", "are", "no", "accidents"];
//   expect(hisWords).toContain("accidents");
// });