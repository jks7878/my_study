function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

var nums = new BST();
var nodes = [];
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function random() {
  let cnt = 0;
  let max = 100;
  let arr = [];

  while(cnt < max) {
    let num = Math.floor(Math.random() * max) + 1;

    if(!arr.includes(num)) {
      arr.push(num);
      insert(num);
      cnt++;
    }
  }
  console.log(`diff : ${getDiff(nums.root)}`);
}

let depth = 0;
function insert(num) {
  var data = num || parseInt(document.getElementsByClassName('inputNum')[0].value);
  console.log(data);
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

  balance(nums.root);
  // getDiff(nums.root);
}

// 깊이 탐색
// function dfs(node) {
//   if(!node) return;
//   // console.log(node);
//   depth++;
//   dfs(node.left);
//   if(node.left && node.right) depth--;
//   dfs(node.right);
// }

// 높이 차이 계산
// function getDiff(node) {
//   dfs(node.left); 
//   let leftDepth = depth;
//   console.log("left : " + leftDepth);
//   depth = 0;

//   dfs(node.right)
//   let rightDepth = depth;
//   console.log("right : " + rightDepth);
//   depth = 0;

//   let diff = leftDepth - rightDepth;
//   console.log("DepthDiff : " + diff);

//   return diff;
// }

// 균형 체크
function balance(node) {
  let diff = getDiff(node);

  if(diff > 1) { // 왼쪽 불균형
    diff = getDiff(node.left);
    if(diff > 0) {
      LLrotation(node);
    }else {
      LRrotation(node);
    }
  }else if(diff < -1) { // 오른쪽 불균형
    diff = getDiff(node.right);
    if(diff < 0) {
      RRrotation(node);
    }else {
      RLrotation(node);
    }
  }
}

// 로테이션
function LLrotation(node) {
  console.log("LL Rotation"); 
  let p = node.left;
  node.left = p.right;
  p.right = node;
  nums.root = p;
}
function RRrotation(node) {
  console.log("RR Rotation"); 
  let p = node.right;
  node.right = p.left;
  p.left = node;
  nums.root = p;
}
function LRrotation(node) {
  console.log("LR Rotation"); 
  let left = node.left;
  let p = left.right;
  p.left = left;
  left.right = p.right;
  node.left = null;
  p.right = node;

  nums.root = p;
  // left.left = RRrotation(left);
  // LLrotation(node);

}
function RLrotation(node) {
  console.log("RL Rotation"); 
  let right = node.right;
  let p = right.left;
  p.right = right;
  right.left = p.left;
  node.right = null;
  p.left = node;

  nums.root = p;
  // right.right = LLrotation(right);
  // RRrotation(node);
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
function dfs(node) {
  if(!node) return -1;
  else return Math.max(dfs(node.left), dfs(node.right)) + 1;
  // else {
  //   let tmp1 = dfs(node.left) + 1;
  //   let tmp2 = dfs(node.right) + 1;
  //   console.log(`tmp1 : ${tmp1}, tmp2 : ${tmp2}`);
  //   return Math.max(tmp1, tmp2);
  // }
}

function getDiff(node) {
  if(!node) return -1;
  else return (dfs(node.left) - dfs(node.right));
  // else {
  //   let tmp1 = dfs(node.left);
  //   let tmp2 = dfs(node.right);
  //   console.log(`tmp1 : ${tmp1}, tmp2 : ${tmp2}`);
  //   return (tmp1 - tmp2);
  // }
}

// 잔디 안심어져서 추가함 내 잔디 내놔