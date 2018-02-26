//START SETUP
const express = require('express')
const logger = require("morgan")
const bodyParser = require('body-parser');
var photoNum = 0
const photoList = ['photos/photo1.jpg', 'photos/photo2.jpg', 'photos/photo3.jpg']

//Create instance of app
const app = express()

//Serve js and html in ejs
app.set('view engine', 'ejs')

//Ability to send static files
app.use(express.static('views'))
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'))

// END SETUP

//CHANGE THIS LINK IF WE NEED TO CHANGE THE IMAGE INPUT SOURCE
app.get('/', (req,res) => {
  res.render('index.ejs', {photo: photoList[photoNum]})
  if(photoNum >= photoList.length-1){
    photoNum = 0
  }
  else{
    photoNum++
  }
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))

/////////////////END OF REQUIRED STUFF///////////////////

//Appending positive or negative response to images:

app.post('/image', (req, res) => {
  let choice = req.body.inputchoice
  let photoURL = req.body.photo
  console.log(choice, photoURL)
  res.redirect('/')
})
