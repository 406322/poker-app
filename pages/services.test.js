import { isFlush, isOnePair, isTwoPair, isThreeOfAKind, isFourOfAKind } from "./services";


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

describe("isOnePair test", () => {
    test("Test 1", () => {
        const ranks = ['1', '3', '4', 'k', '10']
        expect(isOnePair(ranks)).toBe(false);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', 'k', '7', 'k']
        expect(isOnePair(ranks)).toBe(true);
    })
})

describe("isTwoPair test", () => {
    test("Test 1", () => {
        const ranks = ['9', '4', '8', '8', '9']
        expect(isTwoPair(ranks)).toBe(true);
    })
    test("Test 2", () => {
        const ranks = ['3', 'k', '3', '4', '4']
        expect(isTwoPair(ranks)).toBe(true);
    })
    test("Test 3", () => {
        const ranks = ['1', '3', '3', 'k', '1']
        expect(isTwoPair(ranks)).toBe(true);
    })
})


describe("isThreeOfAKind test", () => {
    test("Test 1", () => {
        const ranks = ['1', '3', '1', '1', '10']
        expect(isThreeOfAKind(ranks)).toBe(true);
    })
    test("Test 2", () => {
        const ranks = ['1', '3', 'k', '5', 'k']
        expect(isThreeOfAKind(ranks)).toBe(false);
    })
})

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