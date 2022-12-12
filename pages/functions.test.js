import { isFourOfAKind, isFullHouse, isFlush, isStraight, isThreeOfAKind, isTwoPair, isOnePair, convertToNumbers } from "./functions";



describe("isFourOfAKind test", () => {
    test("Test 1", () => {
        const ranks = ['1', '1', '1', '10', '1']
        expect(isFourOfAKind(ranks)).toBe(true);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', 'k', '5', 'k']
        expect(isFourOfAKind(ranks)).toBe(false);
    })
    test("Test 2", () => {
        const ranks = ['8', '8', '8', '5', '8']
        expect(isFourOfAKind(ranks)).toBe(true);
    })
})

describe("IsFlush test", () => {
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

describe("isThreeOfAKind test", () => {
    test("Test 1", () => {
        const ranks = ['1', '3', '1', '1', '10']
        const numRanks = convertToNumbers(ranks)
        expect(isThreeOfAKind(numRanks)).toBe(true);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', 'k', '5', 'k']
        const numRanks = convertToNumbers(ranks)
        expect(isThreeOfAKind(numRanks)).toBe(false);
    })
})

describe("isTwoPair test", () => {
    test("Test 1", () => {
        const ranks = ['9', '4', '8', '8', '9']
        const numRanks = convertToNumbers(ranks)
        expect(isTwoPair(numRanks)).toBe(true);
    })
    test("Test 2", () => {
        const ranks = ['3', 'k', '3', '4', '4']
        const numRanks = convertToNumbers(ranks)
        expect(isTwoPair(numRanks)).toBe(true);
    })
    test("Test 3", () => {
        const ranks = ['1', '3', '3', 'k', '1']
        const numRanks = convertToNumbers(ranks)
        expect(isTwoPair(numRanks)).toBe(true);
    })
})

describe("isOnePair test", () => {
    test("Test 1", () => {
        const ranks = ['1', '3', '4', 'k', '10']
        expect(isOnePair(ranks)).toBe(false);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', 'k', '7', 'k']
        expect(isOnePair(ranks)).toBe(true);
    })
    test("Test 3", () => {
        const ranks = ['1', '3', '1', '7', 'k']
        expect(isOnePair(ranks)).toBe(true);
    })
})






