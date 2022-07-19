Restart();

function addElement(){
    let input = document.getElementById("input");
    if(input.value != ""){
        let li = document.createElement("li");
        let ul = document.getElementById("list");
        li.innerText = document.getElementById("input").value;
        ul.appendChild(li);
        input.value = "";
    }
    Restart();
    
}

function Restart(){
    let list = document.querySelectorAll("ul li");

    list.forEach(element => {
        element.addEventListener("click", (event) => {
            event.target.classList.toggle("checked");
        })
    });

    list.forEach(element => {
        let span = document.createElement("span");
        span.innerText = "x";

        span.addEventListener("click", (event) => {
            event.target.parentElement.style.display = "none";
        })

        element.appendChild(span);
    });

}