const findTheOldest = function (people) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let currentAge = 0;
  let oldestPerson = {};

  for (let i = 0; i < people.length; i++) {
    const age = people[i].yearOfDeath - people[i].yearOfBirth;

    if (age > currentAge) {
      if (!people[i].yearOfDeath) {
        continue;
      }
      oldestPerson = people[i];
      currentAge = age;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

// # Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
