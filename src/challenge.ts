// 1. Create an interface describing the objects in this array.
// 2. Set type annotation to the array
// 3. create enum for status property
let students = [{ name : "Dan", age : 10, grade: 100, status : "Active"},
    { name : "Dana", grade: 90, status : "Inactive"},
    { name : "Donna", age : 40, grade: 85, status : "Graduate"}];


// 4. set types to input parameters and output
function createStudent(student: any) {
    return {name : student,
            grade : 60}
}


// 5. Set types to the function's input paramaeters
// 6. Change loop to use forEach with arrow function
// 7. Change console.log to use template literals
function print(group : any) {
    for (let i = 0; i < group.length; ++i) {
        console.log ("Student : " + group[i].name + " Grade: " + group[i].grade);
    }
}