document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("inputField");
  const keypadButtons = document.querySelectorAll(".angka, .operator");
  const clearButton = document.getElementById("clear");
  const backspaceButton = document.getElementById("backspace");
  const resultButton = document.getElementById("result");

  // Mengatur event listener untuk tombol angka dan operator
  keypadButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;
      inputField.value += value;
    });
  });

  // Mengatur event listener untuk tombol AC (Clear)
  clearButton.addEventListener("click", function () {
    inputField.value = "";
  });

  // Mengatur event listener untuk tombol CE (Backspace)
  backspaceButton.addEventListener("click", function () {
    inputField.value = parseFloat(inputField.value);
    inputField.value = inputField.value.slice(0, -1);
  });

  // Mengatur event listener untuk tombol hasil (=)
  resultButton.addEventListener("click", function () {
    try {
      inputField.value = eval(inputField.value);
    } catch (error) {
      inputField.value = "Error";
    }
  });
});
