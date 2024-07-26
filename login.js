const id = document.querySelector("#id");
const loginForm = document.querySelector("#loginForm");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const loginInfo = document.querySelector("#loginInfo");
const userInfo = document.querySelector("#userInfo");

function activeLoginInfo(){
  loginForm.classList.add("hidden");
  loginInfo.classList.remove("hidden");
  userInfo.textContent = `${localStorage.getItem("id")}님 환영합니다.`;
}

function login(e){
  e.preventDefault();
  if(id.value === ""){
    alert("id를 입력해주세요.");
    return;
  }
  localStorage.setItem("id", id.value);
  id.value = "";
  activeLoginInfo();
}

function logout(){
  localStorage.removeItem("id");
  loginForm.classList.remove("hidden");
  loginInfo.classList.add("hidden");
}

function chkId(){
  if(localStorage.getItem("id") !== null){
    activeLoginInfo();
  }
}

chkId();
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
