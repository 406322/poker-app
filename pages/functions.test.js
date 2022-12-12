import { isFourOfAKind, isFullHouse, isFlush, isStraight, isThreeOfAKind, isTwoPair, isOnePair, convertToNumbers } from "./functions";



describe("isFourOfAKind", () => {
    test("Test 1", () => {
        const values = ['1', '1', '1', 't', '1']
        const numValues = convertToNumbers(values)
        expect(isFourOfAKind(numValues)).toBe(true);
    })
    test("Test 2", () => {
        const values = ['1', '3', 'k', '5', 'k']
        const numValues = convertToNumbers(values)
        expect(isFourOfAKind(numValues)).toBe(false);
    })
    test("Test 2", () => {
        const values = ['8', '8', '8', '5', '8']
        const numValues = convertToNumbers(values)
        expect(isFourOfAKind(numValues)).toBe(true);
    })
})

describe("isFullHouse", () => {
    test("Test 1", () => {
        const values = ['1', '1', '1', 't', 't']
        const numValues = convertToNumbers(values)
        expect(isFullHouse(numValues)).toBe(true);
    })
    test("Test 2", () => {
        const values = ['k', '5', 'k', '5', 'k']
        const numValues = convertToNumbers(values)
        expect(isFullHouse(numValues)).toBe(true);
    })
    test("Test 3", () => {
        const values = ['8', '8', '9', '5', '5']
        const numValues = convertToNumbers(values)
        expect(isFullHouse(numValues)).toBe(false);
    })  
})

describe("IsFlush", () => {
    test("Test 1", () => {
        const suits = ['s', 's', 's', 's', 'x']
        expect(isFlush(suits)).toBe(false);
    })
    test("Test 2", () => {
        const suits = ['d', 'd', 'd', 'd', 'x']
        expect(isFlush(suits)).toBe(false);
    })
    test("Test 3", () => {
        const suits = ['c', 'c', 'c', 'c', 'c']
        expect(isFlush(suits)).toBe(true);
    })
})

describe("isThreeOfAKind", () => {
    test("Test 1", () => {
        const values = ['1', '3', '1', '1', 't']
        const numValues = convertToNumbers(values)
        expect(isThreeOfAKind(numValues)).toBe(true);
    })
    test("Test 2", () => {
        const values = ['1', '3', 'k', '5', 'k']
        const numValues = convertToNumbers(values)
        expect(isThreeOfAKind(numValues)).toBe(false);
    })
    test("Test 3", () => {
        const values = ['1', 'k', 'k', '5', 'k']
        const numValues = convertToNumbers(values)
        expect(isThreeOfAKind(numValues)).toBe(true);
    })
})

describe("isStraight", () => {
    test("Test 1", () => {
        const values = ['1', '2', '3', '4', '5']
        const numValues = convertToNumbers(values)
        expect(isStraight(numValues)).toBe(true);
    })
    test("Test 2", () => {
        const values = ['9', 't', 'd', 'c', 'k']
        const numValues = convertToNumbers(values)
        expect(isStraight(numValues)).toBe(true);
    })
    test("Test 3", () => {
        const values = ['1', '2', '3', '4', 't']
        const numValues = convertToNumbers(values)
        expect(isStraight(numValues)).toBe(false);
    })
})

describe("isTwoPair", () => {
    test("Test 1", () => {
        const values = ['9', '4', '8', '8', '9']
        const numValues = convertToNumbers(values)
        expect(isTwoPair(numValues)).toBe(true);
    })
    test("Test 2", () => {
        const values = ['3', 'k', '3', '4', '4']
        const numValues = convertToNumbers(values)
        expect(isTwoPair(numValues)).toBe(true);
    })
    test("Test 3", () => {
        const values = ['1', '3', '3', 'k', '1']
        const numValues = convertToNumbers(values)
        expect(isTwoPair(numValues)).toBe(true);
    })
})

describe("isOnePair", () => {
    test("Test 1", () => {
        const values = ['1', '3', '4', 'k', 't']
        expect(isOnePair(values)).toBe(false);
    })
    test("Test 2", () => {
        const values = ['1', '3', 'k', '7', 'k']
        expect(isOnePair(values)).toBe(true);
    })
    test("Test 3", () => {
        const values = ['1', '3', '1', '7', 'k']
        expect(isOnePair(values)).toBe(true);
    })
})




