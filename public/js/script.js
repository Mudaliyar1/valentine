document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("love-note-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const recipient = document.getElementById("recipient").value;
        const message = document.getElementById("message").value;

        if (name && recipient && message) {
            displayLoveNote(name, recipient, message);
            form.reset();
        } else {
            alert("Please fill out all fields before sending your love note.");
        }
    });

    function displayLoveNote(name, recipient, message) {
        const notesSection = document.createElement("section");
        notesSection.classList.add("love-notes");

        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `
            <h3>From: ${name}</h3>
            <h4>To: ${recipient}</h4>
            <p>${message}</p>
        `;

        notesSection.appendChild(note);
        document.body.appendChild(notesSection);

        alert("Your love note has been sent and displayed on the page!");
    }
});