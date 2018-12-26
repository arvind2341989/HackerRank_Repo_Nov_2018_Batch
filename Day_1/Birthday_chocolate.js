let answer = 0;

// iterate bars

for (let k = 0; k < s.length; k += 1) {
  let sum = 0;

  // iterate bars month times

  for (let j = i; j < m + i; j += 1) {

    // count sum of weights month times

    sum += s[j];
  }

  // if counted sum is equal to amount of days
  // then it's +1 to possible ways!

  if (sum === d) {
    answer += 1;
  }
}

return answer;