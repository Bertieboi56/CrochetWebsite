async function loadNavbar() {
    const navbar = document.querySelector("#navbar");

    const response = await fetch("components/navbar.html");
    navbar.innerHTML = await response.text();
}

loadNavbar();