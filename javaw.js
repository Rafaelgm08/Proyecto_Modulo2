document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentsContainer = document.querySelector(".comments");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const comment = commentInput.value;
        const date = new Date().toLocaleString();

        if (name && comment) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <strong>${name}</strong> - ${date}<br>
                ${comment}
            `;
            commentsContainer.appendChild(commentElement);

            nameInput.value = "";
            commentInput.value = "";
        }
    });
});