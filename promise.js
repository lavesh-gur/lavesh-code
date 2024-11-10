function executePromise() {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "result will be available within a minute...";

    const fetchData = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("request timed out");
      }, 5000);

      fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then(data => {
          clearTimeout(timeout); 
          resolve(data.posts);
        })
        .catch(error => reject(Error ,error.message));
    });

    fetchData
      .then(posts => {
        outputDiv.innerHTML = ""; 
        posts.forEach(post => {
          const postTitle = document.createElement("p");
          postTitle.textContent = post.title;
          outputDiv.appendChild(postTitle);
        });
      })
      .catch(error => {
        outputDiv.textContent = error;
      });
  }