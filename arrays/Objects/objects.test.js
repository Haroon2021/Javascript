const searchCandies = require('./objects');

describe('searchCandies', () => {
    it('Returns Mars and Maltesers', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });
});