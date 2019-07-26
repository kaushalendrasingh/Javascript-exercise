class User {
    constructor(username, email){
    this.username = username;
    this.email = email;
    }   

    changeEmail(newEmail){
        this.email = newEmail;
    }

}

let user = new User('kaushal', 'any@gmail.com')
user.changeEmail('kaushal0888@gmail.com')
console.dir(user);


