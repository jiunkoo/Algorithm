function solution(board, moves) {    
    var answer = 0;
    let basket = [];
    
    for(let i = 0; i< moves.length; i++){
        let line = moves[i]-1;
        for(let j = 0; j<board.length; j++) {
            if(board[j][line] == 0){
                continue;
            } else {
                let lastValue = basket[basket.length-1];
                if(board[j][line] == lastValue) {
                    console.log("값을 출력했습니다.");
                    basket.pop();
                    answer+=2;
                } else{
                    console.log("값을 집어넣었습니다.");
                    basket.push(board[j][line]);
                }
                board[j][line] = 0;
                break;
            }
        }
    }
    
    for(let i = 0; i<board.length; i++) {
        console.log(board[i]);
    }
    console.log(basket);
    return answer;
}