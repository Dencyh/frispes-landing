export function scroll() {
  /* Gallery */
  const gallery = document.querySelector(".gallery");
  const galleryImages = [...document.querySelectorAll(".gallery__item")];
  const galleryScrollLeft = document.querySelector("#galleryPrevious");
  const galleryScrollRight = document.querySelector("#galleryNext");

  adjustImage();
  let adjustImageOptimized = throttle(adjustImage, 100);

  gallery.addEventListener("scroll", adjustImageOptimized);

  galleryScrollLeft.addEventListener("click", () => {
    gallery.scrollBy({
      left: -150,
      top: 0,
      behavior: "smooth",
    });
  });

  galleryScrollRight.addEventListener("click", () => {
    gallery.scrollBy({
      left: 150,
      top: 0,
      behavior: "smooth",
    });
  });

  function throttle(f, ms) {
    let isThrottled = false;
    let savedArgs = null;
    let that = null;

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments;
        that = this;
        return;
      }
      f.apply(this, arguments);

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(that, savedArgs);
          savedArgs = null;
          that = null;
        }
      }, ms);
    }
    return wrapper;
  }

  function adjustImage() {
    galleryImages.forEach((image) => {
      let clientWidth = document.documentElement.clientWidth;
      let imageXY = image.getBoundingClientRect();

      let pastMiddle = imageXY.right < clientWidth / 2 - 30;
      let pastSpotlight = imageXY.right < clientWidth / 2 - 60 - imageXY.width;

      if (pastMiddle && !pastSpotlight) {
        image.classList.add("gallery__image--big");
        image.classList.remove("gallery__image--small");
      } else {
        image.classList.remove("gallery__image--big");
        image.classList.add("gallery__image--small");
      }
    });
  }
}
