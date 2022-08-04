
let proData=JSON.parse(localStorage.getItem("products"))||[];
displayData(proData);

function displayData(data){
    
    data.forEach((el, index) =>{ 
        let box=document.createElement("div")
        box.setAttribute("id","card")

        let Image=document.createElement("img")
        let Type=document.createElement("h4")
        let Price=document.createElement("h2")
        let Desc=document.createElement("h4")
        let btn=document.createElement("button")

        Image.src=el.image;
        Type.innerText=el.type;
        Price.innerText=el.price;
        Desc.innerText=el.desc;
        btn.innerText="Remove"
        btn.setAttribute("id","rmbtn")

        btn.addEventListener("click",function(){
            removeFunction(el,index);
        })

        // appendind all data-start
        box.append(Image,Type,Price,Desc,btn)

        document.querySelector("#all_products").append(box)

        // appendind all data-end

        function removeFunction(el,index){
            proData.splice(index,1);
            
            localStorage.setItem("products",JSON.stringify(proData))
            window.location.reload();
        }



    })

}