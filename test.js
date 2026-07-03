const catfamily = {
    name: "Johny",
    age: 12,
    color: "tabby",
    breed: "persian",
    meow: function() {
        console.log("Meow! My name is " + this.name + " and I am a " + this.age + " year old " + this.color + " " + this.breed + ".");
    }


}

catfamily.meow();