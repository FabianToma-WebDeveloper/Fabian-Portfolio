function copyDiscord() {
    navigator.clipboard.writeText(".geaby");

    const status = document.getElementById("discordStatus");
    status.textContent = "Copiat ✓";

    setTimeout(() => {
        status.textContent = "Click pentru a copia username-ul";
    }, 2000);
}