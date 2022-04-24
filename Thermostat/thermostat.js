class Thermostat {
    constructor(){
        this.temp = 20;
        this.power_save = true;
        this.max_temp = 25;
    };

    maxtemp(value) {
        if (value === true){
            return this.max_temp = 25;
        } else {
            return this.max_temp = 32;
        }
        this.power_save = value;
    };

    getTemperature(){
        return this.temp;
    };

    up(){
        if (this.temp < this.max_temp){
            this.temp = this.temp + 1;
        }
    };

    down(){
        if (this.temp > 10){
            this.temp = this.temp - 1;
        }  
        
    };
};

module.exports = Thermostat;