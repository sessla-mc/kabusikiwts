window.addEventListener("load", function() {
    const per1 = document.getElementById("per1");
window.addEventListener("scroll", function() {
    const mer_item1 = document.getElementById("mer_item1");
    const rect = mer_item1.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom >= 0) {
      per1.style.opacity = 1;
    }
  });
});

window.addEventListener("load", function() {
  const per2 = document.getElementById("per2");
window.addEventListener("scroll", function() {
  const mer_item2 = document.getElementById("mer_item2");
  const rect = mer_item1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    per2.style.opacity = 1;
  }
});
});

window.addEventListener("load", function() {
  const per3 = document.getElementById("per3");
window.addEventListener("scroll", function() {
  const mer_item3 = document.getElementById("mer_item3");
  const rect = mer_item1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    per3.style.opacity = 1;
  }
});
});

window.addEventListener("load", function() {
  const per4 = document.getElementById("per4");
window.addEventListener("scroll", function() {
  const mer_item4 = document.getElementById("mer_item4");
  const rect = mer_item1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    per4.style.opacity = 1;
  }
});
});