export default function capitalize(string = "") {
  if (typeof string !== "string") {
    console.error("Input must be a string");
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
