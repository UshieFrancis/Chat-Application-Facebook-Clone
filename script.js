let dropdownsettings = document.querySelector(".drop-down-settings");
let darkBtn = document.getElementById("dark-btn");

function dropDownSettingsToggle() {
  dropdownsettings.classList.toggle("settings-height");
}

darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.add("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
