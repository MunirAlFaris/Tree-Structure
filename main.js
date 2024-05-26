document.querySelectorAll(".btn").forEach((btn) => {
  btn.onclick = (event) => {
    event.target.classList.toggle("btn-opened");
    const entry = event.target.closest(".entry");
    Array.from(entry.querySelectorAll(".container"))
      .filter((e) => e.closest(".entry") === entry)
      .forEach((container, index, array) => {
        container.classList.toggle("hide");
        if (index < array.length - 1) {
          container.classList.toggle("line");
        }
      });
    entry.querySelector(".controls").classList.toggle("line");
    entry.querySelector(".entry-text").classList.toggle("line");
  };
});
