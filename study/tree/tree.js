function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

var nums = new BST();

function Node(data, left, right, bf) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.bf = bf;
  this.show = show;
}

function show() {
  return this.data;
}

let depth = 0;

function insert() {
  var data = parseInt(document.getElementsByClassName('inputNum')[0].value);

  var n = new Node(data, null, null, null);

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
  console.log(nums);

  // let bf = diff(nums.root);
  // console.log(bf);
  balance(nums.root);
}

// 깊이 탐색
function dfs(node) {
  if(!node) return;
  // console.log(node);
  depth++;
  dfs(node.left);
  if(node.left && node.right) depth--;
  dfs(node.right);
}

// 높이 차이 계산
function getDiff(node) {
  dfs(node.left); 
  let leftDepth = depth;
  depth = 0;

  dfs(node.right)
  let rightDepth = depth;
  depth = 0;

  let diff = leftDepth - rightDepth;
  console.log("DepthDiff : " + diff);

  return diff;
}

// 균형 체크
function balance(node) {
  let diff = getDiff(node);

  if(diff > 1) { // 왼쪽 불균형
    if(getDiff(node.left) > 0) {
      LLrotation();
    }else {
      LRrotation();
    }
   
  }else if(diff < -1) { // 오른쪽 불균형
    if(getDiff(node.right) < 0) {
      RRrotation();
    }else {
      RLrotation();
    }
  }

  console.log(nums.root);
}



// 로테이션
function LLrotation() {
  console.log("LL Rotation"); 
}
function RRrotation() {
  console.log("RR Rotation"); 
}
function LRrotation() {
  console.log("LR Rotation"); 
}
function RLrotation() {
  console.log("RL Rotation"); 
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

// 인터넷 참고 버전
// function dfs(node) {
//   if(!node) return -1;
//   else return Math.max(dfs(node.left), dfs(node.right)) + 1;
// }

// function diff(node) {
//   if(!node) return -1;
//   else dfs(node.left) - dfs(node.right);
// }