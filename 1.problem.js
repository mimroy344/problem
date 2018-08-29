//problem:1
//print even number between 0-10
//output 0,2,4,6,8,10
var i=0;
// var remainder=i%2;
while(i<=10){
    if(0==i%2){
    console.log(i);
    } 
    i++;
}
console.log('\n reset \n');
//output 0-10 
//bt excepted output 0,2,4,6,8,10
var i=0;
var remainder=i%2;
while(i<=10){
    if(0==remainder){
    console.log(i);
    } 
    i++;
}
