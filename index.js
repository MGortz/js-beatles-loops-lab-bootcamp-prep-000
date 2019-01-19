var array = [];

function theBeatlesPlay (mus, inst) {
  for (var i = 0; i < 4; i++) {
    array.push(`${mus[i]} plays ${inst[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var arrayUpdate = [];
  while(i != facts.length) {
    var updateElement = `${facts[i]}!!!`;
    arrayUpdate.push(updateElement);
    i++;
  }
  return arrayUpdate;
}

function iLoveTheBeatles(num) {
  var array2 = [];
  do {
    var pushTimes = 15 - num;
    array2.push("I love the Beatles!") * pushTimes;
    num++;
  } while (num < 15);
  return array2;
}