class MailBox {
    constructor(){
        this.mails = [];
    }

    addMessage(subject, text){
        this.mails.push({subject, text})
        return this;
    }

    get messageCount(){
        return this.mails.length;
    }

    deleteAllMessages(){
        this.mails = [];
    }

    findBySubject(substr){
        let output = [];
        for (let mail of this.mails) {
            if (mail.subject.includes(substr)){
                output.push(mail);
            }
        }
        return output;
    }

    toString(){
        if (this.mails.length == 0){
            return ' * (empty mailbox)';
        }
        let output = '';
        for (let mail of this.mails) {
            output += ` * [${mail.subject}] ${mail.text}\n`
        }

        return output;
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

