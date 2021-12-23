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

async function insert() {
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
  console.log(n);

  let leftDepth = 0;
  if(nums.root.left) { 
    leftDepth = await dfs(nums.root.left, 0);
    console.log(leftDepth);
  }
  let rightDepth = 0;
  if(nums.root.right) {
    rightDepth = await dfs(nums.root.right, 0);
    console.log(rightDepth);
  }
}

async function dfs(node, depth) {
  if(!node) {
    depth++;
    console.log(depth);
    dfs(node.left, depth);
    if(node.right) {
      dfs(node.right, depth);
    }
  }

  return depth;
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