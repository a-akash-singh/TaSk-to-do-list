let inputdata=document.querySelector("#input_id");
let btn=document.getElementById("bu_tton");
var displaytask=document.querySelector(".list_display");

//Enabling create button if input is not null
inputdata.addEventListener('keyup',()=>{
  if(inputdata.value.trim() !== ''){
      btn.classList.add('active');
  }
  else{
      btn.classList.remove('active');
  }
})

//adding list to display
btn.addEventListener('click',()=>{
    if(inputdata.value.trim() !== ''){
        
        let newlist=document.createElement('div');
        newlist.classList.add('add_list');
        newlist.innerHTML =`
        <span>${inputdata.value}</span>
        <div class="item_btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        `
        displaytask.appendChild(newlist);
       
        inputdata.value='';
    }
    else{
        alert("Not a valid task");
    }
})

//deleting the unwanted tasks
displaytask.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})

//check mark completed task
displaytask.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})