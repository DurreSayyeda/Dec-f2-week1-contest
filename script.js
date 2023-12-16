
const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "Seema", age: 29, profession: "admin" },
  { name: "priya", age: 23, profession: "developer" }
];

// 1. Print Developers
function printDeveloper() {
  // Filter developers from the 'data' array
  const developers = data.filter(person => person.profession.toLowerCase() === 'developer');

  // Log the developers to the console
  console.log('Developers:', developers);
}

// 2. Add Data
function addData() {
  // Use prompt to collect details for a new data object
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');

  // Create a new object with the collected details
  const newData = { name, age, profession };

  // Add the new object to the 'data' array
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  // Extract and remove all admins from the 'data' array
  const nonAdmins = data.filter(person => person.profession.toLowerCase() !== 'admin');
  data.length = 0; // Clear the original array
  data.push(...nonAdmins); // Add the non-admins back to the array
}

// 4. Concatenate Array
function concatenateArray() {
  // Create a dummy array as an example
  const dummyArray = [
    { name: "dummy1", age: 30, profession: "developer" },
    { name: "dummy2", age: 35, profession: "admin" },
  ];

  // Combine the two arrays using the 'concat' method
  const resultArray = data.concat(dummyArray);

  // Log the result to the console
  console.log('Concatenated Array:', resultArray);
}

// 5. Average Age
function averageAge() {
  // Use the 'reduce' method to calculate the sum of all ages
  const sum = data.reduce((total, person) => total + person.age, 0);

  // Divide the sum by the number of elements in the array
  const average = sum / data.length;

  // Log the average age to the console
  console.log('Average Age:', average);
}

// 6. Age Check
function checkAgeAbove25() {
  // Use the 'some' method to check if at least one person in the array is older than 25
  const isAbove25 = data.some(person => person.age > 25);

  // Log the result to the console
  console.log('Age Above 25:', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  // Use a Set to store unique professions
  const uniqueProfessionsSet = new Set();

  // Iterate through the array and add each profession to the set
  data.forEach(person => uniqueProfessionsSet.add(person.profession));

  // Convert the set back to an array and log the result
  console.log('Unique Professions:', Array.from(uniqueProfessionsSet));
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);

  // Log the sorted array to the console
  console.log('Sorted by Age:', data);
}

// 9. Update Profession
function updateJohnsProfession() {
  // Use the 'map' method to iterate through the array
  data.map(person => {
    // Find the object with the name 'john' and update its profession to 'manager'
    if (person.name.toLowerCase() === 'john') {
      person.profession = 'manager';
    }
    return person;
  });

  // Log the updated array to the console
  console.log('Updated John\'s Profession:', data);
}

// 10. Profession Count
function getTotalProfessions() {
  // Use the 'reduce' method to count the number of developers and admins separately
  const professionCount = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;
    return count;
  }, {});

  // Log the total count of each profession to the console
  console.log('Profession Count:', professionCount);
}




/*
const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  { name: "Seema", age: 29, profession: "admin" },
  { name: "priya", age: 23, profession: "developer" },
];

// Output container
const outputContainer = document.getElementById('output');

// 1. Print Developers
function printDeveloper() {
  // Filter developers from the 'data' array
  const developers = data.filter(person => person.profession.toLowerCase() === 'developer');

  // Display developers on the webpage
  outputContainer.innerHTML = `<p>Developers: ${JSON.stringify(developers)}</p>`;
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');

  // Add new data object to the 'data' array
  data.push({ name, age, profession });

  // Display updated array on the webpage
  outputContainer.innerHTML = `<p>Data Added: ${JSON.stringify(data)}</p>`;
}

// 3. Remove Admins
function removeAdmin() {
  // Extract and remove admins from the 'data' array
  const nonAdmins = data.filter(person => person.profession.toLowerCase() !== 'admin');
  data.length = 0; // Clear the original array
  Array.prototype.push.apply(data, nonAdmins); // Update with non-admins

  // Display updated array on the webpage
  outputContainer.innerHTML = `<p>Admins Removed: ${JSON.stringify(data)}</p>`;
}

// 4. Concatenate Array
function concatenateArray() {
  // Create a dummy array for demonstration
  const dummyArray = [
      { name: "dummy1", age: 30, profession: "developer" },
      { name: "dummy2", age: 35, profession: "admin" },
  ];

  // Concatenate the arrays
  const resultArray = data.concat(dummyArray);

  // Display result on the webpage
  outputContainer.innerHTML = `<p>Concatenated Array: ${JSON.stringify(resultArray)}</p>`;
}

// 5. Average Age
function averageAge() {
  // Calculate the average age
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / data.length;

  // Display result on the webpage
  outputContainer.innerHTML = `<p>Average Age: ${avgAge.toFixed(2)}</p>`;
}

// 6. Age Check
function checkAgeAbove25() {
  // Check if at least one person is older than 25
  const isAbove25 = data.some(person => person.age > 25);

  // Display result on the webpage
  outputContainer.innerHTML = `<p>Age Above 25: ${isAbove25}</p>`;
}

// 7. Unique Professions
function uniqueProfessions() {
  // Get unique professions using Set
  const uniqueProfessionsSet = new Set(data.map(person => person.profession));
  const uniqueProfessionsArray = [...uniqueProfessionsSet];

  // Display result on the webpage
  outputContainer.innerHTML = `<p>Unique Professions: ${JSON.stringify(uniqueProfessionsArray)}</p>`;
}

// 8. Sort by Age
function sortByAge() {
  // Sort the array by age in ascending order
  data.sort((a, b) => a.age - b.age);

  // Display sorted array on the webpage
  outputContainer.innerHTML = `<p>Sorted by Age: ${JSON.stringify(data)}</p>`;
}

// 9. Update Profession
function updateJohnsProfession() {
  // Update 'John's profession to 'manager'
  data.forEach(person => {
      if (person.name.toLowerCase() === 'john') {
          person.profession = 'manager';
      }
  });

  // Display updated array on the webpage
  outputContainer.innerHTML = `<p>John's Profession Updated: ${JSON.stringify(data)}</p>`;
}

// 10. Profession Count
function getTotalProfessions() {
  // Count the number of developers and admins
  const developerCount = data.filter(person => person.profession.toLowerCase() === 'developer').length;
  const adminCount = data.filter(person => person.profession.toLowerCase() === 'admin').length;

  // Display result on the webpage
  outputContainer.innerHTML = `<p>Developer Count: ${developerCount}, Admin Count: ${adminCount}</p>`;
}
*/