let alumniList = [];

function registerAlumni() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value.trim();
    const batch = document.getElementById("batch").value.trim();

    const message = document.getElementById("message");

    if (!name || !email || !department || !batch) {
        message.textContent = "Please fill all fields.";
        return;
    }

    const existing = alumniList.find(
        alumni => alumni.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
        message.textContent = "Email already registered.";
        return;
    }

    alumniList.push({
        name,
        email,
        department,
        batch
    });

    message.textContent = "Alumni registered successfully.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("batch").value = "";
}

function searchAlumni() {
    const search = document.getElementById("search").value
        .trim()
        .toLowerCase();

    const results = document.getElementById("results");

    const matches = alumniList.filter(alumni =>
        alumni.name.toLowerCase().includes(search)
    );

    if (matches.length === 0) {
        results.innerHTML = "<p>No alumni found.</p>";
        return;
    }

    results.innerHTML = matches.map(alumni => `
        <div class="alumni">
            <strong>${alumni.name}</strong><br>
            Email: ${alumni.email}<br>
            Department: ${alumni.department}<br>
            Batch: ${alumni.batch}
        </div>
    `).join("");
}