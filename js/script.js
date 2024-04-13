var numbers = [];
var generatedNumbers = { B: [], I: [], N: [], G: [], O: [] };

// Generar números aleatorios para el juego de bingo
function generateNumbers() {
  numbers = [];
  for (var i = 1; i <= 75; i++) {
    numbers.push(i);
  }
  shuffle(numbers);
}

// Función para mezclar los números
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

function highlightLastGenerated() {
  var columns = document.querySelectorAll(".column ul");
  columns.forEach(function(column) {
    // Eliminar todos los elementos HTML dentro de la columna
    column.innerHTML = "";

    var letter = column.parentElement.querySelector("h3").innerText.trim();
    var numbers = generatedNumbers[letter];
    if (numbers) {
      // Ordenar los números de menor a mayor
      numbers.sort((a, b) => a - b);

      // Agregar los números nuevamente y resaltarlos en color amarillo
      numbers.forEach(function(number) {
        var li = document.createElement("li");
        li.textContent = number;
        li.classList.add("yellow");
        column.appendChild(li);
      });
    }
  });
}



// Generar un número aleatorio y mostrarlo en la pantalla
function generateNumber() {
  if (numbers.length === 0) {
    alert("¡Ya se han generado todos los números!");
    return;
  }

  highlightLastGenerated();

  var randomNumber = numbers.pop();
  var letter = getLetter(randomNumber);
  generatedNumbers[letter].push(randomNumber);

  var generatedNumbersList = document.getElementById(letter + "-numbers");
  var remainingCount = document.getElementById("remaining-count");

  // Agregar el número recién generado y resaltarlo en verde
  var generatedNumberHTML = "<li class='green'>" + randomNumber + "</li>";
  generatedNumbersList.innerHTML += generatedNumberHTML;

  remainingCount.innerHTML = "Cantidad de números pendientes: " + numbers.length;
}

// Obtener la letra correspondiente a un número
function getLetter(number) {
  if (number >= 1 && number <= 15) {
    return "B";
  } else if (number >= 16 && number <= 30) {
    return "I";
  } else if (number >= 31 && number <= 45) {
    return "N";
  } else if (number >= 46 && number <= 60) {
    return "G";
  } else if (number >= 61 && number <= 75) {
    return "O";
  }
}

// Generar los números al cargar la página
window.onload = function() {
  generateNumbers();
  var remainingCount = document.getElementById("remaining-count");
  remainingCount.innerHTML = "Cantidad de números pendientes: " + numbers.length;
};