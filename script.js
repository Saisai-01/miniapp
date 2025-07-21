let tg = window.Telegram.WebApp;
tg.expand(); // Full screen

document.getElementById("btn").addEventListener("click", () => {
  tg.sendData("You clicked the button!"); // Send data back to bot
});
