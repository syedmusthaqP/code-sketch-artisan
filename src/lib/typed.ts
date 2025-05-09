
class Typed {
  element: HTMLElement;
  options: {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    backDelay: number;
    startDelay: number;
    loop: boolean;
  };
  strPos = 0;
  currentStr = '';
  curStrPos = 0;
  isBackspacing = false;
  isTyping = false;
  stringsLength = 0;
  currentStrIndex = 0;
  timeout: number | null = null;

  constructor(element: HTMLElement, options: {
    strings: string[];
    typeSpeed: number;
    backSpeed: number;
    backDelay: number;
    startDelay: number;
    loop: boolean;
  }) {
    this.element = element;
    this.options = options;
    this.stringsLength = options.strings.length;
    
    setTimeout(() => {
      this.typewrite(options.strings[0], 0);
    }, options.startDelay);
  }

  typewrite(str: string, pos: number) {
    this.currentStr = str;
    this.curStrPos = pos;
    this.isTyping = true;
    this.isBackspacing = false;
    
    this.element.textContent = this.currentStr.substring(0, this.curStrPos);

    if (this.curStrPos < this.currentStr.length) {
      this.timeout = window.setTimeout(() => {
        this.typewrite(this.currentStr, this.curStrPos + 1);
      }, this.options.typeSpeed);
    } else {
      this.isTyping = false;
      setTimeout(() => {
        this.backspace();
      }, this.options.backDelay);
    }
  }

  backspace() {
    this.isBackspacing = true;
    this.isTyping = false;
    
    this.element.textContent = this.currentStr.substring(0, this.curStrPos);
    
    if (this.curStrPos > 0) {
      this.timeout = window.setTimeout(() => {
        this.curStrPos--;
        this.backspace();
      }, this.options.backSpeed);
    } else {
      this.isBackspacing = false;
      this.currentStrIndex++;
      
      if (this.currentStrIndex === this.stringsLength) {
        if (this.options.loop) {
          this.currentStrIndex = 0;
        } else {
          return;
        }
      }
      
      setTimeout(() => {
        this.typewrite(this.options.strings[this.currentStrIndex], 0);
      }, 500);
    }
  }

  destroy() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
    this.element.textContent = '';
  }
}

export default Typed;
