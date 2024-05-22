const search_form=document.getElementById("search-form");
const search_box=document.getElementById("search-box");
const search_result=document.getElementById("search-result");
const show_more=document.getElementById("show-more-btn");

let keyword="";
let page=1;
let cid="nG64hqhIlhCI0rn1ssGLdxDEc17RVCzZJeM6JBx013I";

async function searchimage(){
    keyword=search_box.value;
    const url=`https://api.unsplash.com/search/photos?${page}=1&query=${keyword}&client_id=${cid}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();

    if(page==1){
        search_result.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image);
        search_result.appendChild(imagelink);
    })
    show_more.style.display="block"
}

search_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimage();
})

show_more.addEventListener("click",()=>{
    page++;
    searchimage();
})