var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    /*sort by age*/
    return arr.filter(person => person.age > 18)
    /*sort alphabetically by last name*/
    .sort(function(a,b){
        if (a.lastName < b.lastName)
           return -1;
        else if (a.lastName == b.lastName)
           return 0;
        else
           return 1;
    })
    /*return as a <li>""</li>*/
   .map(obj => {
        return `<li>${obj.firstName} ${obj.lastName} is ${obj.age}</li>`
      });
}
 console.log(sortedOfAge(peopleArray));
 
 
 
