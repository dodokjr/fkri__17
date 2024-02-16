function OnclickOpenMenu()
{
    document.getElementById("header-nav").style.display = "block";
    document.getElementById("close-menu").style.display = "block";
    document.getElementById("open-menu").style.display = "none";
}

function OnclickCloseMenu()
{
    document.getElementById("header-nav").style.display = "none";
    document.getElementById("close-menu").style.display = "none";
    document.getElementById("open-menu").style.display = "block";
}

// // window.onscroll = function ()
// // {
// //   scrollFunction();
// // };
// // function scrollFunction()
// // {
// //   window.scrollTo({ bottom: 0, behavior: "smooth" });
// }

(function ()
{
    if (localStorage.getItem("dark-mode") === "On")
    {
        document.documentElement.classList.add("dark");
    }
})();

function darkmode()
{
    localStorage.setItem("dark-mode", "On");
    document.documentElement.classList.add("dark");
}

function lightmode()
{
    localStorage.setItem("dark-mode", "Off");
    document.documentElement.classList.remove("dark");
}


// api call

async function IntegrasiApi()
{
    const reslout = document.getElementById("reslout")
    const type = document.getElementById("type")
    const srcee = document.getElementById("scree")

    // Api Call
    let base = "https://www.boredapi.com/api/activity";
    const req = await fetch(base)
    const items = await req.json()

    // Api Res
    reslout.textContent = items.activity
    type.textContent = `# ${items.type}`
    type.style.display = "block"
}