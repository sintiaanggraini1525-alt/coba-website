
document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Portofolio Sintia Anggraini berhasil dimuat.");

    // Efek saat menu navigasi diklik
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Menu diklik: " + link.textContent);
        });
    });

});
