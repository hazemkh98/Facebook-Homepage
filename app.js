const stautesIcon=document.querySelector(".nav-user-icon");

window.addEventListener('load',function(){
	setTimeout(function()
	{ 
		stautesIcon.classList.remove("offline");
		stautesIcon.classList.add("online");}, 1000);
})

/****************************************************************************************************/
const date = new Date();
document.getElementById('day').innerHTML=date.getDate();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

document.getElementById('month').innerHTML=monthNames[date.getMonth()];


/****************************************************************************************************/
const closBtn=document.querySelector('.closebtn');
const sidebar=document.querySelector('.sidebar-ads');

closBtn.addEventListener("click", function(){
		sidebar.classList.add("close");
})

/****************************************************************************************************/

const hero = document.querySelectorAll(".modal-overlay");
const close=document.querySelector(".close-btn");
const model=document.getElementById("story2");


model.addEventListener("click",function(){
hero[0].classList.add("open-modal");

setTimeout(function(){hero[0].classList.remove("open-modal")}, 1000);

});

close.addEventListener("click",function(){
	hero[0].classList.remove("open-modal");
})


/****************************************************************************************************/

const preloade=document.querySelector(".preloader");
window.addEventListener('load',function(){
	preloade.classList.add("hide-preloader");
})

/****************************************************************************************************/
const settingMenu=document.querySelector(".settings-menu");

function settingMenuToggle()
{
	settingMenu.classList.toggle("settings-menu-height");
}

/****************************************************************************************************/
var darkBtn=document.getElementById("dark-btn");
darkBtn.onclick=function(){
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");
	
	if(localStorage.getItem("theme")=="light")
	{
		localStorage.setItem("theme","dark");
	}
	else
	{
		localStorage.setItem("theme","light");
	}
}
/****************************************************************************************************/
if(localStorage.getItem("theme")=="light")
{
	darkBtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark")
{
	darkBtn.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");
}
else
{
localStorage.setItem("theme","light");
}

