function emailValidation([email]) {
    let mailPattetn = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g;
    let result = mailPattetn.test(email);
    console.log(result ? "Valid" : "Invalid");
}
emailValidation(['valid@email.bg']);