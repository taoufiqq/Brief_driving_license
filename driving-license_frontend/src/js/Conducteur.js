// ------------------------------Register----------------------------
function register() {

    const matricule = document.getElementById('matricule').value
    const fullName = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const telephone = document.getElementById('telephone').value
    const adresse = document.getElementById('adresse').value
    const numero_de_Permis = document.getElementById('numero_de_Permis').value

  
      const user = {adresse,password,matricule,fullName,email,telephone,numero_de_Permis};
  // console.log(user);
  
    axios.post('http://localhost:3030/Conducteur/authentication',user)
       .then((res) => {
            if(res.data.message){
                   return false        
         } else {
            window.location.href = "login.html"
         }
       })
       .catch((err) => {
       console.log(err)
       })
  }



  