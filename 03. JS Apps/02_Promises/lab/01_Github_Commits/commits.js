function loadCommits() {
    $('#commits').empty();
    let username = $('#username').val();
    let repo = $('#repo').val();
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;
    
    $.get(url)
        .then(getRepos)
        .catch(showError)
    
    function getRepos(data) {
        for (let commit of data) {
            $('<li>')
                .text(`${commit.commit.author.name}: ${commit.commit.message}`)
                .appendTo($('#commits'));

        }
    }
    
    function showError(error) {
        $('<li>')
            .text(`Error: ${error.status} (${error.statusText})`)
            .appendTo($('#commits'));
    }
}