var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["READ_ONLY"] = "READ ONLY";
})(Role || (Role = {}));
var ADMIN = Role.ADMIN, AUTHOR = Role.AUTHOR, READ_ONLY = Role.READ_ONLY;
var person = {
    name: "Javano Collins",
    degree: "Computer Science",
    age: 24,
    hobbies: ["Reading", "Running", "Mixed Martial Arts", "Gaming"],
    role: AUTHOR
};
var age = person.age, degree = person.degree, role = person.role, hobbies = person.hobbies;
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
if (role === "ADMIN") {
    console.log(person.name + " has authorized access to this server");
}
else {
    console.log(person.name + " does not have authorized access to this server");
}
if (role === "AUTHOR") {
    console.log(person.name + " has authorized access to this server");
}
else {
    console.log(person.name + " does not have authorized access to this server");
}
