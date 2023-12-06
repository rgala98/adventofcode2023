const timeString = "Time:        46828479";
const timeTakenForRaces = timeString
  .split("Time:")[1]
  .trim()
  .split(" ")
  .filter(Number);

const distanceString = "Distance:   347152214061471";
const distancesForRaces = distanceString
  .split("Distance:")[1]
  .trim()
  .split(" ")
  .filter(Number);

let result = 1;

for (i = 0; i < distancesForRaces.length; i++) {
  let wins = 0;
  let ahead = Math.ceil(timeTakenForRaces[i] / 2);
  let behind = Math.floor(timeTakenForRaces[i] / 2);

  let startFound = false;
  let endFound = false;
  while (!startFound && !endFound) {
    if (ahead * (timeTakenForRaces[i] - ahead) > distancesForRaces[i]) {
      wins++;
    } else {
      endFound = true;
    }
    if (ahead !== behind) {
      if (behind * (timeTakenForRaces[i] - behind) > distancesForRaces[i]) {
        wins++;
      } else {
        startFound = true;
      }
    }

    ahead++;
    behind--;
  }
  result = result * wins;

  console.log("WINS", wins);
}

console.log("Result:", result);
