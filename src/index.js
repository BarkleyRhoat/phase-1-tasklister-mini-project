document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let ul = document.querySelector("#tasks");
  let ol = document.createElement("ol");
  ol.id = "tasks";
  ul.parentNode.replaceChild(ol, ul);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildTaskLister(e.target["new-task-description"].value);
    form.reset();
  });
});

function buildTaskLister(lister) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "🗑️";
  li.textContent = `${lister[0].toUpperCase() + lister.slice(1)} `;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function elementColor() {
  let h1 = document.querySelector("h1");
  let body = document.querySelector("body");
  h1.style.color = "blue";
  body.style.background = "yellow";
}
elementColor();
