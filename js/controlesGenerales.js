document.getElementById("btn-Nav").addEventListener("click",function(){
   showMenu();
});

 
let floatingBtn = document.getElementById("floatingButton");
floatingBtn.addEventListener("click", function(){
   showFrmCRUD();
   this.style.visibility = "hidden";
});

document.getElementById("close").addEventListener("click", function(){
    this.parentNode.parentNode.style.display = "none";
    floatingBtn.style.visibility = "visible";
});

function showMenu(){ 
   // alert("Junior");
    let menu =  document.getElementById("nav");
    if(menu.style.display == "block"){
       menu.style.display =  "none";
    }else{
        menu.style.display =  "block";
    }
}

//FRM
function showFrmCRUD(){
   let frm = document.getElementsByClassName("frmCRUD");
   for(var i = 0; i < frm.length; i++){
      frm[i].style.display = "block";
   }
}

function closeFrmCRUD(){
   let frm = document.getElementsByClassName("frmCRUD");
   for(var i = 0; i < frm.length; i++){
      frm[i].style.display = "none";
   }
}