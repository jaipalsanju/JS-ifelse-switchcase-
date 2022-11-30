function switchcase(opr,x,y){
switch(opr){
    case'add':
    console.log(x+y);
    break;
    case'sub':
    console.log(x-y);
    break;
    case'mul':
    console.log(x*y);
    break;
    case'div':
    console.log(x/y);
    break; 
  default:
    console.log('no such case')
}
}
    switchcase('add',10,8)
    switchcase('mul',80,23)
    switchcase('div',120,50)
    switchcase('sub',40,85)