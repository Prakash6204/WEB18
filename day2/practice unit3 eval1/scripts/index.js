//store the products array in localstorage as "products"

document.querySelector("#add_product").addEventListener("click",addProd)

let proData=JSON.parse(localStorage.getItem("products"))||[];
function addProd(){
    event.preventDefault();
    
    let Type=products.type.value;
    let Desc=products.desc.value;
    let Price=products.price.value;
    let Image=products.image.value;

    let ob= new pumaProd(Type,Desc,Price,Image);
    proData.push(ob);

    localStorage.setItem("products",JSON.stringify(proData))
    
    alert("Products added to Inventory");

    window.location.reload()

}
function pumaProd(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}