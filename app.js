const body = document.body;
const mainSection = document.createElement("section");
const keyboard = document.createElement("div");
const textArea = document.createElement("textarea");

const h1 = document.createElement("h1");
h1.textContent = "Virtual Keyboard for Windows";
const p = document.createElement("p");
p.innerHTML =
    "Press <strong>Right-Shift + Right-Alt</strong> to change language";

mainSection.classList.add("main");
body.insertAdjacentElement("afterbegin", mainSection);

textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "46");
textArea.setAttribute("wrap", "hard");
// textArea.setAttribute("autofocus", "autofocus");
textArea.setAttribute("placeholder", "Start writing...");

keyboard.classList.add("keyboard");
textArea.classList.add("text-area");

mainSection.append(h1);
mainSection.append(p);
mainSection.append(textArea);
mainSection.append(keyboard);

const greenRound = document.createElement("div");
greenRound.classList.add("greenRound");

const orangeRound = document.createElement("div");
orangeRound.classList.add("orangeRound");

//sound
const soundTag = document.createElement("audio");
soundTag.setAttribute("id", "click-sound");
const soundSourceTag = document.createElement("source");
soundSourceTag.setAttribute("src", "./button-click.mp3");
soundSourceTag.setAttribute("type", "audio/mp3");
soundTag.append(soundSourceTag);
mainSection.append(soundTag);
//sound

//create keys
function createKey(arr) {
    for (let i = 0; i < arr.length; i++) {
        let keyButton = document.createElement("button");
        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.innerText = `${arr[i].key}`;
        keyButton.classList.add("key");
        keyboard.appendChild(keyButton);
    }
    try {
        const shiftLeft = document.querySelector("#ShiftLeft");
        const capsLock = document.querySelector("#CapsLock");
        shiftLeft.style.position = "relative";
        capsLock.style.position = "relative";
        shiftLeft.append(greenRound);
        capsLock.append(orangeRound);
    } catch (err) {
        console.log(err);
    }
}
createKey(keyArr);

document.addEventListener("keydown", (event) => {
    let eventCode = document.querySelector(`#${event.code}`);
    console.log(event);
    if (
        event.code == "Tab" ||
        event.code === "Delete" ||
        event.key === "Shift" ||
        event.key === "Ctrl" ||
        event.key === "Alt" ||
        event.key === "Win" ||
        event.key === "Space"
    ) {
        event.preventDefault();
        textArea.innerText += "";
    } else if (event.code === "Enter") {
        event.preventDefault();
        console.log(textArea.value);
        textArea.value += "\n";
    } else if (event.code === "Backspace") {
        textArea.innerText = textArea.innerText.slice(0, -1);
    } else {
        textArea.innerText += event.key;
    }
    eventCode.classList.add("active");

    soundTag.play();
    console.log(event.code);
    if (event.code === "ShiftLeft") {
        greenRound.classList.toggle("green");
    } else if (event.code === "CapsLock") {
        orangeRound.classList.toggle("orange");
    }
});

document.addEventListener("click", () => {
    soundTag.play();
});

document.addEventListener("keyup", (event) => {
    let eventCode = document.querySelector(`#${event.code}`);
    eventCode.classList.remove("active");
    if (event.code === "ShiftLeft") {
        greenRound.classList.toggle("green");
    } else if (event.code === "CapsLock") {
        orangeRound.classList.toggle("orange");
    }
});
