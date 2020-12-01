/* Task 1:
For loop that iterates from 1 to 20. For each iterates 
need to display either odd or evens
output: "1 is odd"
        "2 is even"
*/

for (let i = 0 ; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i +" is even");
    }
    else {
        console.log(i + " is odd");
    }

}

/* Task 2:
Create a function called sum() which takes a limit argument. The function should return
the sum of all the multiples of 3 and 5 between 0 and the limit.*/

function sum(){
    let sum = 0;
    for (let i = 0; i <= 20; i++){
        if (i % 3 ===0 || i % 5 === 0 ){
        console.log(i)
        }
    }
    return sum
}

