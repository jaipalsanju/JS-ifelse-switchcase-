function add(a,b){
  let add=a+b;
  return add;
}
function div(m,n){
  let div=m/n;
  return div;
}
function multiply(a,b,m,n){
  let mul=add(a,b)*div(m,n);
  return mul;
}
let mulres=multiply(15,5,8,4)
console.log(mulres)