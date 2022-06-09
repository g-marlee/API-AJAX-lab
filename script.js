const goButton = document.getElementById("go-button");
const userInput = document.getElementById("text-box");

goButton.addEventListener("click", goButtonHandler);



const redditPromise = fetch("https://www.reddit.com/r/aww/.json").then((res) => res.json())
.then((data) => {
    const postContainer = document.getElementById("container");
    const subredditTitle = document.createElement("h2");
    postContainer.appendChild(subredditTitle);

    console.log(data);
    let postCount = 0;

    data.data.children.forEach(post => {
        if (postCount === 0) {
            subredditTitle.innerText = `/r/${post.data.subreddit}`;
        }

        const redditPost = document.createElement("div");
        redditPost.classList.add("post");

        const title = document.createElement("h3");
        title.innerText = post.data.title;
        redditPost.appendChild(title);

        const image = document.createElement("img");
        image.src = post.data.thumbnail;
        redditPost.appendChild(image);

        const link = document.createElement("a");
        link.href = `https://reddit.com/${post.data.permalink}`;
        link.innerText = "link";
        redditPost.appendChild(link);

        postContainer.appendChild(redditPost);
        postCount++;
    });
})

function goButtonHandler() {

    let subredditInput = userInput.value;
    const fetchURL = `https://www.reddit.com/r/${subredditInput}/.json`;
    console.log(fetchURL);
    let postContainer = document.getElementById("container");
    let posts = document.querySelectorAll(".post");
    posts.forEach(post => {
        postContainer.removeChild(post);
    });

    const redditPromise = fetch(fetchURL).then((res) => res.json())
    .then((data) => {
        let subredditTitle = document.querySelector("h2");
        

        console.log(data);
        let postCount = 0;

        data.data.children.forEach(post => {
            if (postCount === 0) {
                subredditTitle.innerText = `/r/${post.data.subreddit}`;
            }

            const redditPost = document.createElement("div");
            redditPost.classList.add("post");

            const title = document.createElement("h3");
            title.innerText = post.data.title;
            redditPost.appendChild(title);

            if (post.data.thumbnail !== "self" && post.data.thumbnail !== "nsfw") {
                const image = document.createElement("img");
                image.src = post.data.thumbnail;
                redditPost.appendChild(image);
            }
            

            const link = document.createElement("a");
            link.href = `https://reddit.com/${post.data.permalink}`;
            link.innerText = "link";
            redditPost.appendChild(link);

            postContainer.appendChild(redditPost);
            postCount++;
        });
    })
}
