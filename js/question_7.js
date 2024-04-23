// Write a function to delete the rollno property from the following
// object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "John Doe",
// class : "VI",
// rollno : 12
// }; 
 var student = {
    name: "John Doe",
    class: "VI",
    rollno: 12
};

function deleteRollNoProperty(obj) {
    
    console.log("Object before deleting rollno property:", obj);
    delete obj.rollno;
    console.log("Object after deleting rollno property:", obj);
}


deleteRollNoProperty(student);
