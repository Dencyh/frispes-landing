export function scrollbar() {
  const scrollbar = document.querySelector("#scrollbar");
  const scrollbarThumb = document.querySelector("#scrollbarThumb");
  const parent = document.querySelector(".reviews");
  const children = document.querySelectorAll(".reviews__item");
  const lastChild = children[children.length - 1];
  let parentXYOriginal = parent.getBoundingClientRect();
  let childXYOriginal = lastChild.getBoundingClientRect();

  const calculateProportion = (parent, lastChild) => {
    return () => {
      let proportion =
        Math.floor(
          (parent.getBoundingClientRect().width /
            lastChild.getBoundingClientRect().right) *
            100
        ) + "%";

      scrollbarThumb.style.width = proportion;
      parentXYOriginal = parent.getBoundingClientRect();
    };
  };

  parent.addEventListener("scroll", animate);
  window.addEventListener("resize", calculateProportion(parent, lastChild));
  window.addEventListener("resize", animate);

  function animate() {
    let parentXY = parent.getBoundingClientRect();
    let childXY = lastChild.getBoundingClientRect();
    let thumbXY = scrollbarThumb.getBoundingClientRect();
    let scrollbarXY = scrollbar.getBoundingClientRect();

    let path = childXYOriginal.right - parentXYOriginal.right;
    let progress = (childXY.right - parentXY.width) / path;

    scrollbarThumb.style.right =
      (scrollbarXY.width - thumbXY.width) * progress + "px";
  }

  calculateProportion(parent, lastChild)();
  animate();
}

export function scrollControls() {
  const element = document.querySelector(".reviews");
  const priviousButton = document.querySelector("#reviewPrevious");
  const nextButton = document.querySelector("#reviewNext");

  priviousButton.addEventListener("click", () => {
    element.scrollBy({
      left: -150,
      top: 0,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    element.scrollBy({
      left: 150,
      top: 0,
      behavior: "smooth",
    });
  });
}
