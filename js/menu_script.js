let button = document.querySelectorAll(".cuisines li button");
let grid_images = document.querySelectorAll(".grid-images");

Array.from(button).forEach(function (buttonArray, i) {
  buttonArray.addEventListener("click", function () {
    Array.from(button).forEach((buttonAll) =>
      buttonAll.classList.remove("button-active")
    );

    Array.from(grid_images).forEach((content_insideAll) =>
      content_insideAll.classList.remove("cuisine_active")
    );

    button[i].classList.add("button-active");
    grid_images[i].classList.add("cuisine_active");
  });
});
