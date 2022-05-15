function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classTotalPoints = 0;
  for (i = 0; i < classPoints.length; i++) {
    classTotalPoints += classPoints[i];
  }
  
  let classAverage = classTotalPoints / (classPoints.length + 1);
  
  if (yourPoints > classAverage) {
    return true;
  } else {
    return false;
  }
};