function attachEvents() {
    const kinveyAppId = "kid_HyMXziZMl";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    const kinveyUsername = "peter";
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};
    $("#btnLoadPosts").click(loadPostsClick);
    $("#btnViewPost").click(viewPostClick);
    
    function loadPostsClick() {
        let loadPostsRequests = {
            url: serviceUrl + '/posts',
            headers: authHeaders
        }

        $.get(loadPostsRequests)
            .then(displayPosts)
            .catch(displayError)
    }

    function displayPosts(posts) {
        $('#posts').empty()
        for (let post of posts) {
            $('<option>')
                .text(post.title)
                .val(post._id)
                .appendTo($('#posts'))
        }
    }

    function displayError(error) {
        let errorDiv = $("<div>").text("Error: " +
            error.status + ' (' + error.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function() {
            $(errorDiv).fadeOut(function() {
                $(errorDiv).remove();
            });
        }, 3000);

    }
    
    function viewPostClick() {
        let selectedPostId = $('#posts').val();
        if (!selectedPostId){
            return;
        }
        let requestPosts = $.ajax({
            url: serviceUrl + "/posts/" + selectedPostId,
            headers: authHeaders
        })

        let requestComments = $.ajax({
            url: serviceUrl + `/comments/?query={"post_id":"${selectedPostId}"}`,
            headers: authHeaders
        })

        Promise.all([requestPosts, requestComments])
            .then(displayPostWithComments)
            .catch(displayError);
    }
    
    function displayPostWithComments([post, comments]) {
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
        $('#post-comments').empty();
        for (let comment of comments) {
            let commentItem = $('<li>')
                .text(comment.text);
            $('#post-comments').append(commentItem);
        }
    }
}
