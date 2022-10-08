const rating = document.querySelector(".rating");
const children = [...rating.children];
let value;

// if any of the new child is clicked then remove active class from previous and add active class to new child
children.forEach((child, index) => {
  child.addEventListener("click", () => {
    children.forEach((child) => {
      child.classList.remove("active");
    });
    child.classList.add("active");
    //store value at local storage
    value = index + 1;
    localStorage.setItem("rating", value);
  });
});
