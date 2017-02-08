function multiplicationTable([n]) {
    console.log("<table border='1'>");
    let header = "<tr><th>x</th>";
    for (let i = 1; i <= n; i++){
        header += "<th>" + i + "</th>"

    }
    console.log(header + "</tr>");

    for (let i = 1; i <= n; i++){
        let body = "<tr><th>" + i + "</th>";
        for (let j = i; j <= i * n; j+= i){
            body += "<td>" + j + "</td>"
        }
        console.log(body + "</tr>")
    }
    
    console.log("</table>");
}
multiplicationTable([5]);