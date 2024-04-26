const input = document.getElementById("input");
const list = document.getElementById("list-container");
function add() {
  if (input.value === "") {
    alert("Please enter the task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);

    let img = document.createElement("img");
    img.src = "circle-xmark-solid.png";
    li.appendChild(img);
  }
  input.value = "";
  save();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
      e.target.classList.toggle("check");
      save();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", list.innerHTML);
}

function getdata() {
  list.innerHTML = localStorage.getItem("data");
}
getdata();
