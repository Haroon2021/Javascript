const User = require('./user')


describe('User', () => {
    it('Should take name and returns it', () => {
        const user = new User('Uma');
        expect(user.getName()).toEqual('Uma');
    });
    it('Gives an introduction', () => {
        const user = new User('Uma');
        expect(user.getIntroduction()).toEqual('Hi, my name is Uma');
    });
});

//////////////////////
