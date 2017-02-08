function tableBuilder(selector) {
    return {
        createTable: function (columnNames) {
            let table = $('<table>');
            let tr = $('<tr>');
            tr.appendTo(table);
            for (let colNames of columnNames) {
                tr.append($('<th>').text(colNames))
            }
            tr.append($('<th>').text('Action'));
            $(selector).empty();
            $(selector).append(table);

        },
        fillData: function (dataRows) {
            for (let dataRow of dataRows) {
                let row = $('<tr>');
                for (let values of dataRow) {
                    row.append($("<td>").text(values));
                }
                let button = $('<button>').text('Delete');
                row.append($("<td>").append(button));
                button.click(function () {
                    button.parent().parent().remove();
                });
                row.appendTo($(selector).find('table'))
            }
        }
    }
}