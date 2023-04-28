

const hexaColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
      color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
};



function createAudio() {
  soundTag.setAttribute("id", "click-sound");
  const soundSourceTag = document.createElement("source");
  soundSourceTag.setAttribute("src", "./button-click.mp3");
  soundSourceTag.setAttribute("type", "audio/mp3");
  soundTag.append(soundSourceTag);
  mainSection.append(soundTag);
}