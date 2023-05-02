function solution(n) {
    var arr = Array.from(Array(n),()=>new Array(n).fill(0))
    
    var i=0;
    var j=0;
    var value=2;
    
    arr[0][0] = 1
    
    while(value <= n*n){
        while(j+1<n && arr[i][j+1]==0){
            j+=1
            arr[i][j]=value
            value+=1
        }
        while(i+1<n && arr[i+1][j]==0){
            i+=1
            arr[i][j]=value
            value+=1
        }
        while(j-1<n && arr[i][j-1]==0){
            j-=1
            arr[i][j]=value
            value+=1
        }
        while(j-1<n && arr[i-1][j]==0){
            i-=1
            arr[i][j]=value
            value+=1
        }
    }
    return arr;
}