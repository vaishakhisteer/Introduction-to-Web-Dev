console.log(54+23)

const calcAge = {
    birthYear: 1998,
    currentYear: 2022,
    calculateAge: function age(){
        return this.currentYear-this.birthYear;
    }
}
console.log(`Vaishakha is ${calcAge.calculateAge()} years old.`)