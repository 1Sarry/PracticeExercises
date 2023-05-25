let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let error = document.getElementById("info")

form.addEventListener("submit", (fvalid) => {
  let error = [];
  fvalid.preventDefault();
  if (fname.value == "") {
    form.info.display("none");
  }
});
