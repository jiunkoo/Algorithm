function solution(arr){
    let answer = [];
    let a, b;
    
    for(let i = 1; i < arr.length; i++){
        a = arr[i-1];
        b = arr[i];
        
        if(a == b) {
            continue;
        } else {
            answer.push(a);
        }
    }
    answer.push(arr.pop());
    
    return answer;
}