function serializeIntArray(arr) {
    // Преобразование массива в строку JSON и кодирование в Base64
    const jsonString = JSON.stringify(arr);
    const base64String = btoa(jsonString);
    return base64String;
  }
  
  function deserializeIntArray(str) {
    // Декодирование Base64 и преобразование обратно в массив
    const jsonString = atob(str);
    const arr = JSON.parse(jsonString);
    return arr;
  }
  
  // Пример использования
  const originalArray = [1, 20, 150, 300];
  const serializedString = serializeIntArray(originalArray);
  console.log("Сериализованная строка:", serializedString);
  
  const deserializedArray = deserializeIntArray(serializedString);
  console.log("Десериализованный массив:", deserializedArray);
  