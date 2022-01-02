function request(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response){
        return response.json()
    })
    .then((response) => {
        console.log(response)
        var result1 = document.getElementById('result1')
        var result2 = document.getElementById('result2')
        var result3 = document.getElementById('result3')
        var result4 = document.getElementById('result4')

        result1.innerHTML = "User Id => " + response.userId
        result2.innerHTML = "ID => " + response.title
        result3.innerHTML = "Title => " + response.completed
        result4.innerHTML = "completed => " + response.id
    })
}