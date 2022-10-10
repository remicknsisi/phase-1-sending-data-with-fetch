const userInfo = {
    name: "Steve",
    email: "steve@steve.com",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userInfo),
  };
  
  function submitData(){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(object => document.querySelector('body').append(object.id))
    .catch(function(error){
        alert("Error detected!")
        document.querySelector('body').append(error)
    });
  }