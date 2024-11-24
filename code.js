const title=document.getElementById('title');
const price=document.getElementById('price');
const taxes=document.getElementById('taxes');
const ads=document.getElementById('ads');
const discount=document.getElementById('discount');
const count=document.getElementById('count');
const category=document.getElementById('category');
const total=document.getElementById('total');
const submit=document.getElementById('submit');
const tb=document.getElementById('tb');
const bts=document.getElementById('bts');
const st=document.getElementById('st');
const sc=document.getElementById('sc');
const search=document.getElementById('search');
let iscr='c';
let g;
window.onscroll=function(){
  if(scrollY>=50){
      bts.style.display="block"
  }else{
      bts.style.display="none"

  }}
  bts.onclick=function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
}
function gittotal(){
if(price.value!=""){
    let tes=(+price.value + +taxes.value + +ads.value) - +discount.value
  total.innerHTML=tes
  total.style.background="#040"
}else{
  total.style.background="#a00d02"
  total.innerHTML=""

}


}
let pro;
if(localStorage.pric != null){
  pro=JSON.parse(localStorage.pric)
}else{
pro=[];
}
submit.onclick=function(){

  // if(iscr==true){
   let newpro={
       title:title.value,
       price:price.value,
       taxes:taxes.value,
       ads:ads.value,
       discount:discount.value,
       total:total.innerHTML,
       count:count.value,
       category:category.value,
   }
  if(iscr=="c"){

  
  if(count.value==""){
  pro.push(newpro);
  }else{
    for(let j=1;j<=(+count.value);j++){
      pro.push(newpro);

    }
  }}else{

    pro[g].title=title.value;
    pro[g].price=price.value;
    pro[g].taxes=taxes.value;
    pro[g].ads=ads.value;
    pro[g].discount=discount.value;
    pro[g].category=category.value;
    pro[g].total=total.innerHTML;
    // localStorage.pric=JSON.stringify(pro);


    datashow()
    iscr="c"
    count.style.display='block';
    submit.innerHTML="Create";

  }
  localStorage.setItem('pric',JSON.stringify(pro))
  datashow()
  clea()
  
// }else{
//    f=true
// }

}
function clea(){
  title.value=''
  price.value=''
  taxes.value=''
  ads.value=''
  discount.value=''
  count.value=''
  category.value=''
  total.innerHTML=''
  total.style.background='#a00d02'
}

function datashow()
{
 let tabl=''
 for(let i=0;i<pro.length;i++){
  tabl+=`
  <tr>
  <td>${i}</td>
  <td>${pro[i].title}</td>
  <td>${pro[i].price}</td>
  <td>${pro[i].taxes}</td>
  <td>${pro[i].ads}</td>
  <td>${pro[i].discount}</td>
  <td>${pro[i].total}</td>
  <td>${pro[i].category}</td>
  <td><button onclick="upd(${i})" id="update">update</button></td>
  <td><button onclick="del(${i})" id="delete">delete</button></td>
  </tr>
  
  `
  
 }
 tb.innerHTML=tabl
let dlbt=document.getElementById('dlbt');

 if (localStorage.pric!='[]' && localStorage.length!=0 ){
  // console.log(localStorage.pric!='[]' && localStorage.length!=0 )
    dlbt.innerHTML=`
  <button onclick="delall()">delete all(${pro.length})</button>
    `
 }else{
  dlbt.innerHTML=""
 }
}
function del(i2)
{
 pro.splice(i2,1)
 localStorage.pric=JSON.stringify(pro)
 datashow()
}
function delall(){
  localStorage.clear()
  pro=[]
  tb.innerHTML=''
datashow()
}
function upd(i1){
  title.value=pro[i1].title
  price.value=pro[i1].price
  taxes.value=pro[i1].taxes
  ads.value=pro[i1].ads
  discount.value=pro[i1].discount
  count.style.display='none'
  category.value=pro[i1].category
  g=i1;
 gittotal()
 iscr='u'
submit.innerHTML="update"
scroll({
  top:0,
  behavior:"smooth"
})

   
  }


search.onkeyup=function(){
  let adad=0;
  tb.innerHTML=''
  let tabl=''
  console.log("im s")
  for(let q=0;q<pro.length;q++){
    d=pro[q].title;
    d1=pro[q].total;
    d2=pro[q].category;
    z=d.includes(search.value);
    z1=d1.includes(search.value);
    z2=d2.includes(search.value);
    // console.log(typeof d)
    console.log(z)
    if(z==true){
      console.log(pro[z])

      tabl+=`
  <tr>
  <td>${adad}</td>
  <td>${pro[q].title}</td>
  <td>${pro[q].price}</td>
  <td>${pro[q].taxes}</td>
  <td>${pro[q].ads}</td>
  <td>${pro[q].discount}</td>
  <td>${pro[q].total}</td>
  <td>${pro[q].category}</td>
  <td><button onclick="upd(${z})" id="update">update</button></td>
  <td><button onclick="del(${z})" id="delete">delete</button></td>
  </tr>
  
  `
  
  tb.innerHTML=tabl
  adad++
    }else if(z1==true){
      tabl+=`
      <tr>
      <td>${adad}</td>
      <td>${pro[q].title}</td>
      <td>${pro[q].price}</td>
      <td>${pro[q].taxes}</td>
      <td>${pro[q].ads}</td>
      <td>${pro[q].discount}</td>
      <td>${pro[q].total}</td>
      <td>${pro[q].category}</td>
      <td><button onclick="upd(${z})" id="update">update</button></td>
      <td><button onclick="del(${z})" id="delete">delete</button></td>
      </tr>
      
      `
      
      tb.innerHTML=tabl

    }else if(z2==true){
      tabl+=`
      <tr>
      <td>${adad}</td>
      <td>${pro[q].title}</td>
      <td>${pro[q].price}</td>
      <td>${pro[q].taxes}</td>
      <td>${pro[q].ads}</td>
      <td>${pro[q].discount}</td>
      <td>${pro[q].total}</td>
      <td>${pro[q].category}</td>
      <td><button onclick="upd(${z})" id="update">update</button></td>
      <td><button onclick="del(${z})" id="delete">delete</button></td>
      </tr>
      
      `
      
      tb.innerHTML=tabl

    }
  }
}

datashow()