// mobile menu
for (let i = 2; i <= 6; ++i) {
    document.querySelector("#open-menu" + i + "-button").addEventListener("click", function () {
      document.querySelector(".mobile-header" + i).dataset.menuActive = true;
    });
    document.querySelector("#close-menu" + i + "-button").addEventListener("click", function () {
      delete document.querySelector(".mobile-header" + i).dataset.menuActive;
    });
  }
  