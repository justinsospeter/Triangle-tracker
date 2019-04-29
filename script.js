function myfunction() {
  var A = parseInt(document.getElementById("A").value);
  var B = parseInt(document.getElementById("B").value);
  var C = parseInt(document.getElementById("C").value);

  if (A === B && B === C && C === A) {
    alert("this is an equilateral triangle");
  } else if (A == B || B == C || C == A) {
    alert("this is an isosceles triangle");
  } else if (A + B < C || C + A < B || C + B < A) {
    alert("its not a triangle");
  } else if (A + B > C || C + A > B || C + B > A) {
    alert("scalene triangle");
  }
}
