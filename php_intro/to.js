//EXERCISE 1

var myFirstVar = 'hello';
var mySecondVar = 4;
var myThirdVar = ['foo', 'bar'];

//EXERCISE 2

var myFirstVar = 4;
var myFirstVar = 'hello';

//EXERCISE 3

var numArray = [3, 5, 16, 4, 18];
var result = numArray[0];
for(i = 1; i < numArray.length; i++){
    result += numArray[i];
}
console.log('result =' + result);

//EXERCISE 4

console.log('This is a string' + 'This is another string');

//EXERCISE 5

var my_float = 3.5;
var my_int = parseInt(my_float);
var my_float2 = 5.3;
var my_int2 = parseInt(my_float2);

//EXERCISE 6

var my_var1 = 'hello';

var my_var2;

if(my_var2) {
    console.log(my_var2);
}
else{
    console.log(my_var1)
}

//EXERCISE 7

var check_var = "What time is it?";

switch(check_var){
    case 'hello':
        console.log('greetings');
        break;
    case 'bye':
        console.log('goodbye');
        break;
    default:
        console.log('It\'s party time!');
        break;
}

//EXERCISE 8

var student = {name:'Skippy', class:'English', grade:75};

//EXERCISE 9

var student = {}
student.name = 'Skippy';
student.class = 'English';
student.grade = 75;

//EXERCISE 10

var num_array = [35, 2, 14, 56, 65, 52];

function find_greatest_num_and_index(direction){
    var greatest = null;
    var greatest_index = null;
    if(direction >= 0){
       var i = 0;
        var increment =1;
        var end_loop = num_array.length;
    }
    else{
        var i = num_array.length;
        var increment = -1;
        var end_loop = 0
    }

    while(i != end_loop){
        if(num_array[i] > greatest){
        greatest = num_array[i];
            greatest_index = i;
        }
        i += increment;
    }
    return {
    greatest:greatest, greatest_index:greatest_index
    };
}

find_greatest_num_and_index(1);