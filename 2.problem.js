/************************problem:2 **********************/
//print factorial 1-10 number using for
//output: 
// factorial of 1 is 1       
// factorial of 2 is 2       
// factorial of 3 is 6       
// factorial of 4 is 24      
// factorial of 5 is 120     
// factorial of 6 is 720     
// factorial of 7 is 5040    
// factorial of 8 is 40320   
// factorial of 9 is 362880  
// factorial of 10 is 3628800

for(var j=1;j<=10;j++){
     var factorial =1;
    for(var i=j;i>0;i--){
        factorial*=i;
    }
    console.log('factorial of',j,'is',factorial);
}

//print factorial 1-10 number using for
// output:
// factorial of 1 is 1                      
// factorial of 2 is 2                      
// factorial of 3 is 12                     
// factorial of 4 is 288                    
// factorial of 5 is 34560                  
// factorial of 6 is 24883200               
// factorial of 7 is 125411328000           
// factorial of 8 is 5056584744960000       
// factorial of 9 is 1.8349334722510848e+21 
// factorial of 10 is 6.658606584104737e+27 

var factorial =1;
for(var j=1;j<=10;j++){
    for(var i=j;i>0;i--){
        factorial*=i;
    }
    console.log('factorial of',j,'is',factorial);
}
