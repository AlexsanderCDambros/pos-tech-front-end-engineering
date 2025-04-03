const buttonOfcallbackButton = document.getElementById("callbackButton");
const buttonOfpromiseButton = document.getElementById("promiseButton");
const buttonOfpromiseAllButton = document.getElementById("promiseAllButton");
const buttonOfpromiseAllSettledButton = document.getElementById("promiseAllSettledButton");
const buttonOfpromiseRaceButton = document.getElementById("promiseRaceButton");
const buttonOfpromiseAsyncAwaitButton = document.getElementById("promiseAsyncAwaitButton");

const inputOfPostId = document.getElementById("postIdInput");
inputOfPostId.value = 1;

function getPostsCB(postId, callback) {
    return fetch('http://localhost:3000/posts/' + postId)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        callback(data);
    })
    .catch((error) => {
        console.error('Erro Post:', error);
    });
}

function getComentsCB(postId, callback) {
    return fetch('http://localhost:3000/comments?postId=' + postId)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        callback(data);
    })
    .catch((error) => {
        console.error('Erro Comments:', error);
    });;
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

buttonOfcallbackButton.addEventListener ('click', () => {
    console.log('Callback function called!');
    const postId = inputOfPostId.value;
    getPosts(postId, (post) => {
        imprimePost(post);
        getComents(post.id, (comments) => {
            imprimeComments(comments);
        })
    })
});

buttonOfpromiseButton.addEventListener('click', () => {
    console.log('Promise function called!');
});

buttonOfpromiseAllButton.addEventListener('click', () => {
    console.log('Promise.all function called!');
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