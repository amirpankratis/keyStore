module.exports = {
  help: 
  `
  Available output formats: "json", "yaml", "csv".

  Usage:
  SET  <KEY> <VALUE> "To set a value with its KEY, exp: SET name John"
  GET  <KEY>         "To get a existing value of the key, exp: GET name"
  DEL  <KEY>         "To delete a value and its key, exp: DEL name"
  FLAG <KEY>         "To select output format, exp: FLAG csv"
  FLUSH              "To store current data in output folder"
  EXIT               "To exit the program"
  `
}
