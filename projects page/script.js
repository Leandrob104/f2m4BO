let allWebsites=document.getElementsByClassName("website");
let filters = document.getElementsByClassName("filter");


for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

let periode2Filter = document.getElementById ("checkbox-periode_2")
periode2Filter.onchange = function(){
    if(periode2Filter.checked === true){
        for(let i =0; 1 < allWebsites.length; i++){
            if(allWebsites[i].dataset.category === "periode_2"){
                allWebsites[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allWebsites.length; i++){
            if(allWebsites [i].dataset.category === "periode_2"){
                allWebsites [i].style.display = "none";
            }
        }
    }
}


let periode3Filter = document.getElementById ("checkbox-periode_3")
periode3Filter.onchange = function(){
    if(periode3Filter.checked === true){
        for(let i =0; 1 < allWebsites.length; i++){
            if(allWebsites[i].dataset.category === "periode_3"){
                allWebsites[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allWebsites.length; i++){
            if(allWebsites [i].dataset.category === "periode_3"){
                allWebsites [i].style.display = "none";
            }
        }
    }
}


let periode4Filter = document.getElementById ("checkbox-periode_4")
periode4Filter.onchange = function(){
    if(periode4Filter.checked === true){
        for(let i =0; 1 < allWebsites.length; i++){
            if(allWebsites[i].dataset.category === "periode_4"){
                allWebsites[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allWebsites.length; i++){
            if(allWebsites [i].dataset.category === "periode_4"){
                allWebsites [i].style.display = "none";
            }
        }
    }
}
