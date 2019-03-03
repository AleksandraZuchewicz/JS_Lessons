//Behaviour Delegation
let dogOne = {
  name: "Czarek",
  bark: function() {
    console.log(this.name, "How how");
  }
};
let dogTwo = {
  name: "Max",
  dig: function() {
    console.log(this.name, "dig a hole");
  },
  bark: function() {
    console.log(this.name, "Whoof whoof");
  }
};
dogOne.bark();
dogTwo.bark();

dogTwo.bark.call(dogOne);
dogTwo.dig.apply(dogOne);
let dogTwoDelegatedBarkingToDogOne = dogTwo.bark.bind(dogOne);
dogTwoDelegatedBarkingToDogOne();

function hop(height) {
  console.log(this.name, "is making hop to", height, "cm");
}
hop.call(dogOne, 100);
hop.apply(dogTwo, [100]);
