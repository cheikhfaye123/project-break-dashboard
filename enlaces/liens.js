const bouton = document.getElementById("btn1");
const result = document.getElementById("resultat");

// Display saved links if any exist
if (localStorage.getItem("nameLinks") != null) {
    const nameLinks = JSON.parse(localStorage.getItem("nameLinks"));
    result.innerHTML = '';
    nameLinks.forEach(linkObj => {
        let linkElement = document.createElement("a");
        linkElement.href = linkObj.url;
        linkElement.textContent = linkObj.name;
        linkElement.target = "_blank";
        result.appendChild(linkElement);
        result.appendChild(document.createElement("br")); // Add a line break
    });
} else {
    console.log("This field cannot be empty");
}

bouton.onclick = () => {
    let nameLink = document.getElementById("nameLink").value;
    let link = document.getElementById("link").value;

    if (nameLink && link) {
        let nameLinks = JSON.parse(localStorage.getItem("nameLinks")) || [];
        nameLinks.push({ name: nameLink, url: link });
        localStorage.setItem("nameLinks", JSON.stringify(nameLinks));
        location.reload(); // Reload to update the displayed links
    } else {
        console.log("Both fields must be filled out");
    }
}
