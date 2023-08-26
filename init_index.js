console.log("자바스크립트 파일을 html로 로드하였음!")
const mainHeader = document.querySelector('h1')
const mainHeaders = document.querySelectorAll('h1')

console.log(mainHeaders)

전역 변수
const myList = document.getElementById('my-list')
const listItem = document.getElementsByClassName('list-item')
console.log(window)
console.log(document)
console.log(document["doctype"])
console.log(myList)
console.log(listItem)

console.log("의심 시작")
listItem.classList.toggle("mystyle2")
console.log("의심 끝")


for (let item in listItem) {
    console.log(item)
} /*자바스크립트에서는 HTMLCollection 이 추가속성으로 있는 리스트에 대해서는,
for (let ''' in ''') {} 구문을 쓰는걸 추천하지 않는다.*/



function handleClick() {
    console.log("handleClick 함수 실행중")
    // 마이스타일 추가
    myList.classList.toggle("mystyle")
    // 마이스타일 2 추가
    Array.from(listItem).forEach((element) => {
        console.log(element)
        element.classList.toggle("mystyle2")
    })
}

function handleSingleClick(e) {
    console.log("single click 사용")
    console.log(e.id)
    console.log(e.innerText)
    const singleItem = document.getElementById(e.id)
    singleItem.classList.toggle("mystyle")
}
