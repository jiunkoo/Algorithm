쇠막대기

function solution(arrangement) {
    let answer = 0;
    
    // 정렬의 각 값을 배열에 집어넣음
    const arrangementArr = arrangement.split("");
    const stack = [];
    
    stack.push(arrangementArr[0]); // 첫 번째 값 집어넣음
    
    // 배치 문자열을 하나씩 뽑아냄
    for(let i=1; i<arrangementArr.length; i++){
        // 여는 괄호인 경우
        if(arrangementArr[i] === "("){
            // 막대기 혹은 레이저
            // 일단 스택에 집어넣음
            stack.push(arrangementArr[i]);
        } 
        // 닫는 괄호인 경우
        else {
            // 앞의 글자가 여는 괄호인 경우
            if(arrangementArr[i-1] === "("){
                // 레이저 빔 발사 후 스택에서 출력
                stack.pop();
                // 스택 사이즈만큼 길이 증가
                answer += stack.length;
            } 
            // 앞의 글자가 닫는 괄호인 경우
            else{
                // 막대의 끝점이므로 스택에서 출력
                stack.pop();
                // 잘린 막대는 1개이므로 1만큼 길이 증가
                answer += 1;
            }
        }
    }
    return answer;
}