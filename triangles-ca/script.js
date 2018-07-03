const container = document.querySelector(".container p");
const btns = document.querySelectorAll("button");
const countInput = document.getElementById('count');

const createTriangle = (rows) => {
  let triangle = "";

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      triangle += "*&nbsp";
    }
    triangle += "<br>";
  }
  container.innerHTML = triangle;
};

const createPyramid = (rows) => {
  let pyramid = "";

  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < rows - i; k++) {
      pyramid += "&nbsp";
    }
    for (let j = 0; j <= i; j++) {
      pyramid += "*&nbsp";
    }
    pyramid += "<br>";
  }
  container.innerHTML = pyramid;
};

const createRevPyramid = (rows) => {
  let revPyramid = "";

  for (let i = rows; i > 0; i--) {
    for (let k = 0; k < rows - i; k++) {
      revPyramid += "&nbsp";
    }
    for (let k = 0; k < i; k++) {
      revPyramid += "*&nbsp";
    }
    revPyramid += "<br>";
  }
  container.innerHTML = revPyramid;
};

const clear = () => container.innerHTML = "";

function draw(shape, rows) {
  switch (shape) {
    case "triangle":
      createTriangle(rows);
      break;
    case "pyramid":
      createPyramid(rows);
      break;
    case "reverse pyramid":
      createRevPyramid(rows);
      break;
    case "clear":
      clear();
      break;
  }
}

btns.forEach(btn =>
  btn.addEventListener("click", e => draw(e.target.innerHTML, countInput.value))
);
