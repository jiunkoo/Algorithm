function solution(nums) {
    var answer = 0;
    let arr = [];
    
    for(let i = 0; i < nums.length; i++){
        if(arr.indexOf(nums[i]) === -1){
            arr.push(nums[i]);
        }
    }
    
    if(arr.length < nums.length / 2){
        answer = arr.length;
    } else{
        answer = nums.length/2;
    }
    
    return answer;
}
