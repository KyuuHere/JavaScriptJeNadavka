document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("promptForm").addEventListener("submit", function(event) {
alert(`Bo`);
});
});
//zmena textu

// Po načtení DOM (struktury stránky)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('zmenatextu');
    const Roblox = document.getElementById('text');
   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); //aby to neodeslalo
        Roblox.textContent = 'Minecraft'; // Změna textu
    

    });
});
