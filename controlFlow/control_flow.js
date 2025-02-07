let userRole="admin";
let accessLevel;
if (userRole === "admin") 
{
    accessLevel = "Full access granted";
} 
else if (userRole === "manager") 
{
    accessLevel = "Limited access granted";
} else 
{
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggesIn=true;
let userMessage;

if(isLoggesIn)
{
    if(userRole==="admin")
    {
        userMessage="Weklcome,Admin!";
    }
    else
    {
        userMessage="Welcome,User!";
    }
}
else
{
    userMessage="Please log in to access the system";
}
console.log("User Message:", userMessage);

let userType="subscriber";
let userCategory;

switch(userType)
{
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";
}
console.log("User Category:", userCategory);
