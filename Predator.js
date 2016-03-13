var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {


    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      //Set the value of the private array
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        listCarnivores(carnivores);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },

    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        herbivores = JSON.parse(this.responseText).herbivores;
        var herbList = document.getElementById('herbList');
        var herbString = "";
        listHerbivores(herbivores);
      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
  };
}());

listCarnivores = function(carnivores) {
      var carnList = document.getElementById('carnList');
        var carnString = "";
        for(var i = 0; i < carnivores.length; i++) {
          var currentCarn = carnivores[i];
          carnString = `<h2>Animal: ${currentCarn.animal}</h2>`;
          carnString += `<h4>Location: ${currentCarn.location}</h4>`;
          carnList.innerHTML += carnString;
        }
    }

listHerbivores = function(herbivores) {
      var herbList = document.getElementById('herbList');
        var herbString = "";
        for(var i = 0; i < herbivores.length; i++) {
          var currentHerb = herbivores[i];
          herbString = `<h2>Animal: ${currentHerb.animal}</h2>`;
          herbString += `<h4>Location: ${currentHerb.location}</h4>`;
          herbList.innerHTML += herbString;
         };
    }

//Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores. --DONE
//Create an IIFE with the name of Predator. --DONE
//Predator should have two private arrays to store carnivores and herbivores. --DONE


//Predator should expose two public functions to load each JSON files and stores
//the array of animals in the appropriate private array. Each of those functions
//should accept one argument that will store the callback function to be executed.


//In the iife-xhr.js file, define two functions that will be executed after each
//type of animal is loaded to then display those animals in your DOM. Example given below.

//In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.