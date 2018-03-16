// console.log("hi");


// function talk() {
//   console.log(`Hi, i'm ${this.name}`, this);
// }

// function sassyTalk() {
//   console.log(`Don't talk to me!`);
// }

// talk();

// let dude = {};
// dude.name = "daniel";
// dude.talk = talk;
// dude.talk();

// let dude2 = {};
// dude2.name = "sally";
// dude2.talk = sassyTalk;
// dude2.talk();


const numbers = [3, 2, 1];

console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);

}


numbers.forEach((item) => {
  console.log("foreach", item);
});
