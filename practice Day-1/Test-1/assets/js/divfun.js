function div(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log(div(10, 2));
console.log(div(100, 2));
const result = div(31, 2);
console.log(result.toFixed(2));
