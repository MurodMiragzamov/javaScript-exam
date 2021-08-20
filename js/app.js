// ul's
let elUserList = document.querySelector('.user_list'),
    elPostList = document.querySelector('.post_list'),
    elCommentsList = document.querySelector('.comments_list');


// template's
const elTemplateUser = document.querySelector('.user_template').content,
      elTemplatePost = document.querySelector('.post_template').content,
      elTemplateComments = document.querySelector('.comments_template').content;

// post number var
let postNumber = 1;

//fetch data
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((data)=>renderUsers(data,elUserList));

fetch('https://jsonplaceholder.typicode.com/posts/'+postNumber).then((response)=>response.json()).then((data)=>console.log(data));


//render function's
function renderUsers(el,element){

    for (let i = 0 ; i <el.length;i++){
        
           const tempUser = elTemplateUser.cloneNode(true);

    //user item content
            let elUserItem = tempUser.querySelector('.user_item'),

                elUserUserid = tempUser.querySelector('.user_id'),
                elUserName = tempUser.querySelector('.user_name'),
                elUserUserName = tempUser.querySelector('.user_username'),
                elUserEmail = tempUser.querySelector('.user_email'),
                elUserAddress = tempUser.querySelector('.user_address'),
                elUserGeo = tempUser.querySelector('.user_geo'),
                elUserNumber = tempUser.querySelector('.user_number'),
                elUserWeb = tempUser.querySelector('.user_web'),
                elUserCompany = tempUser.querySelector('.user_company');

    // creat text content
            elUserUserid.textContent = el[i].id;
            elUserName.textContent = el[i].name;
            elUserUserName.textContent = el[i].username;
            elUserEmail.textContent = el[i].email;
            elUserAddress.textContent = el[i].address;
            elUserGeo.textContent = el[i].geo;
            elUserNumber.textContent = el[i].phone;
            elUserWeb.textContent = el[i].website;
            elUserCompany.textContent = el[i].company;
            

    //append
            element.appendChild( elUserItem);
     
        
    }
}

//event

elUserid.addEventListener('click',evt=>{
    evt.target.matches('.user_id')
  
})












    // async function fetchUsers(){
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.json();
  
       
           
            
          

    //     }

    //     renderUsers(data,elUserList)
    // }
    

    //   fetchUsers()