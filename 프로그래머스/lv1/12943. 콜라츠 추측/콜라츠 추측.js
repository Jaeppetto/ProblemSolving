function solution(num) {
    var counter = 0;
    var result = num
    
    if(num===1) return 0
    
    while(1){
        if(result%2==0)result = result/2
        else if(result%2==1)result = result*3+1
        
        counter+=1
        
        if(result===1) return counter
        else if(counter>500) return -1
    }
}