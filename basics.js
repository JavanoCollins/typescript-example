var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var ADMIN = Role.ADMIN, AUTHOR = Role.AUTHOR;
var person = {
    name: "Javano Collins",
    degree: "Computer Science",
    age: 24,
    role: AUTHOR
};
console.log(person.role);
