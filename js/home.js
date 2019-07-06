document.getElementById("container-filters").addEventListener("click", function(){
    showFiltersSearch();
 });

 function showFiltersSearch(){
    let f =  document.getElementById("filters");
    if(f.style.display == "block"){
       f.style.display =  "none";
    }else{
        f.style.display =  "block";
    }
 }