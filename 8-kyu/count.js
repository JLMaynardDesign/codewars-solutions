let count = 0;

const cc = function(card) {
  // Only change code below this line
  let output = "";



  for (let i = 0; i < card.length; i++) {
    if (i === 2 || i === 3 || i === 4 || i === 5 || i === 6) {
      count += 1;
    } else if (i === 7 || i === 8 || i === 9) {
      count += 0;
    } else if (i === 10 || i === "J" || i === "Q" || i === "k" || i === "A") {
      count += -1;
    }

    if (count > 0) {
      output += `${count} Bet`;
    } else if (count <= 0) {
      output += `${count} Hold`;
    }
    return output;
  }

  return "Change Me";
  // Only change code above this line
};

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
