class CheckingAccount {
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    set clientId(value) {
        let regex = /^[0-9]{6}$/g;
        if (!regex.test(value)){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }

    set email(value) {
        let regex = /^[a-zA-Z]+@[a-zA-Z.]+$/g;
        if (!regex.test(value)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    set firstName(value) {
        let regex = /^[a-zA-Z]+$/g;
        if (value.length < 3 || value.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if (!regex.test(value)){
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = value;
    }

    set lastName(value) {
        let regex = /^[a-zA-Z]+$/g;
        if (value.length < 3 || value.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if (!regex.test(value)){
            throw new TypeError('Last name must contain only Latin characters')
        }
        this._firstName = value;
        this._lastName = value;
    }
}