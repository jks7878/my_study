function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

var nums = new BST();

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

let depth = 0;

function insert() {
  var data = parseInt(document.getElementsByClassName('inputNum')[0].value);

  var n = new Node(data, null, null);

  if(nums.root == null) {
    nums.root = n;
  }else {
    var current = nums.root;
    var parent;

    while(true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      }else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
  console.log(nums.root);

  let leftDepth = 0;
  if(nums.root.left) { 
    dfs(nums.root.left);
    leftDepth = depth;
    console.log(leftDepth);
  }
  depth = 0;
  let rightDepth = 0;
  if(nums.root.right) {
    dfs(nums.root.right);
    rightDepth = depth;
    console.log(rightDepth);
  }
}

function dfs(node) {
  if(!node) return;

  depth++;
  dfs(node.left);
  if(node.right) {
    depth--;
    dfs(node.right);
  }
}
 
function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}
function preOrder(node) {
  if(!(node == null)) {
    console.log(node.show() + " ");
    inOrder(node.left);
    inOrder(node.right);
  }
}