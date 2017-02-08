function employeeDate(input) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]+)$/;
    for (let date of input){
        if (pattern.test(date)){
            let match = pattern.exec(date);
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}