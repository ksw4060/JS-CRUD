// 6강때부터 필기내용
console.log("자바스크립트 파일을 html로 로드하였음!")

function handleSingleClick(e) {
    // console.log("single click 사용")
    // console.log(e.id)
    console.log(e.innerText)
    const singleItem = document.getElementById(e.id)
    singleItem.classList.toggle("mystyle")
}

function handleUpdate(e) {

}



function addItem() {
    console.log("addItem함수를 실행합니다!")
    const todoInput = document.getElementById("todo-input")
    const todoContent = todoInput.value //내가 입력한 입력값을 변수에 저장
    if (todoContent) {
        console.log("content 가 있는 경우")
        // 새로운 투두리스트를 생성 Create
        const myList = document.getElementById("my-list") // ul 리스트 전체를 들고온다.
        const newTodoList = document.createElement('li') // li 태그를 새롭게 생성해준 것.
        newTodoList.innerText = todoContent // li 의 텍스트를 내가 입력한 입력값으로 설정해준다.

        let list_number = myList.getElementsByTagName("li").length + 1 // li 태그의 갯수 구하기

        // 새로운 투두리스트를 생성할 때, onclick 과 id 값을 부여
        newTodoList.setAttribute("onclick", "handleSigleClick(this)")
        newTodoList.setAttribute("id", `${list_number}th-item`)
        // `${list_number}` : 자바스크립트에서 list_number 라는 변수를 스트링 안에 넣어줄 수 있습니다.

        // 수정 UPDATE 기능 만들기, button, onclick, id 를 부여해주기
        const updateButton = document.createElement('button')
        updateButton.innerHTML = "update수정"
        updateButton.setAttribute("onclick", "handleUpdate(this)")
        updateButton.setAttribute("id", `${list_number}th-item-update-button`)
        newTodoList.appendChild(updateButton) // 생성된 리스트에 수정 버튼을 추가


        // ul 리스트 전체에 newTodoList를 리스트에 추가(append)
        myList.append(newTodoList)

        todoInput.value = "" //입력하고 난 후에, 비어있는 문자열로 초기화
    } else {
        console.log("content 가 없는 경우")
        alert("TEXT를 입력해주세요~~")
    }
}
