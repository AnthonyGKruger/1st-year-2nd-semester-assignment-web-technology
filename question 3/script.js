firstName = prompt("User, what is your first name?", "John");
lastName = prompt("User, what is your last name?", "Doe")
document.getElementById("details").innerHTML = `Enter your firstname: 
    ${firstName} </br> Enter your last name: ${lastName}
    <br>Here's is the information in a single string: 
${lastName}, ${firstName}`;