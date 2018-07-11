const guestListContainer = document.querySelector(".guest-list-container ul");
const buttons = document.querySelectorAll("button");
const input = document.getElementById("name");
const fromInput = document.getElementById("fromInput");
const toInput = document.getElementById("toInput");
const guestName = document.getElementById("nameToChange");
const updatedGuestName = document.getElementById("changedName");
const certainPoint = document.getElementById("certainPoint");
const sortBtn = document.getElementById("sort");

let guestList = ["Petras", "Antanas", "Kazys", "Bronislavas"];
let sorted = false;

const addToEnd = value => guestList.push(value);
const addToStart = value => guestList.unshift(value);
const removeFirst = () => guestList.shift();
const removeLast = () => guestList.pop();
const reverseList = () => guestList.reverse();
const lastToFirst = () => guestList.unshift(guestList.pop());
const firstToLast = () => guestList.push(guestList.shift());
const addAtCertainPoint = (point, value) => guestList.splice(point, 0, value);

const sort = () => {
  if (!sorted) {
    guestList.sort((a, b) => a > b);
  } else {
    guestList.sort((a, b) => a < b);
  }

  sortBtn.innerHTML = sorted ? "Sort A-Z" : "Sort Z-A";
  sorted = !sorted;
};

const removeFromTo = (from, to) => {
  const fromValue = from - 1;
  const dif = to - first;
  const deleteCount = dif > 0 ? dif : 1;

  guestList.splice(fromValue, deleteCount);
};

const changeName = (arr, name, updatedName) => {
  const newArr = arr;
  const index = arr.findIndex(item => item === name);

  newArr[index] = updatedName ? updatedName : newArr[index];
  return newArr;
};

const showList = () =>
  (guestListContainer.innerHTML = guestList
    .map(guest => `<li>${guest}</li>`)
    .join(""));

const draw = options => {
  switch (options.action) {
    case "addToEnd":
      addToEnd(options.value);
      break;
    case "addToStart":
      addToStart(options.value);
      break;
    case "removeFirst":
      removeFirst();
      break;
    case "removeLast":
      removeLast();
      break;
    case "reverseList":
      reverseList();
      break;
    case "lastToFirst":
      lastToFirst();
      break;
    case "firstToLast":
      firstToLast();
      break;
    case "removeFromTo":
      removeFromTo(options.from, options.to);
      break;
    case "addAtCertainPoint":
      addAtCertainPoint(options.point, options.value);
      break;
    case "sort":
      sort();
      break;
    case "replaceGuest":
      guestList = changeName(
        guestList,
        options.nameToChange,
        options.changedName
      );
      break;
  }
};

const handleClick = e => {
  const options = {
    action: e.target.id,
    value: input.value,
    from: fromInput.value,
    to: toInput.value,
    point: certainPoint.value,
    nameToChange: guestName.value,
    changedName: updatedGuestName.value
  };

  draw(options);
  showList();
};

document.addEventListener("DOMContentLoaded", () => {
  showList();
  buttons.forEach(btn => btn.addEventListener("click", handleClick));
});
