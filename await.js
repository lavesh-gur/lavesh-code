async function executeAsyncAwait() {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "result will be available within a minute...";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch("https://dummyjson.com/posts", { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      outputDiv.innerHTML = ""; 
      data.posts.forEach(post => {
        const postTitle = document.createElement("p");
        postTitle.textContent = post.title;
        outputDiv.appendChild(postTitle);
      });
    } catch (error) {
      outputDiv.textContent = error.name === 'AbortError' ? "Operation timed out" : Error ,error.message;
    }
  }