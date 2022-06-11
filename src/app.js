console.log("HELLO WORLD");

function toggleItem(toggleItem) {
  for (let i = 1; i < 4; i++) {
    const photo = document.getElementById(`photo-${i}`);
    const event = document.getElementById(`event-${i}`);
    const content = document.getElementById(`content-${i}`);

    photo.classList.remove("event__photo--active");
    event.classList.remove("event__item--active");
    content.classList.remove("event__content--active");

    if (i === toggleItem) {
      photo.classList.add("event__photo--active");
      event.classList.add("event__item--active");
      content.classList.add("event__content--active");
    }
  }
}

document.getElementById("event-1").addEventListener("click", () => {
  console.log("clicked 1");
  toggleItem(1);
});
document.getElementById("event-2").addEventListener("click", () => {
  console.log("clicked 2");
  toggleItem(2);
});
document.getElementById("event-3").addEventListener("click", () => {
  console.log("clicked 3");
  toggleItem(3);
});
