
// ES5 added the following Array methods 

let dragons = ['Ancalagon the Black' , 'Chrysophylax Dives' , 'Dagurashibanipal' , 'Fírnen' , 'Norberta' , 'Saphira' ,  'Dagurashibanipal' , 'Slathborg', 'Fírnen'];

// some returns True based on condition;
let dragonSome = dragons.some(dragon=> dragon == 'Chrysophylax Dives');
console.log(dragonSome);

// every() returns False based on condition;
let dragonEvery = dragons.every(dragon => dragon == 'Chrysophylax Dives');
console.log(dragonEvery);

// filter() returns Array with all value matcing the condition
let dragonFilter = dragons.filter(dragon => dragon == 'Fírnen');
console.log(dragonFilter);

// forEach returns func for every item
let dragonEach = dragons.forEach((dragon , index) => {
   console.log( index + ' ' + dragon );
});

//indexOf return index number 
let dragonIndex = dragons.indexOf('Dagurashibanipal');
let dragonLastIndex = dragons.lastIndexOf('Dagurashibanipal');
console.log(dragonIndex);
console.log(dragonLastIndex);

// map() returns new Array with all value matcing the condition
let dragonMap = dragons.map(dragon => dragon == 'Fírnen');
console.log(dragonMap);



// reduce if you want to combine the value of whole array (return value to the next iteration -- left to right )
let dragonreduce = dragons.reduce((accumulator , value, valueIndex, wholeArray) => accumulator  + value);
console.log(dragonreduce);


// reduce if you want to combine the value of whole array (return value to the next iteration -- left to right )
let dragonreduceRight = dragons.reduceRight((accumulator , value, valueIndex, wholeArray) => accumulator  + value);
console.log(dragonreduceRight);