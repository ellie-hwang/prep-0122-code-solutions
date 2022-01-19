var person = {
  firstName: 'Harry',
  lastName: 'Potter',
  hobby: 'Destroying Voldemort'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The person\'s name is: ' + fullName);

person.job = 'wizard';

console.log('The person\'s current job is: ' + person.job);

person.previousJob = 'Dursley servant';

console.log('The person\'s previous job is: ' + person.previousJob);

// used JSON.stringify method to turn object 'person' into string
console.log('The complete person object: ' + JSON.stringify(person));

console.log(person);
