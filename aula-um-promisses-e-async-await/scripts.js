const buttonOfcallbackButton = document.getElementById("callbackButton");
const buttonOfpromiseButton = document.getElementById("promiseButton");
const buttonOfpromiseAllButton = document.getElementById("promiseAllButton");
const buttonOfpromiseAllSettledButton = document.getElementById("promiseAllSettledButton");
const buttonOfpromiseRaceButton = document.getElementById("promiseRaceButton");
const buttonOfpromiseAsyncAwaitButton = document.getElementById("promiseAsyncAwaitButton");

const inputOfPostId = document.getElementById("postIdInput");
inputOfPostId.value = 1;

function getPosts(postId) {
    return fetch('http://localhost:3000/posts/' + postId)
        .then((response) => {
            return response.json();
        });
}

function getPostsCb(postId, callback) {
    return getPosts(postId)
        .then((post) => {
            callback(null, post);
        })
        .catch((error) => {
            callback(error, null);
        });
}

function getComments(postId) {
    return fetch('http://localhost:3000/comments?postId=' + postId)
        .then((response) => {
            return response.json();
        });
}

function getCommentsCb(postId, callback) {
    return getComments(postId)
        .then((post) => {
            callback(null, post);
        })
        .catch((error) => {
            callback(error, null);
        });
}

function imprimePost(post) {
    const postElement = document.getElementById('post');

    if (!post) {
        postElement.innerHTML = `
            <h2>Não há post com esse ID</h2>
            <p>Tente outro ID</p>
        `;
        return;
    }
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.views}</p>
    `;
}

function imprimeComments(comment) {
    const postElement = document.getElementById('comments');
    postElement.innerHTML = "";

    if (!comment || comment.length === 0) {
        postElement.innerHTML = `
            <p>Não há comentariuos</p>
        `;
        return;
    }
    comment.forEach((comment) => {
        postElement.innerHTML += `
            <p>${comment.id} - ${comment.text}</p>
        `;
    });
}

buttonOfcallbackButton.addEventListener('click', () => {
    console.log('Callback function called!');
    const postId = inputOfPostId.value;
    getPostsCb(postId, (err, post) => {
        if (err) {
            console.error(err);
            return;
        }
        imprimePost(post);
        getCommentsCb(post.id, (err, comments) => {
            if (err) {
                console.error(err);
                return;
            }
            imprimeComments(comments);
        })
    })
});

buttonOfpromiseButton.addEventListener('click', () => {
    console.log('Promise function called!');
    getPosts(inputOfPostId.value)
        .then((post) => {
            imprimePost(post);
            return post.id;
        })
        .then((postId) => {
            return getComments(postId)
        })
        .then((comments) => {
            imprimeComments(comments);
        })
        .catch((error) => {
            console.error('Erro Promisse: ', error);
        })
});

buttonOfpromiseAllButton.addEventListener('click', () => {
    console.log('Promise.all function called!');

    Promise.all(
        [getPosts(inputOfPostId.value), getComments(inputOfPostId.value)]
    )
        .then((responses) => {
            const post = responses[0];
            const comments = responses[1];

            imprimePost(post);
            imprimeComments(comments);
        })
        .catch((error) => {
            console.error('Erro Promisse All: ', error);
        })
});

buttonOfpromiseAllSettledButton.addEventListener('click', () => {
    console.log('Promise.allSettled function called!');
});

buttonOfpromiseRaceButton.addEventListener('click', () => {
    console.log('Promise.race function called!');
});

buttonOfpromiseAsyncAwaitButton.addEventListener('click', () => {
    console.log('Promise async/await function called!');
});