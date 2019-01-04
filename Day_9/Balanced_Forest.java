import java.io.*;
import java.util.*;

public class Solution {

    static int N;
    static long[] costs = new long[50000];
    static Map<Integer, Set<Integer>> treeMapping = new HashMap<>();
    static Node[] nodes = new Node[50000];
    static boolean[] visited = new boolean[50000];

    static void buildTree(int nodeIndex){
        if(!visited[nodeIndex]){
            visited[nodeIndex] = true;
            for(int node : treeMapping.get(nodeIndex)) {
                if(!visited[node]) {
                    nodes[nodeIndex].childrens.add(nodes[node]);
                    nodes[node].parrent = nodes[nodeIndex];
                    buildTree(node);
                }
            }
        }
    }

    static void augmentTree(Node node){
        if(node==null) return;
        for(Node childNode : node.childrens) {
            augmentTree(childNode);
            node.sum += childNode.sum;
        }
    }

    static boolean contains(Node head, Node cutNode, long sum){
        Node temp = cutNode;
        while(temp.parrent != null){
            temp.parrent.sum -= cutNode.sum;
            temp = temp.parrent;
        }
        Node parrent = cutNode.parrent;
        cutNode.parrent.childrens.remove(cutNode);
        boolean contains = contains(head, sum, head.sum);
        parrent.childrens.add(cutNode);
        temp = cutNode;
        while(temp.parrent != null){
            temp.parrent.sum += cutNode.sum;
            temp = temp.parrent;
        }
        return contains;
    }

    static boolean contains(Node node, long sum, long totalSum){
        if(node==null || node.childrens.isEmpty()) return false;
        for(Node childNode : node.childrens){
            if(childNode.sum==sum || ((totalSum-childNode.sum)==sum))
                return true;
        }
        for(Node childNode : node.childrens)
            if(contains(childNode, sum, totalSum)) return true;
        return false;
    }

    static long isBalanced(){
        List<Node> list = new ArrayList<>();
        for(int i=1;i<N;i++) list.add(nodes[i]);
        Collections.sort(list);
        for(Node node : list){
            long headSum = nodes[0].sum - node.sum;
            long subTreeSum = node.sum;
            if(headSum == subTreeSum) return headSum;
            else if(subTreeSum>headSum && subTreeSum<=2L*headSum){
                boolean contains = contains(node, headSum, node.sum);
                if(contains) return 3L*headSum-nodes[0].sum;
            }
            else if(headSum>subTreeSum && headSum<=2L*subTreeSum){
                boolean contains = contains(nodes[0], node, subTreeSum);
                if(contains) return 3L*node.sum-nodes[0].sum;
            }
        }
        return -1L;
    }


    public static void main(String[] args) throws IOException{
        //BufferedReader br = new BufferedReader(
        //        new FileReader("/home/noopurg/Desktop/input.txt"));
        BufferedReader br = new BufferedReader(
                new InputStreamReader(System.in));
        short Q = Short.parseShort(br.readLine());
        StringTokenizer st;
        for(int i=0;i<50000;i++) nodes[i] = new Node();
        nodes[0].parrent = null;
        for(short i=0;i<Q;i++){
            N = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            treeMapping.clear();
            for(int j=0;j<N;j++) {
                costs[j] = Long.parseLong(st.nextToken());
                treeMapping.put(j, new HashSet<>());
                nodes[j].value = nodes[j].sum = costs[j];
                nodes[j].childrens.clear();
                nodes[j].parrent = null;
                visited[j] = false;
            }
            for(int j=0;j<(N-1);j++){
                st = new StringTokenizer(br.readLine());
                int node1 = Integer.parseInt(st.nextToken());
                int node2 = Integer.parseInt(st.nextToken());
                node1--;
                node2--;
                treeMapping.get(node1).add(node2);
                treeMapping.get(node2).add(node1);
            }
            buildTree(0);
            augmentTree(nodes[0]);
            System.out.println(isBalanced());
        }
    }

    static class Node implements Comparable<Node>{
        long value, sum;
        List<Node> childrens;
        Node parrent;

        public Node(long value, Node parrent){
            super();
            this.value = this.sum = value;
            childrens = new ArrayList<>();
            this.parrent = parrent;
        }

        public Node(){
            super();
            this.value = this.sum = 0L;
            childrens = new ArrayList<>();
            parrent = null;
        }

        public int compareTo(Node node){
            long diff1 = this.required()-node.required();
            return (diff1<0L) ? -1 : (diff1>0L) ? 1 : 0;
        }

        private long required(){
            long headSum = nodes[0].sum-this.sum;
            long subtreeSum = this.sum;
            if(headSum>subtreeSum){
                if(headSum>2L*subtreeSum) return Long.MAX_VALUE;
                else return 2*subtreeSum-headSum;
            }
            else if(subtreeSum>headSum){
                if(subtreeSum>2L*headSum) return Long.MAX_VALUE;
                else return 2*headSum-subtreeSum;
            }
            else return headSum;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Node node = (Node) o;

            if (value != node.value) return false;
            if (sum != node.sum) return false;
            if (childrens != null ? !childrens.equals(node.childrens) : node.childrens != null) return false;
            return parrent != null ? parrent.equals(node.parrent) : node.parrent == null;
        }

        @Override
        public int hashCode() {
            int result = (int) (value ^ (value >>> 32));
            result = 31 * result + (int) (sum ^ (sum >>> 32));
            result = 31 * result + (childrens != null ? childrens.hashCode() : 0);
            result = 31 * result + (parrent != null ? parrent.hashCode() : 0);
            return result;
        }
    }
}
