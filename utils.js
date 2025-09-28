export function ReturnCurrentAge(Day, Month, Year) {
  // take the current date
  const today = new Date();

  // take each thing seperately
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // index is 0
  const currentDay = today.getDate();

  let age = currentYear - Year;
  // Check if the birthday for the current year has happened yet.
  // If the current month is before the birth month, or
  // if it's the same month but the current day is before the birth day,
  // then the person hasn't had their birthday yet this year.
  if (currentMonth < Month || (currentMonth === Month && currentDay < Day)) {
    age--; // Subtract one year
  }

  return age;
}

export function ReturnIntro(name,collage){
    let intro = `Hii, My name is ${name} and I am studying at ${collage}`
    return intro;
}

export function reverseString(str) {
  // Split the string into an array, reverse the array, then join it back.
  return str.split('').reverse().join('');
}

export function calculateAverage(numbers) {
  // First, check if the array is empty to avoid dividing by zero.
  if (numbers.length === 0) {
    return 0;
  }
  
  // Use the .reduce() method to get the sum of all numbers.
  const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
  
  // Then, divide the sum by the count of numbers.
  return sum / numbers.length;
}
