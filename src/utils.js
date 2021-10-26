export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatName(employee) {
  var firstName = capitalize(employee.first_name);
  var lastName = capitalize(employee.last_name);
  return firstName + ' ' + lastName;
}