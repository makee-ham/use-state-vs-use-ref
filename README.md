# useState vs useRef || controlled vs uncontrolled component

성구 코치님께 250612날 받은 간단한 controlled/uncontrolled component 구분 연습 과제

# 요구사항

아래 요구사항을 useState와 useRef를 적재적소에 사용하여 구현하시오.

1. [추가] 버튼과 [생성] 버튼이 있음
2. [추가]의 기능: 유저 이름과 유저 아이디 입력 가능한 form 창의 개수 추가
3. [생성]의 기능: 추가된 form 전체의 정보를 화면 상단에 보이도록 함 (+ 입력창들 닫기)
4. 화면 상단에 지금까지 입력(생성)된 "유저 이름"과 "유저 아이디"가 보임
5. 조건:
   - form 유효성검사 1: 빈 문자열 제출은 안 됨
   - form 유효성검사 2: 입력하고 있는 이름과 아이디는, 앞서 입력된 유저 데이터 + 현재 동시 입력 중인 다른 form 창의 이름/아이디와 겹치면 안 됨 (유니크)
