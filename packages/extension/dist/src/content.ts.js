console.log("Aegis content script loaded");
const scanPage = () => {
  const textNodes = document.body.innerText;
  console.log("Scanning page content length:", textNodes.length);
};
scanPage();
