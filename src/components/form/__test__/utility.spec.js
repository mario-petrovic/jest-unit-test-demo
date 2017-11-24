import { addTwoNumbers, devideTwoNumbers, toUpperCase, transformObjectToArray } from './../utility';

describe('>>>Test utility functions', () => {
    describe('>>>Test addTwoNumbers function', () => {

        it('+++ Test with matchers to have value', () => {
            const result = addTwoNumbers(1, 2);

            expect(result).not.toBeNull();
            expect(result).toBeDefined();
            expect(result).not.toBeUndefined();
            expect(result).toBeTruthy();
            expect(result).not.toBeFalsy();
        });
    })


    describe('>>>Test devideTwoNumbers function', () => {

        it('+++ Test with matchers for greate/less/equal', () => {
            const result = devideTwoNumbers(10, 5);

            expect(result).toBeGreaterThan(1);
            expect(result).toBeGreaterThanOrEqual(2);
            expect(result).toBeLessThan(5);
            expect(result).toBeLessThanOrEqual(4.5);

            // toBe and toEqual are equivalent for numbers
            expect(result).toBe(2);
            expect(result).toEqual(2);
        });

        it('+++ Test with matcher for to floating point numbers', () => {
            const result = devideTwoNumbers(12, 5);

            expect(result).toBeCloseTo(2.4);
        });
    })

    describe('>>>Test toUpperCase function', () => {
        it('+++ Test with matcher for string', () => {
            const result = toUpperCase('htec');

            expect(result).toMatch(/HTEC/);
            expect(result).not.toMatch(/hteC/);
        });
    });

    describe('>>>Test transformObjectToArray function', () => {
        it('+++ Test with matcher if array contains particular value', () => {
            const testObject = {
                companyName: 'HTEC',
                foundingDate: 2008,
                numberOfEmployees: 2000
            }
            const resultArray = transformObjectToArray(testObject);

            expect(resultArray).toContain(2008);
        });
    });
});