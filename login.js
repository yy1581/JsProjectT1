const id = document.querySelector("#id");
const loginForm = document.querySelector("#loginForm");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const loginInfo = document.querySelector("#loginInfo");
const userInfo = document.querySelector("#userInfo");

function login(e){
  e.preventDefault();
  if(id.value === ""){
    alert("id를 입력해주세요.");
    return;
  }
  localStorage.setItem("id", id.value);
  loginForm.classList.add("hidden");
  loginInfo.classList.remove("hidden");
  userInfo.innerHTML = `${localStorage.getItem("id")}님 환영합니다.`;
}

function logout(){
  localStorage.removeItem("id");
  loginForm.classList.remove("hidden");
  loginInfo.classList.add("hidden");
}

function chkId(){
  if(localStorage.getItem("id") !== null){
    loginForm.classList.add("hidden");
    loginInfo.classList.remove("hidden");
    userInfo.innerHTML = `${localStorage.getItem("id")}님 환영합니다.`;
  }
}

chkId();
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
