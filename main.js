var nameinput = document.getElementById('nameinput');
var priceinput = document.getElementById("priceinput");
var categoryinput = document.getElementById("categoryinput");
var descinput = document.getElementById("descinput");
var searchInput = document.getElementById('searchInput')
var products = [];


if (localStorage.getItem("products") != null) {
         products = JSON.parse(localStorage.getItem("products"));
         display();
}




function add(){
    if (validate()==true){
   var product={
    name:nameinput.value,
    price:priceinput.value,
    category:categoryinput.value,
    desc:descinput.value
    };
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
    document.getElementById("alert").innerHTML=`<div class="alert alert-success"> added sucesseully</div>`
    clear();
    display();
}
else{
    document.getElementById("alert").innerHTML=`<div class="alert alert-danger"> added failed</div>`
}
}


function clear(){
    nameinput.value="";
    descinput.value='';
    priceinput.value="";
    categoryinput.value="";
}


function validate(){
    var regex = /^[a-z]/;
    if(regex.test(nameinput.value) &&regex.test(descinput.value==true) && regex.test(categoryinput.value)==true){
        return true;
    }
    else{
        return false;
    }
    
}


function display(){
    var cartona=``;
    for(var i=0;i<products.length;i++){
        cartona+=`<tr>
               <td> ${i}</td>
                <td> ${products[i].name}</td>
                <td> ${products[i].price}</td>
                <td> ${products[i].category}</td>
                <td> ${products[i].desc}</td>
                 <td><button class="btn btn-outline-danger btn-sm" onclick="deleteproduct(${i})"> delete</button></td>
            <td><button class="btn btn-outline-warning btn-sm" onclick="update(${i})"> update</button></td>
                
                
                </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona;
}


function searchProduct(){
    var searchValue=searchInput.value;
    var cartona=``;
    for(var i=0;i<products.length;i++){
        if( products[i].name.toLowerCase().includes( searchValue.toLowerCase())==true)
        cartona+=`<tr>
               <td> ${i}</td>
                <td> ${products[i].name}</td>
                <td> ${products[i].price}</td>
                <td> ${products[i].category}</td>
                <td> ${products[i].desc}</td>
                 <td><button class="btn btn-outline-danger btn-sm" onclick="deleteproduct(${i})"> delete</button></td>
            <td><button class="btn btn-outline-warning btn-sm"  onclick="update(${i}"> update</button></td>        
                </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona; 
}


function deleteproduct(index){
    products.splice(index,1);
    localStorage.setItem("products",JSON.stringify( products));
    display();
}

function update(index){
    console.log("kkkkkkkk")
    nameinput.value=products[index].name;
    descinput.value=products[index].desc;
    categoryinput.value=products[index].category;
    priceinput.value=products[index].price;
    document.getElementById("button").innerHTML=`<button class="btn btn-outline-light" onclick="updatetable(${index})" id="button">
    update product
        </button>`
}


function updatetable(index){ 
    products[index].name= nameinput.value; 
    products[index].desc= descinput.value; 
    products[index].category= categoryinput.value; 
    products[index].price= priceinput.value; 
    localStorage.setItem("products",JSON.stringify(products));
    display();
    clear();
}





