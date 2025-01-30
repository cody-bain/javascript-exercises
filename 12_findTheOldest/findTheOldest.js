const findTheOldest = function (people) {
    currentYear = new Date().getFullYear();
    people = people.map((person) => {
        let personAge = person.yearOfDeath - person.yearOfBirth ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        return {
            name: person.name,
            age: personAge
        };
    });
    people.sort((a, b) => (a.age > b.age) ? 1 : -1);

    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
