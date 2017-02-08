function JSONTable(input) {
    let html = '<table>\n';
    for (let line of input){
        html += '\t<tr>\n';
        let item = JSON.parse(line);
        for (let key in item) {
            if (item.hasOwnProperty(key)) {
                html += `\t\t<td>${htmlEscape(item[key])}</td>\n`;
            }
        }
        html += '\t<tr>\n';
    }

    html += '</table>';

    return html;

    function htmlEscape (text) {
        text = '' + text;
        let tokensToReplace = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '\'': '&#39;',
            '"': '&quot;'};
        return text.replace(/[<>&'"]/g, m => tokensToReplace[m])
    }
}
console.log(JSONTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));