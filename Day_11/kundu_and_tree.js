function processData(input) {
  var lines = input.split('\n');
  var numNodes = parseInt(lines[0]);
  var graph = {}, line, a, b, components, ans, i;
  for (i=1; i<=numNodes; i++) {
    graph[i] = [];
  }
  for (i=1; i<lines.length; i++) {
    line = lines[i].split(' ');
    if (line[2] == 'b') {
      a = parseInt(line[0]); b = parseInt(line[1]);
      (graph[a]).push(b);
      (graph[b]).push(a);
    }
  }
  components = dfs(graph);
  ans = calculateSum(components);
  console.log(ans);
} 

function dfs(graph) {
  var componentNum = 0;
  var components = {};
  function search(s) {
    var i;
    if (components[s] == undefined) {
      components[s] = componentNum;
    }
    for (i=0; i<graph[s].length; i++) {
      if (components[graph[s][i]] == undefined) {
        search(graph[s][i]);
      }
    }
  };
  for (var aNode in graph) {
    if (components[aNode] == undefined) {
      search(aNode);
      componentNum += 1;
    }
  }
  return components;
}

function calculateSum(components) {
  var mod = 1000000007 * 6;
  var connectedComponents = {}
  for (var nod in components) {
    var component = components[nod];
    if (connectedComponents[component] == undefined) {
      connectedComponents[component] = 0;
    }
    connectedComponents[component] += 1;
  }
  var sum = 0, i, node;
  for (node in connectedComponents) {
    sum += connectedComponents[node];
  }
  var ans = Math.pow(sum, 3) % mod;
  for (node in connectedComponents) {
    ans = (ans - Math.pow(connectedComponents[node], 3)) % mod;
    if (ans < 0) ans += mod;
    ans = (ans - 3 * Math.pow(connectedComponents[node], 2)
        * (sum - connectedComponents[node])) % mod;
    if (ans < 0) ans += mod;
  }
  return ans / 6;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
