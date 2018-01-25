function printCallback(arr) {
  arr.forEach(function (name){
    console.log(name);
  });
}

function titleize(arr,cb) {
  let titled = [];
  titled = arr.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  cb(titled);
};

let arr1 = ['mo','jo','ko'];
// titleize(arr1,printCallback);

function Elephant(name,height,tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

let jumo = new Elephant("jumo",11,["jump"]);

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [jumo,ellie, charlie, kate, micah];

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  let trickIdx = Math.round(Math.random() * (this.tricks.length - 1));
  console.log(`${this.name} is ${this.tricks[trickIdx]}`);
};

Elephant.paradeHelper = function (elephant) {
  elephant.play();
};

// Elephant.paradeHelper(micah);


function dinerBreakfast() {
  let order = "I'd like cheesy eggs please!"
  console.log(order);

  return (newOrder) => {
    order = `${order.slice(0,order.length - 8)} and ${newOrder} please!`;
    console.log(order);
  };
};

// dinerBreakfast();
let bFast = dinerBreakfast();
bFast('potatoes');
bFast('kofta');
