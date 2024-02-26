import inquirer from "inquirer";
let Array1 = [];
async function work(Array1) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select any one",
            choices: [
                "Fees of Courses",
                "Add student",
                "veiw students",
                "Exit"
            ]
        });
        if (answer.select === "Fees of Courses") {
            console.log("Digital Marketing:", 4000, "\n", "Grafic Desigen:", 5000, "\n", "Web Developing :", 2000);
        }
        if (answer.select === "Add student") {
            let again = await inquirer.prompt({
                type: "input",
                name: "user",
                message: "Student Name:"
            });
            if (again.user) {
                let enter = await inquirer.prompt({
                    type: "list",
                    name: "course",
                    choices: ["Digital Marketing", "Grafic Desigen", "Web Developing "],
                    message: "Select courses:"
                });
                if (enter.course) {
                    let enroll = `Congratulation ${again.user} You Enrolled in ${enter.course}\n`;
                    let num = Math.floor(Math.random() * 100);
                    let timing = "Your course timing is 5:00 PM to 8:00 PM\n";
                    console.log(enroll);
                    console.log("your Rollno is:" + num, "\n");
                    console.log(timing);
                }
                Array1.push(again.user, enter.course);
            }
        }
        if (answer.select === "veiw students") {
            console.log(Array1);
        }
        if (answer.select === "Exit") {
            process.exit();
        }
    } while (true);
}
work(Array1);
