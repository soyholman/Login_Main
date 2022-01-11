

const google_button= document.querySelector('#google')
google_button.addEventListener('click',(e) =>{

   const provider=new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(provider).then(result=>{

    console.log('Google Sing in')
    singupform.reset();
   }).catch(err=>{
       console.log(err);
   })
})

const facebok_button= document.querySelector('#facebook');
facebok_button.addEventListener('click',(e) =>{
    
   const provider= new firebase.auth.FacebookAuthProvider();
   auth.signInWithPopup(provider).then(result=>{

    console.log('Google Sing in')
    singupform.reset();
   }).catch(err=>{
       console.log(err);
   })
})


const singupform= document.querySelector('#sing');

singupform.addEventListener('submit',(e)=>{
e.preventDefault();

const singupemail= document.querySelector('#username-input').value;
const singupassword= document.querySelector('#password').value;   




auth.createUserWithEmailAndPassword(singupemail,singupassword)
.then(UserCredential=>{

alert('Success')
}).catch(err=>{

alert(err.message)
})
})

const logout=document.querySelector('#leave');

logout.addEventListener('click', e=>{

  
    firebase.auth().signOut().then(()=> {
singupform.reset();
alert('Sing out');

    }).catch(e=>{
        console.error('Sign Out Error', e);
       });

     
})



// const postlis=document.querySelector('.Post');

// const setupost = data =>{

//     if(data.length){

//         let html= '';
//         data.forEach(doc=>{
//             const post=doc.data()
//             console.log(post)
// const li = `<li>
// <h5>${post.titulo}</h5>
// <p>${post.descripcion}</p>

// </li> `;
// html+=li;
//         });
//         postlis.innerHTML=html;
//     }else{

//         postlis.innerHTML='<p>Logeate para ver las publicaciones</p>';
//     }
// }

// auth.onAuthStateChanged(user=>{

//     if(user){
//      fs.collection('post').get().then((snapshot)=>{
//        setupost(snapshot.docs)
//      })
//     }
//     else{
//        setupost([])
//     }
// })