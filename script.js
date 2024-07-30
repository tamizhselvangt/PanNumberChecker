const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  const input = document.querySelector("#panNumber");
  const regex = /^[A-Z]{5}\d{4}[A-Z]$/;

  if (regex.test(input.value)) {
    alert("The string matches!");
  } else {
    alert("The string does not match.");
  }
});
