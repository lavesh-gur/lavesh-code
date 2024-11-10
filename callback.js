function executeCallback() {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "result will be available within a minute...";
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data => {
          outputDiv.innerHTML = ""; 
          data.posts.forEach(post => {
            const postTitle = document.createElement("p");
            postTitle.textContent = post.title;
            outputDiv.appendChild(postTitle);
          });
        })
        .catch(error => {
          outputDiv.textContent = Error ,error.message;
        });
    }, 5000);
  }
