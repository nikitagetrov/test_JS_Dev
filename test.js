// Функция для генерации случайного массива целых чисел
function generateRandomIntArray(length, maxNumberDigits) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      const number = Math.floor(Math.random() * (10 ** maxNumberDigits));
      arr.push(number);
    }
    return arr;
  }
  
  // Функция для запуска тестов
  function runTests() {
    const testCases = [
      [1, [1], 1],
      [10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0.5],
      [50, generateRandomIntArray(50, 2), 0.6],
      [100, generateRandomIntArray(100, 2), 0.7],
      [500, generateRandomIntArray(500, 2), 0.8],
      [1000, generateRandomIntArray(1000, 2), 0.9],
      [1000, generateRandomIntArray(1000, 1), 0.3],
      [900, generateRandomIntArray(900, 3), 0.7],
    ];
  
    for (const [length, originalArray, expectedCompressionRatio] of testCases) {
      const serializedString = serializeIntArray(originalArray);
      const compressionRatio = length / serializedString.length; // Исправлен расчет
  
      console.log(`Тест с ${length} числами:`);
      console.log(`Исходный массив: ${JSON.stringify(originalArray)}`);
      console.log(`Сжатая строка: ${serializedString}`);
      console.log(`Коэффициент сжатия: ${compressionRatio.toFixed(2)}`);
      console.log(`Ожидаемый коэффициент сжатия: ${expectedCompressionRatio.toFixed(2)}`);
      console.log("\n");
    }
  }
  
  // Запускаем тесты
  runTests();
  
  
  