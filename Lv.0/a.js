/**
  길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
 */

// 1. 뇌를 빼고 풀어봄
let str1 = 'aaaaa';
let str2 = 'bbbbb';
// let result = "ababababab"
function solution(str1, str2) {
    let answer = String(str1[0] + str2[0] + str1[1] + str2[1] + str1[2] + str2[2] + str1[3] + str2[3] + str1[4] + str2[4]);
    console.log(answer);
}

// solution('aaaaa', 'bbbbb');

// 2. for문 : 문자열로 각각 돌면서 더하기기
function solution(str1, str2) {
    // 문자열을 담아줄 result 선언하고 초기값으로 '' 할당 (타입이 string이니까)
    let result = '';

    // for문으로 인덱스 범위 지정
    // 인덱스는 0부터 시작, 마지막 인덱스는 str1의 길이 - 1
    // i++을 통해서 i에 1을 추가하면서 i의 범위를 벗아면 for문 빠져나옴 (str1과 str2 길이 같다는 조건)
    // 조건이 만족하는 동안 인덱스를 돌면서 연산 수행
    for (i = 0; i < str1.length; i++) {
        // 복합할당연산자 : 변수의 현재값에 다른 값을 더한 후, 그 결과를 다시 변수에 할당
        result += str1[i] + str2[i];
    }

    return result;
}
