function myMessage() {
    console.log("This is my first function");
}
function add(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
function add2(num1, num2) {
    var total = num1 + num2;
    return total;
}
var add2result = add2(2, 4);
function cardFlip(element) {
    $(element).hide();
}
