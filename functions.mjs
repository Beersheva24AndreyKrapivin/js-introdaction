// function sum(num1, num2) {
//     return this.x * num1 + this.x * num2;
// }
// sum.a = 2;
// sum(10, 10);
// sum.call({x:5}, 10, 10);

const point = {
    x: 5,
    y: 10
};
function displayPoint(z, d, f, g) {
    console.log(`x:${this.x}; y:${this.y}; z:${arguments[0]}`);
}
const display = displayPoint.bind(point);
display(40, "abc", 30, true);

const displayPointArrow = (z) => {
    console.log(`x:${this.x}; y:${this.y}; z:${z}`);
}
// Arrow function doesn't have its own this
// const displayArrow = displayPointArrow.bind(point);
// displayArrow(40);
//display.call(point, 40, 30, true, false);
// display.apply(point, [40, 30, true, false]);
