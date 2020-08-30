// task 1 --------------------
let city = ["Dnipro", "Kamianske", "Novomoskovsk"];


function weather(sity) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${sity},ua&appid=b983ca3b97b2387c3d05e06b56c1f579`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
            let icon = data.list[0].weather[0].icon;
            document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
            document.querySelector('.temperature').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg;';
            document.querySelector('.wind').style.transform = `rotate(${data.list[0].wind.deg + 90}deg)`;
            document.querySelector('.speed').textContent = `${data.list[0].wind.speed} m/s`;
        })

        .catch(function () { })
}

function select(city) {
    let select = document.querySelector('select');
    let str = '';
    for (let i = 0; i < city.length; i++) {
        str += `<option value="${city[i]}">${city[i]}</option>`;
    }
    select.innerHTML = str;
    select.onchange = () => {
        weather(select.value);
    }
}

select(city);
weather(city[0]);
