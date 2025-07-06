window.onload = () => {
  const fill = document.querySelector(".fill");
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  fill.style.width = "100%";

  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 3000);
};

let selectedRating = 0;

document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    document.getElementById("rating-value").textContent = `Puanınız: ${selectedRating} / 5`;
    document.querySelectorAll(".star").forEach(s => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) {
      document.querySelectorAll(".star")[i].classList.add("selected");
    }
  });
});

function submitFeedback() {
  const comment = document.getElementById("comment").value.trim();
  if (!selectedRating && !comment) {
    alert("Lütfen yorum yapın veya puan verin.");
    return;
  }
  const feedbackContainer = document.getElementById("submitted-feedback");
  const entry = document.createElement("div");
  entry.innerHTML = `<strong>Puan:</strong> ${selectedRating || "Yok"} / 5<br><strong>Yorum:</strong> ${comment || "Yok"}`;
  feedbackContainer.prepend(entry);

  // Clear inputs
  selectedRating = 0;
  document.querySelectorAll(".star").forEach(s => s.classList.remove("selected"));
  document.getElementById("rating-value").textContent = "Henüz puan verilmedi.";
  document.getElementById("comment").value = "";
}

function showText(id) {
  const box = document.getElementById(id);
  box.querySelector(".text").classList.add("active");
  box.querySelector(".image").classList.remove("active");
}
function showImage(id) {
  const box = document.getElementById(id);
  box.querySelector(".image").classList.add("active");
  box.querySelector(".text").classList.remove("active");
}


function nextImage(id) {
  const box = document.getElementById(id);
  const images = box.querySelectorAll(".image img");
  let current = box.querySelector(".image img.active-img");
  let currentIndex = Array.from(images).indexOf(current);
  current.classList.remove("active-img");
  let nextIndex = (currentIndex + 1) % images.length;
  images[nextIndex].classList.add("active-img");
}



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("yorumFormu");
  const yorumListesi = document.getElementById("yorumListesi");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isim = document.getElementById("isim").value.trim();
    const puan = document.getElementById("puan").value;
    const yorum = document.getElementById("yorum").value.trim();

    if (isim && yorum) {
      const yorumDiv = document.createElement("div");
      yorumDiv.style.border = "1px solid #ccc";
      yorumDiv.style.padding = "10px";
      yorumDiv.style.marginBottom = "10px";
      yorumDiv.style.backgroundColor = "#fff";
      yorumDiv.innerHTML = `<strong>${isim} - Puan: ${puan}</strong><p>${yorum}</p>`;
      yorumListesi.appendChild(yorumDiv);

      form.reset();
    }
  });
});
