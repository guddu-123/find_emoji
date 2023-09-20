const searchField = document.getElementById("searchBar");
const SubmitButton = document.getElementById("SubmitButton");
console.log(searchField,SubmitButton);

const searchEmoji = () => {
    console.log("function called");
    const  searchFieldValue = searchField.value;
    console.log(emojilist);
    const filteredList = emojilist.filter((e)=>{
        if(e.aliases.some(ele=>ele.startsWith(searchFieldValue ))){
            return true;
        }
        if(e.tags.some(ele=>ele.startsWith(searchFieldValue)))
        return true;
        // if(e.category.some(ele=>ele.startsWith(searchFieldValue ))){
        //     return true;
        // }
        // if(e.description.some(ele=>ele.startsWith(searchFieldValue)))
        // return true;
    });
    const searchResultContainer = document.getElementById("searchResultContainer");
    searchResultContainer.innerText ="";
    filteredList.map((ele)=>{
        console.log(ele);
        const emoji = document.createElement("h1")
        const description = document.createElement("h3")
        const category = document.createElement("p")
        emoji.innerText = ele.emoji;
        description.innerText = ele.description;
        category.innerText = ele.category;
        searchResultContainer.appendChild(emoji);
        searchResultContainer.appendChild(description);
        searchResultContainer.appendChild(category);
    });
};
SubmitButton.addEventListener("click",searchEmoji); 