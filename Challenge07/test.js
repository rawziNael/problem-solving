//first solution

function objLat(obj) {
    return "my name is " + obj["firstName"].charAt(0).toUpperCase()+obj["firstName"].slice(1)+ " " + obj["lastName"].charAt(0).toUpperCase()+obj["lastName"].slice(1)
        + " I am " +  obj["age"] + " YO," + " and I love " +  obj["hobby"] + "."
}

//second solution

let cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 7,
        tech: "Java"
    }
]

// function fullName(firstName , lastName){
//     return this.firstName + " " + this.lastName;
// }

// function cvarray(cvs){
//     var arr=[];
//     if (cvs['yearsOfExperience'] >1){
//         arr.push(cvs)
//     }
// }





