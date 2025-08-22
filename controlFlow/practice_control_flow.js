const userRole = prompt("Enter your role (Employee, Enrolled Member, Subscriber, Non-Subscriber)");
let accessMessage;
switch (userRole){
    case 'Employee':
        accessMessage = "You have access to 'Dietary Services'.";
        break;
    case 'Enrolled Member':
        accessMessage = "You have access to 'Dietary Services' and one-on-one interaction with a dietician.";
        break;
    case 'Subscriber':
        accessMessage = "You have partial access to facilitate 'Dietary Services' only.";
        break;
    case 'Non-Subscriber':
        accessMessage = "You need to enroll or at least subscribe first to avail this facility.";
        break;
    default: accessMessage = "Invalid role.";
}
console.log("Access status:", accessMessage);
alert(accessMessage);