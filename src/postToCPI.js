const axios=require('axios');
let data = {
  firstName:'demo',
  lastName:'innoWeek',
  email: 'arne.devroede@demo.innoweek.be',
  phone: '0470222222'
}

axios.get(`https://b66ca1a4trial.it-cpitrial02-rt.cfapps.eu10-001.hana.ondemand.com/http/testADV?firstName=${data.firstName}&lastName=${data.lastName}&phone=${data.phone}&email=${data.email}`, {
      auth:{
        username: 'arne.de.vroede@student.ehb.be',
        password: 'BlauwZwart14'
      }
    }).then(response =>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    });

