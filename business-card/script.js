(doc => {
  const form = doc.querySelector("form");
  const section = doc.querySelector("section");
  const inputs = doc.querySelectorAll("input, textarea");
  const names = [...inputs].map(input => input.name); // Array.from(inputs) other method convert Nodelist to array 

  const renderCard = details => {
    let list = "";

    Object.entries(details).forEach(detail => {
      list += `<li class="card-item">${detail[0]}: ${detail[1]}</li>`;
    });
    section.innerHTML = `<ul class="card-list">${list}</ul>`;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const details = {};
    names.forEach(name => (details[name] = e.target[name].value));

    Object.entries(details).forEach(detail => {
      localStorage.setItem(detail[0], detail[1]);
    });
    renderCard(details);
  };

  const initialize = () => {
    if (localStorage.length) {
      const details = {};
      names.forEach(name => (details[name] = localStorage.getItem(name)));

      renderCard(details);
    }
  };

	initialize();
  form.addEventListener("submit", e => handleSubmit(e));
})(document);
