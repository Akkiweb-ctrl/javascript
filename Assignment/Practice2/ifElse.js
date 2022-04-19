let age = 15

// less than 6 years old -> free
if(age<6)
{
    console.log("free");
}
// 6 to 17 years old     -> child discount
else if(age<=17)
{
    console.log("Child Discount");
}

// 18 to 26 years old    -> student discount
else if(age<=66)
{
    console.log("Student Discount");
}
// 27 to 66 years old    -> full price
else 
{
    console.log("senior citizen Discount");
}
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable