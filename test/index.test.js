const isEmptyObj = require('../lib/index.js');

describe('isEmptyObj', () => {
    it('should return true for empty objects', () => {
        expect(isEmptyObj({})).toBe(true);
    });

    it('should return false for non-empty objects', () => {
        expect(isEmptyObj({ a: 4 })).toBe(false);
    });

    it('should return true for empty arrays', () => {
        expect(isEmptyObj([])).toBe(true);
    });

    it('should return false for non-empty arrays', () => {
        expect(isEmptyObj([4])).toBe(false);
    });
})