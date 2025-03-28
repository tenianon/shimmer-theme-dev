
import fs from "fs";

interface Inter {
  key?: string;
}

type Type = Inter & {
  number: number;
  fn: () => void;
};

const str: string = "string";
const number = 10_000_000;
const boolean = true;
const arr = [1, 2, 3];
const obj: Type = { key: "value", number, fn() {} };
const reg = /\d+/g;
const allowFn = (a: number, b) => a + b;

// function add

/** @type {import('eslint').Linter.Config[]} */

/**
 * Cancels the document load.
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)
 */

export function add(a: number, b): number {
  return a + b;
}

for (let i = 0; i < 1000000; i++) {
  add(i, i);
}

JSON.stringify({});

Object.apply;

window.addEventListener("click", () => {
  fs.readFileSync("./demo.ts");
});

class ClassA {
  #name: string;
  value: number;
  constructor(name: string, value: number) {
    name = name;
    this.value = value;
  }

  getName() {
    return this.#name;
  }
}

console.log(str, boolean, arr, obj, reg, allowFn, ClassA);
