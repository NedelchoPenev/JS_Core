function processCommands(commands) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: item => list.push(item),
            remove: item => list = list.filter(x => x != item),
            print: () => console.log(list)
        }
    })();

    for (let command of commands) {
        let [cmdName, arg] = command.split(' ');
        commandProcessor[cmdName](arg);
    }
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
