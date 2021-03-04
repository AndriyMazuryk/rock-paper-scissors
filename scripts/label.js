class Label {
  constructor(text = "", position = null) {
    this.label = document.createElement("p");
    this.label.classList.add("label");

    if (text) {
      try {
        if (typeof text === "string" && text.length > 0) {
          this.text = text;
        } else {
          throw new Error("Invalid text!");
        }
      } catch (e) {
        console.log("Error:", e);
      }
    }

    if (position) {
      const validPositions = ["left", "right"];
      try {
        if (validPositions.includes(position)) {
          if (position === "left") {
            this.left();
          } else {
            this.right();
          }
        } else {
          throw new Error("Invalid position!");
        }
      } catch (e) {
        console.error("Error:", e);
      }
    }
  }

  set text(text) {
    this.label.innerHTML = text;
  }

  get element() {
    return this.label;
  }

  left() {
    this.label.classList.add("label--left");
  }

  right() {
    this.label.classList.add("label--right");
  }
}

export default Label;
