let namebook = document.querySelector('.namebook');
let addbook=document.querySelector('.addbook');
let listbook=document.querySelector('#list');
let row = document.createElement('tr');
let jj =document.getElementsByClassName('alert');
let dd =document.getElementsByClassName('message');

let deleteBook = document.getElementsByClassName('delete');

// let book = listbook.innerHTML +=`<div class="alert alert-info"><tr>
//         <td>${$('input').val()} </td>
//         <td><span class="btn btn-danger float-right delete">Delete</span></td>
//         </tr></div>`;

addbook.addEventListener('click',  function(){


    let d = document.createElement('span');

            let dt = document.createTextNode('Delete');
            d.appendChild(dt);
            d.classList = ['btn btn-danger deleted float-right'];
    
         let g =document.createElement('div');
         let t = document.createTextNode(namebook.value);
         g.appendChild(t);
         g.classList = ['alert alert-info text'];
         g.appendChild(d);
         listbook.appendChild(g);

         
            // $(dd).remove();
            dd[0].innerHTML = "Your task has been added";
            namebook.value = "";
            namebook.focus();
      


        
        
        d.addEventListener('click',  function(){

            if(d.classList.contains('deleted')  ){
                console.log('dd');
                g.remove();
            }else{
                console.log('dds');
            }
        
        })
    
      
}); 


   







