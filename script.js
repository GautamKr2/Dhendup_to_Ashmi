function sendAnswer(answer) {
  fetch("https://dhendup-to-ashmi.onrender.com/answer", {
    //http://localhost:3000/answer
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ answer })
  })
  .then(res => res.json())
  .then(data => console.log("SERVER:", data))
  .catch(err => console.error("ERROR:", err));
}

function sayYes() {
  sendAnswer("YES");   // ✅ sends YES to backend
  document.getElementById("response1").innerText = "💖 Yay!🌸🌹🌼🌺🌷🌻💐";
}

function sayNo() {
  sendAnswer("NO");    // ✅ sends NO to backend
  document.getElementById("response2").innerText = "Thangni angni logw nwngni gwdan haijo😊";
}


