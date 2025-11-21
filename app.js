let add = document.getElementById("add")
let pop = document.querySelector("dialog")
let input = document.querySelector("dialog input")
let cancel = document.querySelector("dialog #cancel")
let save = document.querySelector("dialog #save");
let dotChild = document.querySelector(".dotchild");
let delHabit = document.querySelector("#del");
let editHabit = document.querySelector("#edit");
let body = document.querySelector(".body")
let task = document.getElementById("para")
let arr = [];
let mode = true;


add.addEventListener("click", (e) => {
  pop.showModal();
  // input.value = ""
})

cancel.addEventListener("click", () => {
  pop.close();
  input.value = "";
})

save.addEventListener("click", () => {
  if (input.value !== "") {
    pop.close();
    task.innerText=""

    let div = document.createElement("div");
    body.appendChild(div);

    let tick1 = document.createElement("button");
    div.appendChild(tick1);


    let div2 = document.createElement("div");
    div.appendChild(div2);
    div2.setAttribute("id", "div22");

    let div3 = document.createElement("div");
    div.appendChild(div3)

    let btn1 = document.createElement("button");
    div3.appendChild(btn1);

    let btn2 = document.createElement("button");
    div3.appendChild(btn2);


    div.classList.add("style");
    tick1.classList.add("style3");
    tick1.innerText = "";
    div2.classList.add("style2");
    div3.classList.add("div3")
    div2.innerText = input.value;



    btn2.classList.add("edit");
    btn1.classList.add("delete");

    btn2.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    btn1.innerHTML = '<i class="fa-solid fa-trash"></i>';


    // localStorage.setItem("habit", div2.innerText)

    arr.push(div2.innerText);
    localStorage.setItem("habit", JSON.stringify(arr))



    tick1.onclick = (e) => {
      if (e.target.innerText === "") {
        tick1.innerText = "✔"
        tick1.style.backgroundColor = "#c1121f",
          tick1.style.color = "white",
          div2.style.backgroundColor = "grey",
          div2.style.borderRight = "8px solid grey",
          div2.style.textDecoration = "white solid line-through"
        btn2.disabled = true;
      }
      else {
        tick1.innerText = "";
        tick1.style.backgroundColor = "#fdf0d5",
          div2.style.backgroundColor = "#c1121f",
          div2.style.borderRight = "8px solid #c1121f",
          div2.style.textDecoration = "none"
        btn2.disabled = false;
      }

    };

    btn1.addEventListener("click", (e) => {
      arr= arr.filter(h=> h !== div2.innerText);
      localStorage.setItem("habit",JSON.stringify(arr))
      div.remove()
    })

    btn2.addEventListener("click", (e) => {
      pop.showModal();
           input.value=div2.innerText

    })
  }
  input.value = ""

});


window.addEventListener("load", () => {
  
  let arr = JSON.parse(localStorage.getItem("habit")) || []
  for (let h of arr) {
    // console.log(h)
    
    let div = document.createElement("div");
    body.appendChild(div);

    let tick1 = document.createElement("button");
    div.appendChild(tick1);


    let div2 = document.createElement("div");
    div.appendChild(div2);
    div2.setAttribute("id", "div22");

    let div3 = document.createElement("div");
    div.appendChild(div3)

    let btn1 = document.createElement("button");
    div3.appendChild(btn1);

    let btn2 = document.createElement("button");
    div3.appendChild(btn2);

    div2.innerText=h


    div.classList.add("style");
    tick1.classList.add("style3");
    tick1.innerText = "";
    div2.classList.add("style2");
    div3.classList.add("div3");


    btn2.classList.add("edit");
    btn1.classList.add("delete");
    btn2.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        btn1.innerHTML = '<i class="fa-solid fa-trash"></i>';




    tick1.onclick = (e) => {
      if (e.target.innerText === "") {
        tick1.innerText = "✔"
        tick1.style.backgroundColor = "#c1121f",
          tick1.style.color = "white",
          div2.style.backgroundColor = "grey",
          div2.style.borderRight = "8px solid grey",
          div2.style.textDecoration = "white solid line-through"
        btn2.disabled = true;
      }
      else {
        tick1.innerText = "";
        tick1.style.backgroundColor = "#fdf0d5",
          div2.style.backgroundColor = "#c1121f",
          div2.style.borderRight = "8px solid #c1121f",
          div2.style.textDecoration = "none"
        btn2.disabled = false;
      }

    };

    btn1.addEventListener("click", (e) => {
       arr= arr.filter(h=> h !== div2.innerText);
      localStorage.setItem("habit",JSON.stringify(arr))
      div.remove();
      
    })

    btn2.addEventListener("click", (e) => {
      pop.showModal();
 

    })
    if(localStorage.getItem("habit",h)){
console.log("gg")
task.innerText=""

}
    
  }
  




}
)

