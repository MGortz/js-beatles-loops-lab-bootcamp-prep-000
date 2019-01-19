var array = [];

function theBeatlesPlay (mus, inst) {
  for (var i = 0; i < 4; i++) {
    array.push(`${mus[i]} plays ${inst[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i != facts.length) {
    var selectElement = facts.splice(facts[i], 1, `${facts[i]}!!!`);
    array.push(selectElement);
    i++;
  }
  return array;
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