function dynamicArray(n, queries) {
  // Create multi-dimensional array
  let sequences = '0'.repeat(n).split('').map(x => []);
  let lastAnswer = 0;
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    const [type, x, y] = [...queries[i]];
    // Identify current sequence by checking the exclusivity of x and lastAnswer (XOR) mod n
    let seqIndex = ((x ^ lastAnswer) % n);
    let sequence = sequences[seqIndex];

    // add current y # in query to end of sequence
    if (type == 1) {
      sequence.push(y);
    // Add # from index pos (y # mod current sequence list's size) to results
    } else if (type == 2) {
      lastAnswer = sequence[y % sequence.length];
      results.push(lastAnswer);
    }
  }

  return results;
}