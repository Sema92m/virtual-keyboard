const body = document.body;
const mainSection = document.createElement("section");
const keyboard = document.createElement("div");
const textArea = document.createElement("textarea");


const h1 = document.createElement("h1");
h1.textContent = "Virtual Keyboard for Windows";
const p = document.createElement("p");
p.innerHTML = "Press <strong>rightCtrl + rightAlt</strong> to change language";

mainSection.classList.add("main");
body.insertAdjacentElement("afterbegin", mainSection);

textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "46");
textArea.setAttribute("wrap", "hard");
textArea.setAttribute("autofocus", "autofocus");
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
        let keyButtonKey2 = document.createElement("p");

        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.classList.add("btn");
        keyButton.classList.add("key");

        keyButtonKey2.classList.add("key2");
        keyButtonKey2.textContent = arr[i].key2;

        if (keyButton.textContent) {
            keyButton.innerText = keyButton.textContent;
        } else {
            keyButton.innerText = `${arr[i].key}`;
        }
        if (arr[i].key2) {
            keyButton.append(keyButtonKey2);
        }
        keyboard.appendChild(keyButton);
    }
    try {
        // const shiftLeft = document.querySelector("#ShiftLeft");
        // shiftLeft.style.position = "relative";
        // shiftLeft.append(greenRound);

        const capsLock = document.querySelector("#CapsLock");
        capsLock.style.position = "relative";
        capsLock.append(orangeRound);
    } catch (err) {
        console.log(err);
    }
}
createKey(keyArr);

document.addEventListener("keydown", (event) => {
  textArea.focus()
    let eventCode = document.querySelector(`#${event.code}`);
    console.log(event);
    // console.log(event.code);
    if (
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
    }

    eventCode.classList.add("active");
    if (event.code === "CapsLock") {
        orangeRound.classList.toggle("orange");
    }

    soundTag.play();
});

//animate btn remove when keyup
document.addEventListener("keyup", (event) => {
    let eventCode = document.querySelector(`#${event.code}`);
    eventCode.classList.remove("active");
    textArea.focus()
});


//shft=>UpperCase
document.querySelectorAll(".btn").forEach(function (key) {
    key.addEventListener("click", function () {
        let letter = key.textContent;
        if (shiftPressed) {
            letter = letter.toUpperCase();
        }
        
    });
});


//arrows
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "↑" +
            text.substring(cursorPosition); // insert the "↑" symbol at the cursor position
        textArea.selectionEnd = cursorPosition + 1; // move the cursor one position to the right
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "↓" +
            text.substring(cursorPosition); // insert the "↑" symbol at the cursor position
        textArea.selectionEnd = cursorPosition + 1; // move the cursor one position to the right
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "→" +
            text.substring(cursorPosition); // insert the "↑" symbol at the cursor position
        textArea.selectionEnd = cursorPosition + 1; // move the cursor one position to the right
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "←" +
            text.substring(cursorPosition); // insert the "↑" symbol at the cursor position
        textArea.selectionEnd = cursorPosition + 1; // move the cursor one position to the right
    }
});

//tab
document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
        const cursorPosition = textArea.selectionStart;
        const text = textArea.value;
        textArea.value =
            text.substring(0, cursorPosition) +
            "\t" +
            text.substring(cursorPosition);
        textArea.selectionEnd = cursorPosition + 4;
    }
});



//flags, must be here, more in additional.js
const space = document.querySelector("#Space");
space.append(ukFlag);






// Get the current text selection in the input field
var selectionStart = textArea.selectionStart;
var selectionEnd = textArea.selectionEnd;
console.log(selectionStart)
// Delete the selected text (if any)
if (selectionStart !== selectionEnd) {
  textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionEnd);
  textArea.selectionStart = textArea.selectionEnd = selectionStart;
}
// Delete the character after the text cursor
else {
  textArea.value = textArea.value.slice(0, selectionStart) + textArea.value.slice(selectionStart + 1);
}

// Set the focus back to the input field
textArea.focus();