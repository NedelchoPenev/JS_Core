export class Branch {
    constructor(id, branchName, companyName){
        this._id = id;
        this._branchName = branchName;
        this._companyName = companyName;

        this._employees = [];
    }

    get employees(){
        return this._employees;
    }

    hire(employee){
        this._employees.push(employee);
    }

    toString(){
        let output = `@ ${this._companyName}, ${this._branchName}, ${this._id}\n`;
        output += 'Employed:\n';
        if (this._employees.length == 0) {
            output += 'None…';
        } else {
            for (let employee of this.employees) {
                output += `** ${employee}\n`;
            }
        }

        return output.trim();
    }
}