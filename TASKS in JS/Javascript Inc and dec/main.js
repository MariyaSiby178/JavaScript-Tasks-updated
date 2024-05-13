var ans = 0;

// Function to increment the value
function incre() {
  ans++;
  console.log("incremented: " + ans);
  document.getElementById("number").innerHTML = ans;
}

// Function to decrement the value
function decre() {
  ans--;
  console.log("decremented: " + ans);
  document.getElementById("number").innerHTML = ans;
}