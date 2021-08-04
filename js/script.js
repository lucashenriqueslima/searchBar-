// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
           
            return data.header.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            
            return data = `<a href="${data.href}"><li>${data.header}</li></a>`;
        });
        searchWrapper.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
    }else{
        searchWrapper.classList.remove("active"); 
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
