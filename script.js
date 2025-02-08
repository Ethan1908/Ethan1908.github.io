document.addEventListener("DOMContentLoaded", function () {
    const data = [
        { nom: "BRICOUT", prénom: "Ethan", age: 14, sexe: "H", email: "ebricout64@outlook.fr", categorie: "U18", categorie_arc: "CL", n_licence: "Inconnue" },
        { nom: "", prénom: "", age: 0, sexe: "", email: "", categorie: "", categorie_arc: "", n_licence: "" },
        { nom: "", prénom: "", age: 0, sexe: "", email: "", categorie: "", categorie_arc: "", n_licence: "" }
    ];

    const tableBody = document.querySelector("#data-table tbody");

    data.forEach(person => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${person.nom}</td>
            <td>${person.prénom}</td>
            <td>${person.age}</td>
            <td>${person.sexe}</td>
            <td>${person.email}</td>
            <td>${person.categorie}</td>
            <td>${person.categorie_arc}</td>
            <td>${person.n_licence}</td>
        `;
        tableBody.appendChild(row);
    });
});