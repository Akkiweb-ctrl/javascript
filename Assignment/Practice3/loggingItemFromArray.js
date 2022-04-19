let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
logData(myCourses);
// Create a function that takes a single parameter, an array,

// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument
function logData(courses){
    for(index=0;index<courses.length;index++)
    {
        console.log(courses[index]);
    }
}
