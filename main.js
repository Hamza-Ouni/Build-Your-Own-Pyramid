//Using the prompt method, it will simply pauses and waits until something comes from user input.
let floors = window.prompt(
  "Hello and welcome to my super pyramid! How many floors do you want?" +
    "\n" +
    "Please enter a number between 0 and 25"
);

// If the user didn't enter a number the page will be refreshed
if (!floors) {
  location.reload();
}
// Use the RegExr to verify entred input, It should be a number
const regex = /[^0-9]/;
// Verifying floors is a number
if (!floors.match(regex)) {
  // floors should be between 0 and 25
  if (0 < floors && floors <= 25) {
    console.log("Number of floors of your super Pyramid: " + floors);
    for (let i = 1; i <= floors; i++) {
      // the variable spaces to determine how many space in each line
      let space = " ".repeat(floors - i);
      // the variable NUmberOfHush to determine how many hash symbole in each line
      let NUmberOfHushs = "#".repeat(2 * i - 1);
      console.log(space + NUmberOfHushs);
    }
  }
  // If the entred input is not between 0 and 25
  else {
    console.log(
      "Invalid number !! Reload page and try again with a number between 0 and 25"
    );
  }
}
// If the type of the entred input is not a number
else {
  console.log(
    "You must enter only numbers!! Reload page and try again with a number between 0 and 25"
  );
}
