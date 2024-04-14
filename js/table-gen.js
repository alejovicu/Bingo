        // Función para generar un número aleatorio dentro de un rango
        function getRandomNumber(min, max, usedNumbers) {
            var num;
            do {
                num = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (usedNumbers.has(num)); // Verificar si el número ya ha sido usado
            return num;
        }

        // Llenar la tabla con números aleatorios para el juego de bingo
        function fillTable() {
            var usedNumbers = new Set(); // Conjunto para almacenar los números generados
            for (var i = 1; i <= 5; i++) {
                for (var j = 0; j < 5; j++) {
                    var cell = document.getElementById(getColumn(j) + i);
                    var min, max;

                    // Definir el rango de números para cada columna
                    switch(j) {
                        case 0: // B
                            min = 1;
                            max = 15;
                            break;
                        case 1: // I
                            min = 16;
                            max = 30;
                            break;
                        case 2: // N
                            min = 31;
                            max = 45;
                            break;
                        case 3: // G
                            min = 46;
                            max = 60;
                            break;
                        case 4: // O
                            min = 61;
                            max = 75;
                            break;
                    }

                    // Generar un número aleatorio dentro del rango y asignarlo a la celda
                    var randomNumber = getRandomNumber(min, max, usedNumbers);
                    usedNumbers.add(randomNumber); // Agregar el número al conjunto de números usados
                    cell.textContent = randomNumber;
                }
            }
        }

        // Obtener la letra de la columna según su índice
        function getColumn(index) {
            switch(index) {
                case 0:
                    return 'B';
                case 1:
                    return 'I';
                case 2:
                    return 'N';
                case 3:
                    return 'G';
                case 4:
                    return 'O';
            }
        }

        // Llenar la tabla al cargar la página
        window.onload = fillTable;