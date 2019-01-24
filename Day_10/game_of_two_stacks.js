function twoStacks(x, a, b) {  
var sum = 0, count = 0, i = 0;
  for (; i < a.length && sum <= x; sum += a[i++]);
  count = sum > x ? i - 1 : i;

  for (var  j = 0; i >= 0 && j < b.length;) {

    sum += b[j++];

    while (sum > x && i > 0)
      sum -= a[--i];

    if (sum <= x && (i + j) > count)
      count = i + j;
  }

  return count;
}