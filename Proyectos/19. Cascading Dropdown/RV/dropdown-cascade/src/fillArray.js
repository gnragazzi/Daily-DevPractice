export default (array, object) => {
  for (const x in object) {
    array.push(x)
  }
  return array
}
