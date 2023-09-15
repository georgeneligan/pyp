let inputUsd = document.querySelector(".usd");
let inputUser = document.querySelector(".user");
let transferBtn = document.querySelector(".transfer-btn");
let headerPage = document.querySelector(".header");
let succsesfulyPage = document.querySelector(".ssecssesfuly-wrapper");
let makeMoreBtn = document.querySelector(".make-more-btn");
let countUsd = document.querySelector(".count-usd");
let sendingUser = document.querySelector(".sending-user");

transferBtn.addEventListener("click", () => {
  headerPage.classList.add("hidden");
  succsesfulyPage.classList.remove("hidden");
  countUsd.innerHTML = `${inputUsd.value} $`;
  sendingUser.innerHTML = `@${inputUser.value}`;
});

makeMoreBtn.addEventListener("click", () => {
  succsesfulyPage.classList.add("hidden");
  headerPage.classList.remove("hidden");
  countUsd.innerHTML = "";
  sendingUser.innerHTML = "";
  inputUsd.value = "";
  inputUser.value = "";
});
