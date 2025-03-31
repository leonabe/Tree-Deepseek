async function sendQuestion() {
  const userInput = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerHTML = "Thinking...";

  try {
    const res = await fetch("https://your-replit-url.repl.co/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: userInput })
    });

    const data = await res.json();
    responseDiv.innerHTML = data.response || "No response received.";
  } catch (error) {
    responseDiv.innerHTML = "Error contacting the model.";
    console.error(error);
  }
}
