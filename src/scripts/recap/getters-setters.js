// New ES5 Getters and Setters

let dragon = {
    dragons : ['Ancalagon the Black' , 'Chrysophylax Dives' , 'Dagurashibanipal' , 'Fírnen' , 'Norberta' , 'Saphira' ,  'Dagurashibanipal' , 'Slathborg', 'Fírnen'],
    get getDragon() {
       return this.dragons.filter(dragon => dragon == 'Saphira');
    },
    set setDragon(newDragon) {
        return this.dragons.push(newDragon);
    }
};

// just using for invoking brackets  by index 
console.log(dragon.dragons[5]);

// getter
console.log(dragon.getDragon);

// setter
dragon.setDragon = 'Ihab';
console.log(dragon.dragons);