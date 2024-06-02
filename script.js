document.getElementById("forms").addEventListener("submit",function(e){
    e.preventDefault();
  const username=document.getElementById("info").value
  const API="https://api.github.com/users/";
  const box=document.getElementById("box");
  const submitbtn=document.getElementById("sub");
  const getuser=async()=>{
      try{
      submitbtn.disabled=true;
      const response=await fetch(API +username);
      const data= await response.json();
      console.log(data);
      const content=`<div id="content">
      <div id="image"><img src=${data.avatar_url} alt="profile_pic"></div>
      <div id="container1"> 
      <ul>
                  <li>Followers:${data.followers}</li>
                  <li>Following:${data.following}</li>
                  <li>Repositories:${data.public_repos}</li>
      </ul>
      </div>
  </div>`
  box.innerHTML=content;
  }catch(error){
      console.log(error)
  }finally{
      submitbtn.disabled=false;
      document.getElementById("info").value="";
  }}
  getuser();
  })
  