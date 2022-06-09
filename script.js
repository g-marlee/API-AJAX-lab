const goButton = document.getElementById("go-button");
const userInput = document.getElementById("text-box");

const redditPromise = fetch("https://www.reddit.com/r/aww/.json").then((res) => res.json())
.then((data) => {
    const postContainer = document.createElement("div");
    document.body.appendChild(postContainer);
    postContainer.classList.add("post-container");

    const subredditTitle = document.createElement("h2");

    console.log(data);
    let postCount = 0;

    data.data.children.forEach(post => {
        if (postCount === 0) {
            subredditTitle.innerText = `/r/${post.data.subreddit}`;
            postContainer.appendChild(subredditTitle);
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