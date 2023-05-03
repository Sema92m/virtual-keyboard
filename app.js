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
textArea.classList.add("text-area");

keyboard.classList.add("keyboard");

mainSection.append(h1);
mainSection.append(p);
mainSection.append(textArea);
mainSection.append(keyboard);

//capslock indikator
const orangeRound = document.createElement("div");
orangeRound.classList.add("orangeRound");

//sound
const soundTag = document.createElement("audio");

const keyArr = [
    {
        id: "Backquote",
        key: "`",
        key2: "~",
        keyCode: "192",
    },
    {
        id: "Digit1",
        key: "1",
        key2: "!",
        keyCode: "49",
    },
    {
        id: "Digit2",
        key: "2",
        key2: "@",
        keyCode: "50",
    },
    {
        id: "Digit3",
        key: "3",
        key2: "#",
        keyCode: "51",
    },
    {
        id: "Digit4",
        key: "4",
        key2: "$",
        keyCode: "52",
    },
    {
        id: "Digit5",
        key: "5",
        key2: "%",
        keyCode: "53",
    },
    {
        id: "Digit6",
        key: "6",
        key2: "^",
        keyCode: "54",
    },
    {
        id: "Digit7",
        key: "7",
        key2: "&",
        keyCode: "55",
    },
    {
        id: "Digit8",
        key: "8",
        key2: "*",
        keyCode: "56",
    },
    {
        id: "Digit9",
        key: "9",
        key2: "(",
        keyCode: "57",
    },
    {
        id: "Digit0",
        key: "0",
        key2: "!",
        keyCode: "48",
    },
    {
        id: "Minus",
        key: "-",
        key2: "_",
        keyCode: "189",
    },
    {
        id: "Equal",
        key: "=",
        key2: "+",
        keyCode: "187",
    },
    {
        id: "Backspace",
        key: "Backspace",
        keyCode: "8",
    },
    {
        id: "Tab",
        key: "Tab",
        keyCode: "9",
        textContent: "Tab",
    },
    {
        id: "KeyQ",
        key: "Q",
        keyCode: "81",
    },
    {
        id: "KeyW",
        key: "W",
        keyCode: "87",
    },
    {
        id: "KeyE",
        key: "E",
        keyCode: "69",
    },
    {
        id: "KeyR",
        key: "R",
        keyCode: "82",
    },
    {
        id: "KeyT",
        key: "T",
        keyCode: "84",
    },
    {
        id: "KeyY",
        key: "Y",
        keyCode: "89",
    },
    {
        id: "KeyU",
        key: "U",
        keyCode: "85",
    },
    {
        id: "KeyI",
        key: "I",
        keyCode: "73",
    },
    {
        id: "KeyO",
        key: "O",
        keyCode: "79",
    },
    {
        id: "KeyP",
        key: "P",
        keyCode: "80",
    },
    {
        id: "BracketLeft",
        key: "[",
        key2: "{",
        keyCode: "219",
    },
    {
        id: "BracketRight",
        key: "]",
        key2: "}",
        keyCode: "221",
    },
    {
        id: "Backslash",
        key: "\\",
        key2: "|",
        keyCode: "220",
    },
    {
        id: "Delete",
        key: "Del",
        keyCode: "46",
    },
    {
        id: "CapsLock",
        key: "CapsLock",
        keyCode: "20",
    },
    {
        id: "KeyA",
        key: "A",
        keyCode: "65",
    },
    {
        id: "KeyS",
        key: "S",
        keyCode: "83",
    },
    {
        id: "KeyD",
        key: "D",
        keyCode: "68",
    },
    {
        id: "KeyF",
        key: "F",
        keyCode: "70",
    },
    {
        id: "KeyG",
        key: "G",
        keyCode: "71",
    },
    {
        id: "KeyH",
        key: "H",
        keyCode: "72",
    },
    {
        id: "KeyJ",
        key: "J",
        keyCode: "74",
    },
    {
        id: "KeyK",
        key: "K",
        keyCode: "75",
    },
    {
        id: "KeyL",
        key: "L",
        keyCode: "76",
    },
    {
        id: "Semicolon",
        key: ";",
        key2: ":",
        keyCode: "186",
    },
    {
        id: "Quote",
        key: "'",
        key2: '"',
        keyCode: "222",
    },
    {
        id: "Enter",
        key: "Enter",
        keyCode: "13",
    },
    {
        id: "ShiftLeft",
        key: "Shift",
        keyCode: "16",
    },

    {
        id: "KeyZ",
        key: "Z",
        keyCode: "90",
    },
    {
        id: "KeyX",
        key: "X",
        keyCode: "88",
    },
    {
        id: "KeyC",
        key: "C",
        keyCode: "67",
    },
    {
        id: "KeyV",
        key: "V",
        keyCode: "86",
    },
    {
        id: "KeyB",
        key: "B",
        keyCode: "66",
    },
    {
        id: "KeyN",
        key: "N",
        keyCode: "78",
    },
    {
        id: "KeyM",
        key: "M",
        keyCode: "77",
    },
    {
        id: "Comma",
        key: ",",
        key2: "<",
        keyCode: "188",
    },
    {
        id: "Period",
        key: ".",
        key2: ">",
        keyCode: "190",
    },
    {
        id: "Slash",
        key: "/",
        key2: "?",
        keyCode: "191",
    },
    {
        id: "ArrowUp",
        key: "↑",
        keyCode: "38",
    },
    {
        id: "ShiftRight",
        key: "Shift",
        keyCode: "16",
        textContent: "Shift",
    },
    {
        id: "ControlLeft",
        key: "Ctrl",
        keyCode: "17",
        textContent: "Ctrl",
    },
    {
        id: "Win",
        key: "Win",
        keyCode: "91",
        textContent: "Win",
    },
    {
        id: "AltLeft",
        key: "Alt",
        keyCode: "18",
        textContent: "Alt",
    },
    {
        id: "Space",
        key: "Space",
        keyCode: "32",
        textContent: "Space",
    },
    {
        id: "AltRight",
        key: "Alt",
        keyCode: "18",
        textContent: "Alt",
    },
    {
        id: "ControlRight",
        key: "Ctrl",
        keyCode: "17",
        textContent: "Ctrl",
    },
    {
        id: "ArrowLeft",
        key: "←",
        keyCode: "37",
    },
    {
        id: "ArrowDown",
        key: "↓",
        keyCode: "40",
    },
    {
        id: "ArrowRight",
        key: "→",
        keyCode: "39",
    },
];
const keyArrPolish = [
    {
        id: "Backquote",
        key: "`",
        key2: "~",
        keyCode: "192",
    },
    {
        id: "Digit1",
        key: "1",
        key2: "!",
        keyCode: "49",
    },
    {
        id: "Digit2",
        key: "2",
        key2: "@",
        keyCode: "50",
    },
    {
        id: "Digit3",
        key: "3",
        key2: "#",
        keyCode: "51",
    },
    {
        id: "Digit4",
        key: "4",
        key2: "$",
        keyCode: "52",
    },
    {
        id: "Digit5",
        key: "5",
        key2: "%",
        keyCode: "53",
    },
    {
        id: "Digit6",
        key: "6",
        key2: "^",
        keyCode: "54",
    },
    {
        id: "Digit7",
        key: "7",
        key2: "&",
        keyCode: "55",
    },
    {
        id: "Digit8",
        key: "8",
        key2: "*",
        keyCode: "56",
    },
    {
        id: "Digit9",
        key: "9",
        key2: "(",
        keyCode: "57",
    },
    {
        id: "Digit0",
        key: "0",
        key2: "!",
        keyCode: "48",
    },
    {
        id: "Minus",
        key: "-",
        key2: "_",
        keyCode: "189",
    },
    {
        id: "Equal",
        key: "=",
        key2: "+",
        keyCode: "187",
    },
    {
        id: "Backspace",
        key: "Backspace",
        keyCode: "8",
    },
    {
        id: "Tab",
        key: "Tab",
        keyCode: "9",
        textContent: "Tab",
    },
    {
        id: "KeyQ",
        key: "Q",
        keyCode: "81",
    },
    {
        id: "KeyW",
        key: "W",
        keyCode: "87",
    },
    {
        id: "KeyE",
        key: "Ę",
        keyCode: "69",
    },
    {
        id: "KeyR",
        key: "R",
        keyCode: "82",
    },
    {
        id: "KeyT",
        key: "T",
        keyCode: "84",
    },
    {
        id: "KeyY",
        key: "Y",
        keyCode: "89",
    },
    {
        id: "KeyU",
        key: "U",
        keyCode: "85",
    },
    {
        id: "KeyI",
        key: "I",
        keyCode: "73",
    },
    {
        id: "KeyO",
        key: "Ó",
        keyCode: "79",
    },
    {
        id: "KeyP",
        key: "P",
        keyCode: "80",
    },
    {
        id: "BracketLeft",
        key: "[",
        key2: "{",
        keyCode: "219",
    },
    {
        id: "BracketRight",
        key: "]",
        key2: "}",
        keyCode: "221",
    },
    {
        id: "Backslash",
        key: "\\",
        key2: "|",
        keyCode: "220",
    },
    {
        id: "Delete",
        key: "Del",
        keyCode: "46",
    },
    {
        id: "CapsLock",
        key: "CapsLock",
        keyCode: "20",
    },
    {
        id: "KeyA",
        key: "Ą",
        keyCode: "65",
    },
    {
        id: "KeyS",
        key: "Ś",
        keyCode: "83",
    },
    {
        id: "KeyD",
        key: "D",
        keyCode: "68",
    },
    {
        id: "KeyF",
        key: "F",
        keyCode: "70",
    },
    {
        id: "KeyG",
        key: "G",
        keyCode: "71",
    },
    {
        id: "KeyH",
        key: "H",
        keyCode: "72",
    },
    {
        id: "KeyJ",
        key: "J",
        keyCode: "74",
    },
    {
        id: "KeyK",
        key: "K",
        keyCode: "75",
    },
    {
        id: "KeyL",
        key: "Ł",
        keyCode: "76",
    },
    {
        id: "Semicolon",
        key: ";",
        key2: ":",
        keyCode: "186",
    },
    {
        id: "Quote",
        key: "'",
        key2: '"',
        keyCode: "222",
    },
    {
        id: "Enter",
        key: "Enter",
        keyCode: "13",
    },
    {
        id: "ShiftLeft",
        key: "Shift",
        keyCode: "16",
    },

    {
        id: "KeyZ",
        key: "Ż",
        keyCode: "90",
    },
    {
        id: "KeyX",
        key: "Ź",
        keyCode: "88",
    },
    {
        id: "KeyC",
        key: "Ć",
        keyCode: "67",
    },
    {
        id: "KeyV",
        key: "V",
        keyCode: "86",
    },
    {
        id: "KeyB",
        key: "B",
        keyCode: "66",
    },
    {
        id: "KeyN",
        key: "Ń",
        keyCode: "78",
    },
    {
        id: "KeyM",
        key: "M",
        keyCode: "77",
    },
    {
        id: "Comma",
        key: ",",
        key2: "<",
        keyCode: "188",
    },
    {
        id: "Period",
        key: ".",
        key2: ">",
        keyCode: "190",
    },
    {
        id: "Slash",
        key: "/",
        key2: "?",
        keyCode: "191",
    },
    {
        id: "ArrowUp",
        key: "↑",
        keyCode: "38",
    },
    {
        id: "ShiftRight",
        key: "Shift",
        keyCode: "16",
        textContent: "Shift",
    },
    {
        id: "ControlLeft",
        key: "Ctrl",
        keyCode: "17",
        textContent: "Ctrl",
    },
    {
        id: "Win",
        key: "Win",
        keyCode: "91",
        textContent: "Win",
    },
    {
        id: "AltLeft",
        key: "Alt",
        keyCode: "18",
        textContent: "Alt",
    },
    {
        id: "Space",
        key: "Space",
        keyCode: "32",
        textContent: "Space",
    },
    {
        id: "AltRight",
        key: "Alt",
        keyCode: "18",
        textContent: "Alt",
    },
    {
        id: "ControlRight",
        key: "Ctrl",
        keyCode: "17",
        textContent: "Ctrl",
    },
    {
        id: "ArrowLeft",
        key: "←",
        keyCode: "37",
    },
    {
        id: "ArrowDown",
        key: "↓",
        keyCode: "40",
    },
    {
        id: "ArrowRight",
        key: "→",
        keyCode: "39",
    },
];

// createKey(keyArr);
firstStart();

//create keys
function createKey(arr) {
    keyboard.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let keyButton = document.createElement("button");
        let keyButtonKey2 = document.createElement("p");

        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.classList.add("btn");

        keyButton.style.background = hexaColor();
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
        const capsLock = document.querySelector("#CapsLock");
        capsLock.style.position = "relative";
        capsLock.append(orangeRound);
    } catch (err) {
        console.log(err);
    }
    const ukFlag = document.createElement("div");
    ukFlag.setAttribute("class", "flag");
    const space = document.querySelector("#Space");
    space.append(ukFlag);
}
createAudio();

document.addEventListener("keydown", (event) => {
    const ukFlag = document.querySelector(".flag");
    textArea.focus();

    let eventCode = document.querySelector(`#${event.code}`);
    console.dir(event);
    if (eventCode) {
        eventCode.classList.add("active");
        textArea.focus();
    }
    if (event.code === "Enter") {
        event.preventDefault();
        textArea.value += "\n";
    } else if (event.code === "Backspace") {
        textArea.innerText = textArea.innerText.slice(0, -1);
    }
    //caps
    if (event.code === "CapsLock") {
        orangeRound.classList.toggle("orange");
    }
    //del+tab
    const cursorPosition = textArea.selectionStart;
    if (event.key === "Tab") {
        event.preventDefault();
        textArea.value =
            textArea.value.substring(0, cursorPosition) +
            "    " +
            textArea.value.substring(cursorPosition);
    }
    if (event.key === "Delete") {
        const end = textArea.selectionEnd;
        if (cursorPosition === end) {
            textArea.value =
                textArea.value.slice(0, cursorPosition) +
                textArea.value.slice(cursorPosition + 1);
            textArea.setSelectionRange(cursorPosition, cursorPosition);
        } else {
            textArea.value =
                textArea.value.slice(0, cursorPosition) +
                textArea.value.slice(end);
            textArea.setSelectionRange(cursorPosition, cursorPosition);
        }
        event.preventDefault();
    }
    //change lang
    if (event.ctrlKey && event.altKey) {
        if (localStorage.getItem("language") !== "Polish") {
            createKey(keyArrPolish);
            const ukFlag = document.querySelector(".flag");
            ukFlag.classList.add("flag_pol");
            localStorage.setItem("language", "Polish");
        } else if (localStorage.getItem("language") !== "English") {
            createKey(keyArr);
            const ukFlag = document.querySelector(".flag");
            ukFlag.classList.remove("flag_pol");
            localStorage.setItem("language", "English");
        }
    }
    soundTag.play();
});

//animate btn remove when keyup
document.addEventListener("keyup", (event) => {
    let eventCode = document.querySelector(`#${event.code}`);
    if (eventCode) {
        eventCode.classList.remove("active");
        textArea.focus();
    }
    textArea.focus();
});

//shft=>UpperCase
// document.querySelectorAll(".btn").forEach(function (key) {
//     key.addEventListener("click", function () {
//         let letter = key.textContent;
//         if (shiftPressed) {
//             letter = letter.toUpperCase();
//         }
//     });
// });

//arrows
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        arrowsEvent(event, "↑");
    } else if (event.key === "ArrowDown") {
        arrowsEvent(event, "↓");
    } else if (event.key === "ArrowRight") {
        arrowsEvent(event, "→");
    } else if (event.key === "ArrowLeft") {
        arrowsEvent(event, "←");
    }
});

//function for arrows when arrow argument is arrow symbol as a string "←"
function arrowsEvent(event, arrow) {
    event.preventDefault();
    const cursorPosition = textArea.selectionStart;
    const text = textArea.value;
    textArea.value =
        text.substring(0, cursorPosition) +
        `${arrow}` +
        text.substring(cursorPosition); // insert "↑" symbol at the cursor position
    textArea.selectionEnd = cursorPosition + 1; // move cursor to the right
}

document.addEventListener("click", () => {
    soundTag.play();
});

//change language

function firstStart() {
    if (
        localStorage.getItem("language") === "English" ||
        !localStorage.getItem("language")
    ) {
        createKey(keyArr);
        localStorage.setItem("language", "English");
        const ukFlag = document.querySelector(".flag");
        ukFlag.classList.remove("flag_pol");
    }
    if (localStorage.getItem("language") === "Polish") {
        createKey(keyArrPolish);
        const ukFlag = document.querySelector(".flag");
        ukFlag.classList.add("flag_pol");
    }
}

function hexaColor() {
    const hexCodes = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    return "#" + color;
}

function createAudio() {
    soundTag.setAttribute("id", "click-sound");
    const soundSourceTag = document.createElement("source");
    soundSourceTag.setAttribute("src", "./button-click.mp3");
    soundSourceTag.setAttribute("type", "audio/mp3");
    soundTag.append(soundSourceTag);
    mainSection.append(soundTag);
}

document.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        const char = event.target.textContent;
        console.dir(event.target);
        if (char === "Space") {
            textArea.value += "";
        } else if (char === "Alt") {
            textArea.value += "";
        } else if (char === "CapsLock") {
            textArea.value += "";
        } else if (char === "Backspace") {
            textArea.value = textArea.value.slice(0, -1);
        } else if (char === "Delete") {
            if (cursorPosition === end) {
                textArea.value =
                    textArea.value.slice(0, cursorPosition) +
                    textArea.value.slice(cursorPosition + 1);
                textArea.setSelectionRange(cursorPosition, cursorPosition);
            } else {
                textArea.value =
                    textArea.value.slice(0, cursorPosition) +
                    textArea.value.slice(end);
                textArea.setSelectionRange(cursorPosition, cursorPosition);
            }
        } else if (char === "Enter") {
            event.preventDefault();
            textArea.value += "\n";
        } else if (char === "Tab") {
            textArea.value += "    ";
        } else if (char === "Ctrl") {
            textArea.value += "";
        } else if (char === "Shift") {
            textArea.value += "";
        } else {
            textArea.value += char.toLowerCase().slice(0, 1);
        }
    }
});
