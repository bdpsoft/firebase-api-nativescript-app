// Minimal browser shim for @nativescript/core used by Storybook web preview.
// This provides lightweight stand-ins for a few UI classes used in stories.

class ElementWrapper {
  constructor(tag = 'div') {
    this.el = document.createElement(tag);
  }
  appendChild(child) {
    if (!child) return;
    const node = child.el || child;
    if (node instanceof HTMLElement) this.el.appendChild(node);
  }
  addChild(child) {
    this.appendChild(child);
  }
  on(event, handler) {
    const ev = event === 'tap' ? 'click' : event;
    this.el.addEventListener(ev, handler);
  }
  get style() {
    return this.el.style;
  }
}

class StackLayout extends ElementWrapper {
  constructor() {
    super('div');
    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'column';
    this.el.style.gap = '8px';
  }
}

class Label extends ElementWrapper {
  constructor() {
    super('div');
  }
  set text(value) {
    this.el.textContent = value;
  }
  set className(v) {
    this.el.className = v;
  }
}

class TextField extends ElementWrapper {
  constructor() {
    super('input');
    this.el.type = 'text';
    this.el.style.padding = '8px';
  }
  set hint(v) {
    this.el.placeholder = v;
  }
  set secure(v) {
    if (v) this.el.type = 'password';
  }
  get text() {
    return this.el.value;
  }
  set text(v) {
    this.el.value = v;
  }
}

class Button extends ElementWrapper {
  constructor() {
    super('button');
  }
  set text(v) {
    this.el.textContent = v;
  }
  on(event, handler) {
    const ev = event === 'tap' ? 'click' : event;
    this.el.addEventListener(ev, handler);
  }
}

// Export the minimal APIs stories use
module.exports = {
  StackLayout,
  Label,
  TextField,
  Button,
  // simple alias exports used by some imports
  default: {
    StackLayout,
    Label,
    TextField,
    Button,
  }
};
