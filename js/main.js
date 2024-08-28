fetch("header.htm")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("footer.htm")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
