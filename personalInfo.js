const personalInfo = {
    name: 'Farla',
    age: 25,
    occupation: 'IT Quality Assurcance',
    introduction: function() {
        console.log(`Hello! I'm ${this.name}, ${this.age} y.o and work as a ${this.occupation}.`);
    }
};

personalInfo.introduction();