	// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

let person={
    name:"Vaibhav",
    age:23,
    country:"India"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData()
{
    personInfo=`${person.name} is ${person.age} years old and lives in ${person.country}`;
    console.log(personInfo);
}

// Call the logData() function to verify that it works
logData();