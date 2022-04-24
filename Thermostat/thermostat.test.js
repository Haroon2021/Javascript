const Thermostat = require('./thermostat')
describe('Thermostat', () => {
    it('Should create new Thermostat with temperature equal to 20', () => {
        const thermo = new Thermostat();
        expect(thermo.getTemperature()).toEqual(20);
    });

    it('Should create new Thermostat with temperature equal to 20 and increase temp by one', () => {
        const thermo = new Thermostat();
        thermo.up();
        expect(thermo.getTemperature()).toBe(21);
    });

    it('Should create new Thermostat with temperature equal to 20 and decrease temp by one ', () => {
        const thermo = new Thermostat();
        thermo.down();
        expect(thermo.getTemperature()).toBe(19);
    });

    it('Should create new Thermostat with temperature equal to 20 and decrease temp by one ', () => {
        const thermo = new Thermostat();
        
        for (let i = 0 ; i < 12 ; i++) {
            thermo.down();
          };

        expect(thermo.getTemperature()).toBe(10);
    });

    it('Should create new Thermostat with temperature equal to 20 and decrease temp by 13 ', () => {
        const thermo = new Thermostat();
        
        for (let i = 0 ; i < 13 ; i++) {
            thermo.up();
          };

        expect(thermo.getTemperature()).toBe(25);
    });

    it('Should create new Thermostat with temperature equal to 20 and decrease temp by 13 ', () => {
        const thermo = new Thermostat();
        thermo.maxtemp(false);
        
        for (let i = 0 ; i < 20 ; i++) {
            thermo.up();
          };

        expect(thermo.getTemperature()).toBe(32);
    });


});


