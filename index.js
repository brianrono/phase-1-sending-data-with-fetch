function submitData(userName,userEmail) {
  const FormData = {
      name: userName,
      email: userEmail
  }
  const configurationObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(FormData)
  }
 let p = document.createElement("p")
 return fetch("http://localhost:3000/users",configurationObj)
  .then(res => res.json())
  .then(data => {
      let p = document.createElement("p")
      p.textContent = data.id
      document.querySelector("body").appendChild(p)
 })
 .catch(err => {
  let p = document.createElement("p")
  p.textContent = err.message;
  document.querySelector("body").appendChild(p)
 })
}



// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });


// This code brings about the same results as the above


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);


// Same case as above


// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);