let search = document.querySelector("#searching-button");
search.addEventListener("click", function () {
  alert(
    "To search or to be seached that is the search\nSearch: " +
      document.querySelector("#searching-input").value
  );
});

// carusel
var images = document.querySelectorAll(".carusel-container > div");
var image_index = 0;

images.forEach((image) => {
  let image_path = image.getAttribute("src");
  image.setAttribute("src", "");
  image.style.backgroundImage = 'url("' + image_path + '")';
});

setInterval(function () {
  delete images[image_index].dataset.activeSlide;
  image_index++;
  if (image_index >= images.length) {
    image_index = 0;
  }
  images[image_index].dataset.activeSlide = true;
}, 7000);

// carusel-mobile
var images_m = document.querySelectorAll(".carusel-container-mobile > div");
var image_index_m = 0;

images_m.forEach((image_m) => {
  let image_path_m = image_m.getAttribute("src");
  image_m.setAttribute("src", "");
  image_m.style.backgroundImage = 'url("' + image_path_m + '")';
});

setInterval(function () {
  delete images_m[image_index_m].dataset.activeSlide;
  image_index_m++;
  if (image_index_m >= images_m.length) {
    image_index_m = 0;
  }
  images_m[image_index_m].dataset.activeSlide = true;
}, 7000);