// TODO 1

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// TODO 2

const validateNumberInput = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw new ValidationError(`Argumen '${i}' atau '${args[i]}' Harus Number`);
    }
  }
};

const detectTriangle = (a, b, c) => {
  // TODO 3
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Bukan segitiga khusus";
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.message;
    }
  }
};

console.log(detectTriangle(3, 3, 5));
console.log(detectTriangle(3, 3, "a"));
