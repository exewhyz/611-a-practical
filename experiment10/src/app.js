import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const employees = [];

function handleInput(choice) {
  switch (choice.trim()) {
    case "1":
      rl.question("Enter your name: ", (name) => {
        const empId = Date.now();
        const newEmp = {
          id: empId,
          name: name.trim(),
        };
        employees.push(newEmp);
        console.log(`Employee ID: ${empId} | NAME: ${name} added`);
        showMenu();
      });
      break;
    case "2":
      employees.forEach((emp, index) => {
        console.log(`${index + 1}. Employee ID: ${emp.id} | NAME: ${emp.name}`);
      });
      showMenu();
      break;
    case "3":
      rl.question("Enter employee ID to remove: ", (id) => {
        employees.forEach((emp, index) => {
          if (emp.id == id.trim()) {
            console.log("he");
            employees.splice(index, 1);
            console.log(`Employee ID: ${id} removed`);
          }
        });
        showMenu();
      });
      break;
    case "4":
      rl.close();
      break;
    default:
      console.log("Invalid Choice");
      showMenu();
  }
}

function showMenu() {
  console.log("\nEmployee Management System\n");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("\nEnter your choice: ", handleInput);
}

showMenu();
