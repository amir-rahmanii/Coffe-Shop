let MonthMiladi = ["Jan", "Feb", "Mar", "Apr", " May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let Weekends = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let newdate = new Date()

let inutcity = document.querySelector(".inputcity")
let locationbutton = document.querySelector(".location-button")
let datedayname = document.querySelector(".date-dayname")
let dateday = document.querySelector(".date-day")
let locationelem = document.querySelector(".location")
let weathertemp = document.querySelector(".weather-temp")
let weatherdesc = document.querySelector(".weather-desc")
let hpa = document.querySelector("#hpa")
let humidatydarsad = document.querySelector("#humidaty-darsad")
let WWIND = document.querySelector("#WWIND")

window.addEventListener('keydown', (e) => {
    // console.log(e);
    if (e.keyCode === 13 || e.keyCode === 32) {
      getalldata()
    }
})

locationbutton.addEventListener("click", () => {
    getalldata()
}) 


const getalldata = () => {
    let inputvalue = inutcity.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=b86ca5c5ab3c5cf8894d5f7791b306e6`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            datedayname.innerHTML = Weekends[newdate.getDay()];
            dateday.innerHTML = newdate.getDate() + " " + MonthMiladi[newdate.getMonth()] + " " + newdate.getFullYear();
            locationelem.innerHTML = data.name + ", " + data.sys.country;
            weathertemp.innerHTML = (data.main.temp - 273.15).toFixed(0) + "°C";
            weatherdesc.innerHTML = data.weather[0].main;
            hpa.innerHTML = data.main.pressure + " hpa";
            humidatydarsad.innerHTML = data.main.humidity + " %"
            WWIND.innerHTML = data.wind.speed + " km/h"
            inutcity.value = ""

        })
        .catch((err) => alert(err))
}