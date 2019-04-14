
// ES5 added the following Array methods 

let dragons = ['Ancalagon the Black' , 'Chrysophylax Dives' , 'Dagurashibanipal' , 'Fírnen' , 'Norberta' , 'Saphira' , 'Slathborg'];

// some returns True based on condition;
let dragonSome = dragons.some((dragon , index , dragons) => dragon == 'Chrysophylax Dives');
console.log(dragonSome);

// every() returns False based on condition;
let dragonEvery = dragons.every((dragon , index , dragons) => dragon == 'Chrysophylax Dives');
console.log(dragonEvery);

// filter() returns new Array with all value matcing the condition
let dragonFilter = dragons.filter((dragon , i , dragons) => dragon == 'Fírnen');
console.log(dragonFilter);