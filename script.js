const redditPromise = fetch("https://www.reddit.com/r/aww/.json").then((res) => res.json())
.then((data) => {
    const postContainer = document.createElement("div");
    document.body.appendChild(postContainer);
    postContainer.classList.add("post-container");

    console.log(data.data.children);

    data.data.children.forEach(post => {
        const redditPost = document.createElement("div");
        redditPost.classList.add("post");

        const title = document.createElement("h3");
        title.innerText = post.data.title;
        redditPost.appendChild(title);

        const image = document.createElement("img");
        image.src = post.data.thumbnail;
        redditPost.appendChild(image);

        const link = document.createElement("a");
        link.href = post.data.permalink;
        link.innerText = "link";
        redditPost.appendChild(link);

        postContainer.appendChild(redditPost);
    });
})