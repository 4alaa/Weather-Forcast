
// for arrow up
$(document).ready(function () {
  
    let secTop=$("nav").offset().top
    $(window).scroll(function(){
    
    let windowTop=$(window).scrollTop()
    if(windowTop>secTop)
    {
        $(".arrow-up").fadeIn(1000)
    }
    else
    {
        $(".arrow-up").fadeOut(1000)
    }
    
    
    });



  });

const date = new Date();

let day = date.getDay();
console.log(day)
if(day>=7)
{
day=0
}
let firstDayNext=date.getDay()+1;
console.log(firstDayNext)

if(firstDayNext>=7)
{
  firstDayNext=0
}
let secondDayNext=date.getDay()+2;
console.log(secondDayNext)

if(secondDayNext==7)
{
  secondDayNext=0
}
else if(secondDayNext>7)
{
  secondDayNext=1

}

let numInMonth = date.getDate();

let month = date.getMonth();




switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "errDay";
    break;
}
switch (firstDayNext) {
    case 0:
      firstDayNext = "Sunday";
      break;
    case 1:
      firstDayNext = "Monday";
      break;
    case 2:
      firstDayNext = "Tuesday";
      break;
    case 3:
      firstDayNext = "Wednesday";
      break;
    case 4:
      firstDayNext = "Thursday";
      break;
    case 5:
      firstDayNext = "Friday";
      break;
    case 6:
      firstDayNext = "Saturday";
      break;
    default:
      firstDayNext = "errDay";
      break;
  }
  switch (secondDayNext) {
    case 0:
      secondDayNext = "Sunday";
      break;
    case 1:
      secondDayNext = "Monday";
      break;
    case 2:
      secondDayNext = "Tuesday";
      break;
    case 3:
      secondDayNext = "Wednesday";
      break;
    case 4:
      secondDayNext = "Thursday";
      break;
    case 5:
      secondDayNext = "Friday";
      break;
    case 6:
      secondDayNext = "Saturday";
      break;
    default:
      secondDayNext = "errDay";
      break;
  }

switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;    
    default:
      month = "errMonth";
      break;
}


const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", function () {
  getWeather(this.value);

});


var finalData;
async function getWeather(Country) {
  let apiData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f1fb15b923284eb9822161335231502&q=${Country}&days=3`
  );

  finalData = await apiData.json();

  getCityImage(finalData.location.country)
  document.querySelector(".cb span").innerHTML=`( ${finalData.location.country} )`

  displayWeather();

  displayWeatherFor2Days()
}

getWeather("japan");

var cartoona;
function displayWeather() {
    cartoona=''
  cartoona = `
    
    <div class="col-md-6 col-lg-4">

    <div class="dayOne additionCss bg-danger py-3">
        <div class="headerOfDiv px-4 d-flex justify-content-between pt-3">
            <h4 >${day}</h4>
            <h4>${numInMonth} ${month}</h4>
        </div>
        <div class="bodyOfDiv p-4 d-flex justify-content-between align-items-center">
            <div class="bodyLeft">
                <h5>${finalData.location.name.substring(0, 22)}</h5>
                <h3>${finalData.location.country.substring(0, 22)}</h3>    
            </div>
            <div class="bodyRight">
                <img src="${finalData.forecast.forecastday[0].day.condition.icon}" alt="">
            </div>
        </div>

        <div class="d-flex justify-content-between px-4 align-items-center">
        <h4>${finalData.forecast.forecastday[0].day.maxtemp_c}°C</h4>
        <h4 class="text-center py-3">${finalData.forecast.forecastday[0].day.condition.text.substring(0, 22)}</h4>

        </div>

        <div class="footerDiv px-4 d-flex">
            <p class="wind mx-3"><span>${finalData.forecast.forecastday[0].day.maxwind_mph} mbh</span><i class="fa-solid fa-wind ms-1"></i></p>

            <p class="wind me-3"><span>${finalData.forecast.forecastday[0].hour[0].wind_dir}</span><i class="fa-solid fa-compass ms-1"></i></p>

            <p class="wind "><span>${finalData.forecast.forecastday[0].day.daily_chance_of_rain}%</span><i class="fa-solid fa-cloud-rain ms-1"></i></p>


        </div>
    </div>

</div>
    
    `;


  document.querySelector(".rowData").innerHTML = cartoona;

  // make gif depend on weater text
  let weatherText=finalData.forecast.forecastday[0].day.condition.text
  let dayOnes=document.querySelectorAll(".dayOne")





  if(weatherText=="Sunny")
  {
  dayOnes[0].classList.add("Sunny")
  }
  else if(weatherText=="Partly Cloudy ")
  {
    dayOnes[0].classList.add("Partly-cloudy")
  }
  else if(weatherText=="Clear")
  {
    dayOnes[0].classList.add("Clear")
  }
  else if(weatherText=="Cloudy ")
  {
    dayOnes[0].classList.add("Cloudy")
  }
  else if(weatherText=="Overcast ")
  {
    dayOnes[0].classList.add("Overcast")
  }
  else if(weatherText=="Mist")
  {
    dayOnes[0].classList.add("mist")
  }
  else if(weatherText=="Patchy rain nearby")
  {
    dayOnes[0].classList.add("PatchyRainNearby")
  }
  else if(weatherText=="Moderate rain")
  {
    dayOnes[0].classList.add("ModerateRain")
  }
  else if(weatherText=="Freezing fog")
  {
    dayOnes[0].classList.add("FreezingFog")
  }
  else if(weatherText=="Heavy rain")
  {
    dayOnes[0].classList.add("HeavyRain")
  }
  else if(weatherText=="Light snow")
  {
    dayOnes[0].classList.add("LightSnow")
  }
  else if(weatherText=="Heavy snow")
  {
    dayOnes[0].classList.add("HeavySnow")
  }
  else if(weatherText=="Fog")
  {
    dayOnes[0].classList.add("fog")
  }
  else if(weatherText=="Light rain shower")
  {
    dayOnes[0].classList.add("LightRainShower")
  }
  else if(weatherText=="Light freezing rain")
  {
    dayOnes[0].classList.add("PatchyFreezingDrizzleNearby")
  }
  else if(weatherText=="Moderate snow")
  {
    dayOnes[0].classList.add("ModerateOrHeavySnowShower")
  }
   // 1
   else if(weatherText=="Light rain")
   {
     dayOnes[0].classList.add("LightRain")
   }
 // 2
   else if(weatherText=="Patchy snow nearby")
   {
     dayOnes[0].classList.add("PatchySnowNearby")
   }
 // 3
   else if(weatherText=="Patchy sleet nearby")
   {
     dayOnes[0].classList.add("PatchySleetNearby")
   }
 // 4
   else if(weatherText=="Thundery outbreaks in nearby" ||weatherText=="Moderate or heavy snow in area with thunder")
   {
     dayOnes[0].classList.add("ThunderyOutbreaksInNearby")
   }
 // 5
   else if(weatherText=="Blowing snow"||weatherText=="Light drizzle"||weatherText=="Light snow showers")
   {
     dayOnes[0].classList.add("BlowingSnow")
   }
 // 6
   else if(weatherText=="Patchy rain possible")
   {
     dayOnes[0].classList.add("PatchyRrainPossible")
   }
   else if(weatherText=="Patchy moderate snow")
   {
     dayOnes[0].classList.add("Patchymoderatesnow")
   }
   else if(weatherText=="Moderate or heavy snow showers")
   {
     dayOnes[0].classList.add("Moderateorheavysnowshowers")
   }
  else
  {
    dayOnes[0].classList.add("ForAll")
    console.log(weatherText)
  }

}






// for new 2 days
var new2Days=''
function displayWeatherFor2Days()
{
    new2Days=''
    for (let i = 1; i <=2; i++) {

        new2Days += `
      
           
    <div class="col-md-6 col-lg-4">

    <div class="dayOne bg-danger py-3">
        <div class="headerOfDiv px-4 d-flex justify-content-center pt-3">
            <h4 >${i==1?firstDayNext:secondDayNext}</h4>
        </div>
        <div class="bodyOfDiv p-4 d-flex justify-content-center align-items-center">

            <div class="bodyLeft">
                <h3 class='text-white'>${finalData.forecast.forecastday[i].day.maxtemp_c}°C </h3>    
                <h4 >${finalData.forecast.forecastday[i].day.mintemp_c}°C</h4>


            </div>




        </div>

        <h4 class="text-center py-3">${finalData.forecast.forecastday[i].day.condition.text}</h4>
        <div class="footerDiv px-4 d-flex next2">
            <p class="wind mx-3"><span>${finalData.forecast.forecastday[i].day.maxwind_mph} mbh</span><i class="fa-solid fa-wind ms-1"></i></p>

            <p class="wind me-3"><span>${finalData.forecast.forecastday[i].hour[0].wind_dir}</span><i class="fa-solid fa-compass ms-1"></i></p>

            <p class="wind "><span>${finalData.forecast.forecastday[i].day.daily_chance_of_rain}%</span><i class="fa-solid fa-cloud-rain ms-1"></i></p>


        </div>
    </div>

  </div>
    
        
        `;
    }
    document.querySelector(".rowData").innerHTML+=new2Days
    
    // make gif depend on weater text
  // let weatherText=finalData.forecast.forecastday[i].day.condition.text
  let dayOnes=document.querySelectorAll(".dayOne")



for (let i = 1; i <=2; i++) {
  if(finalData.forecast.forecastday[i].day.condition.text=="Sunny")
  {
  dayOnes[i].classList.add("Sunny")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Partly Cloudy ")
  {
    dayOnes[i].classList.add("Partly-cloudy")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Clear")
  {
    dayOnes[i].classList.add("Clear")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Cloudy ")
  {
    dayOnes[i].classList.add("Cloudy")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Overcast ")
  {
    dayOnes[i].classList.add("Overcast")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Mist")
  {
    dayOnes[i].classList.add("mist")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Patchy rain nearby")
  {
    dayOnes[i].classList.add("PatchyRainNearby")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Moderate rain")
  {
    dayOnes[i].classList.add("ModerateRain")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Freezing fog")
  {
    dayOnes[i].classList.add("FreezingFog")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Heavy rain")
  {
    dayOnes[i].classList.add("HeavyRain")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Light snow")
  {
    dayOnes[i].classList.add("LightSnow")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Heavy snow")
  {
    dayOnes[i].classList.add("HeavySnow")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Fog")
  {
    dayOnes[i].classList.add("fog")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Light rain shower")
  {
    dayOnes[i].classList.add("LightRainShower")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Light freezing rain")
  {
    dayOnes[i].classList.add("PatchyFreezingDrizzleNearby")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Moderate snow")
  {
    dayOnes[i].classList.add("ModerateOrHeavySnowShower")
  }
  // 1
  else if(finalData.forecast.forecastday[i].day.condition.text=="Light rain")
  {
    dayOnes[i].classList.add("LightRain")
  }
// 2
  else if(finalData.forecast.forecastday[i].day.condition.text=="Patchy snow nearby")
  {
    dayOnes[i].classList.add("PatchySnowNearby")
  }
// 3
  else if(finalData.forecast.forecastday[i].day.condition.text=="Patchy sleet nearby")
  {
    dayOnes[i].classList.add("PatchySleetNearby")
  }
// 4
  else if(finalData.forecast.forecastday[i].day.condition.text=="Thundery outbreaks in nearby"||finalData.forecast.forecastday[i].day.condition.text=="Moderate or heavy snow in area with thunder")
  {
    dayOnes[i].classList.add("ThunderyOutbreaksInNearby")
  }
// 5
  else if(finalData.forecast.forecastday[i].day.condition.text=="Blowing snow"||finalData.forecast.forecastday[i].day.condition.text=="Light drizzle"||finalData.forecast.forecastday[i].day.condition.text=="Light snow showers")
  {
    dayOnes[i].classList.add("BlowingSnow")
  }
// 6
  else if(finalData.forecast.forecastday[i].day.condition.text=="Patchy rain possible")
  {
    dayOnes[i].classList.add("PatchyRrainPossible")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Patchy moderate snow")
  {
    dayOnes[i].classList.add("Patchymoderatesnow")
  }
  else if(finalData.forecast.forecastday[i].day.condition.text=="Moderate or heavy snow showers")
  {
    dayOnes[i].classList.add("Moderateorheavysnowshowers")
  }
  else
  {
    dayOnes[i].classList.add("ForAll")
    console.log(finalData.forecast.forecastday[i].day.condition.text)
  }  
}

 
}






async function getCityImage(city) {
  const cityImageResponse = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=maVgNo3IKVd7Pw7-_q4fywxtQCACntlNXKBBsFdrBzI&per_page=5&orientation=landscape`
  );
  const cityImage = await cityImageResponse.json();
  const cityImageURL =
    cityImage.results[Math.trunc(Math.random() * 5)].urls.small;
    document.querySelector(".country").style.backgroundImage = `url('${cityImageURL}')`; 
  return cityImageURL;
}