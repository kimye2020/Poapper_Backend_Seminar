var fs = require('fs')
var textbook = {
    "class name": "실험계획개론", 
    "class id": "IMEN242-01", 
    "textbook name": "Design and Analysis of Experiments, 10th ed.",
    "writer": "Montgomery",
    "ISBN": "978-1-119-49244-3"
}
var textbookJS = JSON.stringify(textbook) 
fs.writeFileSync('textbook.json', textbookJS)