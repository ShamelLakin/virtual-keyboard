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
