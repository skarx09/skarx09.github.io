	var btn;
	var lat1;
	var log1;
	var polygon;
	var p1;
	var p2;
	var v1;
	var v2;
	var result;
	var result2;
	var mapa = L.map('idmap').setView([51.505, -0.09], 8);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 18,
		    id: 'mapbox.streets',
		    accessToken: 'pk.eyJ1IjoicGFsYWRpbm9zc2F1cm9zIiwiYSI6ImNqb2U1aGo1aDB4MzYzcWxmN3lhZGh4b3gifQ.bP-ef5EUfDznMp77Os6zvg'
		}).addTo(mapa);
		navigator.geolocation.getCurrentPosition(f1);
     function f1(pos){			
			var lat = pos.coords.latitude;
			var log = pos.coords.longitude;
			mapa.setView([lat,log],8)
			var marker = L.marker([lat, log]).addTo(mapa);
			p1 = lat;
			p2 = log;
			marker.bindPopup("Você está aqui!").openPopup();
			dist();
		}	
	function action(){
			btn = document.getElementById("idbtn");
			btn.addEventListener("click", nemo);
		}
	function nemo(){
			lat1 = document.getElementById("Lati").value;
			log1 = document.getElementById("Long").value;
			v1 = lat1;
			v2 = log1;

			mapa.setView([lat1, log1],8);
			marker = L.marker([lat1, log1]).addTo(mapa);
			marker.bindPopup("Localizado!").openPopup();
			dist();
			reta();			
		}
	function dist(){
		var rad = 0.017453292519943295;
		var cos = Math.cos;
		p1 *= rad;
		p2 *= rad;
		v1 *= rad;
		v2 *= rad;
		var demo = 12742;
		var dlat = v1 - p1;
		var dlon = v2 - p2;
		var a = ((1-cos(dlat))+(1-cos(dlon))*cos(v1))/2;
		result = (demo*Math.asin(Math.sqrt(a))).toFixed(3);
		polygon.bindPopup("" + result);
	}
	function reta(){
		result2 = 100;
		polygon = L.polygon([
		   [p1, p2],
		   [v1, v2],			    
		]).addTo(mapa);
		polygon.bindPopup("" + result2);
	}

action();