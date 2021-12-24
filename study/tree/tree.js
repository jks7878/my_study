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
  // console.log(nums.root);
  // dfs(nums.root);
  dfs(nums.root.left);
  let leftDepth = depth;
  console.log(leftDepth);

  depth = 0;

  dfs(nums.root.right);
  let rightDepth = depth;
  console.log(rightDepth);

  depth = 0;
}

function dfs(node) {
  if(!node) return;
  console.log(node);
  depth++;
  dfs(node.left);
  if(node.left && node.right) depth--;
  dfs(node.right);
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