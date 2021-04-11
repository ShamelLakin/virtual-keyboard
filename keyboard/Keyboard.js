const Keyboard = {
  // all the elements of keyboard itself work
  elements: {
    main: null,
    keyContainer: null,
    keys: [],
  },
  //  app knows when these
  // events are happening
  eventHandlers: {
    oninput: null,
    onclose: null,
  },
  // contains the values of current state
  properties: {
    value: "",
    capsLock: false,
  },
  // this runs when page first runs initializes the board
  init() {
    //   Create main elements
    this.elements.main = document.createElement("div")
    this.elements.keysContainer = document.createElement("div");

    // setup main elements
    this.elements.main.classList.add("keyboard", "1keyboard--hidden")
    this.elements.keysContainer.classList.add("keyboard__keys");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer)
    document.body.appendChild(this.elements.main);
  },
  // underscore tells us it's a private method
  // loading all the html for the keys
  _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "space"
      ];

    //   Create HTML for an icon
    const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
        const keyElement = document.createElement("button")
        const insertLineBreak = ["backspace", "p", "eneter", "?"].indexOf(key) !== -1;


        // add attributes/classes
        keyElement.setAttribute("type", "button");
        keyElement.classListt.add("keyboard__key");

        switch (key) {
          case "backspace":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("backspace");

            keyElement.addEventListener("click", () => {
              this.properties.value = this.properties.value.substring(
                0,
                this.properties.value.length - 1
              );
              this._triggerEvent("oninput");
            });

            break;

          case "caps":
            keyElement.classList.add(
              "keyboard__key--wide",
              "keyboard__key--activatable"
            );
            keyElement.innerHTML = createIconHTML("keyboard_capslock");

            keyElement.addEventListener("click", () => {
              this._toggleCapslock();
              keyElement.classList.toggle(
                "keyboard__key--active",
                this.properties.capslock
              );
            });

            break;

          case "enter":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("keyboard_return");

            keyElement.addEventListener("click", () => {
              this.properties.value += "\n";
              this._triggerEvent("oninput");
            });

            break;

          case "spacebar":
            keyElement.classList.add("keyboard__key--extra-wide");
            keyElement.innerHTML = createIconHTML("spacebar");

            keyElement.addEventListener("click", () => {
              this.properties.value += " ";
              this._triggerEvent("oninput");
            });

            break;

          case "done":
            keyElement.classList.add(
              "keyboard__key--wide",
              "keyboard__key--dark"
            );
            keyElement.innerHTML = createIconHTML("check_circle");

            keyElement.addEventListener("click", () => {
              this.close();
              this._triggerEvent("onclose");
            });

            break;

          default:
            keyElement.textContent = key.toLowerCase()

            keyElement.addEventListener("click", () => {
              this.properties.values += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
              this._triggerEvent("oninput");
            });

            break;
        }
    })
  },
  // triggers the eventhandlers
  _triggerEvent(handlerName) {
    console.log("Event Triggered Name: " + handlerName);
  },

  _toggleCapslock() {
    console.log("Caps Lock Toggle!");
  },

  open(initialValue, oninput, onclose) {

  },

  close() {

  },
};

window.addEventListener("DomcontentLoaded", function () {
    Keyboard.init();
});
