function solution(n) {
    // 21:33 시작 ~ 21:37 종료
    let answer = '';
    
    while(n > 0){
        let remainder = n % 3;
        n = parseInt(n/3);
        
        // 나머지가 0인 경우
        if(remainder === 0){
            // 나머지 대신 4를 붙여줌
            answer = "4" + answer;
            n--;
        }
        // 그 외의 경우
        else{
            // 일반 3진법과 똑같으므로 나머지 붙임
            answer = remainder + answer;
        }
    }
    
    return answer;
}
