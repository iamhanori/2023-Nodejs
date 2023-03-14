const cathy = {
    "name" : "cathy",
    "age" : 19,
    "skills" : ["js", "python", "cobol"]
};

cathy.city = "Seoul"; // { name: 'cathy', age: 19, skills: [ 'js', 'python', 'cobol' ], city: 'Seoul' }
console.log(cathy);

delete cathy.city; // { name: 'cathy', age: 19, skills: [ 'js', 'python', 'cobol' ] }
console.log(cathy);


