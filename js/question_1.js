// Write a function to find the area of a triangle where lengths of the three of its sides are given
function triangleArea(side1, side2, side3) {
    //Semi-perimeter of the triangle
    const s = (side1 + side2 + side3) / 2;
     // Area using Heron's formula
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
     return area;
}

const side1 = 3;
const side2 = 4;
const side3 = 5;
const area = triangleArea(side1, side2, side3);
console.log("Area of the triangle:", area);


