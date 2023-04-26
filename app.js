const keyboard = document.querySelector(".keyboard");
const textArea = document.querySelector(".text-area");

function createKey(arr) {
    for (let i = 0; i < arr.length; i++) {
        let keyButton = document.createElement("button");
        keyButton.setAttribute("id", `${arr[i].id}`);
        keyButton.innerText = `${arr[i].key}`;
        keyButton.classList.add("key");
        keyboard.appendChild(keyButton);
    }
}
createKey(keyArr);

document.addEventListener("keydown", (event) => {
    textArea.innerText += event.key;
    console.dir(event);
    console.log(document.querySelector(`#${event.code}`));
    document.querySelector(`#${event.code}`).classList.add("active");
});
document.addEventListener("keyup", (event) => {
    document.querySelector(`#${event.code}`).classList.remove("active");
});

const greenRound = document.createElement("div");
greenRound.classList.add("greenRound");

const orangeRound = document.createElement("div");
orangeRound.classList.add("orangeRound");


try {
    const shiftLeft = document.querySelector("#ShiftLeft");
    shiftLeft.style.position = "relative";
    shiftLeft.append(greenRound);
    const capsLock = document.querySelector("#CapsLock");
    capsLock.style.position = "relative";
    capsLock.append(orangeRound);
    // throw 'myException'; // создание исключения
} catch (err) {
    console.log(err);
}
