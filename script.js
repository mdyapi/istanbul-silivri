
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("yorumFormu");
    const adInput = document.getElementById("adSoyad");
    const yorumInput = document.getElementById("yorum");
    const puanInput = document.getElementById("puan");
    const yorumListesi = document.getElementById("yorumListesi");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const ad = adInput.value.trim();
        const yorum = yorumInput.value.trim();
        const puan = puanInput.value;

        if (ad && yorum && puan) {
            const yorumData = {
                ad,
                yorum,
                puan,
                tarih: new Date().toISOString()
            };

            db.ref("yorumlar").push(yorumData);

            adInput.value = "";
            yorumInput.value = "";
            puanInput.value = "5";
        }
    });

    db.ref("yorumlar").on("value", function (snapshot) {
        yorumListesi.innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            const data = childSnapshot.val();
            const yorumEl = document.createElement("div");
            yorumEl.className = "yorum";
            yorumEl.innerHTML = `<strong>${data.ad}</strong> - Puan: ${data.puan}<br>${data.yorum}<hr>`;
            yorumListesi.appendChild(yorumEl);
        });
    });
});
