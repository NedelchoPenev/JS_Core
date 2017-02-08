function messenger() {
    let url = 'https://messenger-eb1fe.firebaseio.com/messenger';
    let sendBtn = $('#submit');
    let refreshBtn = $('#refresh');
    let textArea = $('#messages');
    
    sendBtn.click(function () {
        let author = $('#author').val().trim();
        let content = $('#content').val().trim();
        if (author != '' && content != '') {
            let timestamp = Date.now();
            $.ajax({
                method: "POST",
                data: JSON.stringify({
                    author,
                    content,
                    timestamp
                }),
                url: url + '.json',
                success: function () {
                    $('#content').val('');
                    getMessages();
                }
            })
        }
    });
    
    refreshBtn.click(function () {
        getMessages();
    });

    function getMessages() {
        $.ajax({
            method: 'GET',
            url: url + '.json',
            success: renderMessages
        })
    }

    function renderMessages(data) {
        textArea.val('');
        let sortedMessages = [...Object.keys(data)]
            .sort((mA, mB) => data[mA].timestamp - data[mB].timestamp)
            .map(m => data[m]);
        for (let mess of sortedMessages) {
            textArea.val(textArea.val() + `${mess.author}: ${mess.content}\n`);
            textArea.text(textArea.text() + `${mess.author}: ${mess.content}\n`);
        }
    }
}