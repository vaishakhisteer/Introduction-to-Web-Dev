const calcAge = {
  name: "Vaishakh",
  birthYear: 1998,
  currentYear: 2022,
  collegeJoined: 2018,
  collegePassedOut: 2022,
  calculateAge: function age() {
    return this.currentYear - this.birthYear;
  },
  degreeOf: function (startedAt, passedOutAt) {
    return passedOutAt - startedAt;
  },
};
const degree = calcAge.degreeOf(
  calcAge.collegeJoined,
  calcAge.collegePassedOut
);
console.log(
  `${
    calcAge.name
  } is ${calcAge.calculateAge()} years old and has done degree for ${degree} years.`
);
