console.log('hello')

var city = ['New York City', 'San Francisco', 'Los Angeles', 'Sydney', 'Austin']

var searchBar = document.getElementById("city-type")
var options = document.createElement("option");
// var cityOptions = document.getElementsByTagName("option")


var createListOfCity = function (city) {
    for (var i = 0; i < city.length; i++) {
        var searchBar = document.getElementById("city-type");
        var options = document.createElement("option");
        options.textContent = city[i];
        searchBar.appendChild(options);
    }
}

createListOfCity(city);


var setImgBackg = function() {
    if (searchBar.value == 'New York City') {
    // console.log('nyc')
    // document.body.className = options.value;
        document.body.style.backgroundImage = "url(images/nyc.jpg)"
    } else if (searchBar.value == 'San Francisco') {
    // console.log('sf')
        document.body.style.backgroundImage = "url(images/sf.jpg)"
    } else if (searchBar.value == 'Los Angeles') {
        document.body.style.backgroundImage = "url(images/la.jpg)"
    } else if (searchBar.value == 'Sydney') {
        document.body.style.backgroundImage = "url(images/sydney.jpg)"
    } else if (searchBar.value == 'Austin') {
        document.body.style.backgroundImage = "url(images/austin.jpg)"
}
}

searchBar.addEventListener('change', setImgBackg);
