//declare a variable and assign the value of an empty array that will hold all of our image objects
let babyImageArray = [];

//find our image container element using document.getElemenetById 

let elImageContainer = document.getElementById('iamge-container');

//declare three variables that will hold our image objects for displaying
let firstImage;
let secondImage;
let thirdImage;
let totalClicked = 0;


//create an object constructor that will take in parameters, and store properties of an image

let BabyImage = function(name, filePath, id) {

    this.name = name;

    this.filePath = filePath;

    this.id = id;

    this.clicked = 0;

    this.shown = 0;

    };

//check if local storage exists
if(localStorage.length >0){
//retrieve stored babyImageArray from local storage that includes clicks and shown
let getData = localStorage.getItem('BabyImageArr');
//reassign the value of babyImageArray to the parsed babyImageArray that we stored in local storage because local storage is string
 babyImageArray = JSON.parse(getData);
} else {

//if local storage does not exist (it is just happen in first time) instantiate our constructor to create multiple instances/objects of hero images
let Baby = new BabyImage('Baby', './babyImage/baby.jpg', 'baby');

let Baby1 = new BabyImage('Baby1', './babyImage/baby1.jpg', 'baby1');

let Baby2 = new BabyImage('Baby2', './babyImage/baby2.jpg', 'baby2');

let Baby3 = new BabyImage('Baby3', './babyImage/baby3.jpg', 'baby3');

let Baby4 = new BabyImage('Baby4', './babyImage/baby4.jpg', 'baby4');

let Baby5 = new BabyImage('Baby5', './babyImage/baby5.jpg', 'baby5');

let Baby6 = new BabyImage('Baby6', './babyImage/baby6.jpg', 'baby6');

let Baby7 = new BabyImage('Baby7', './babyImage/baby7.jpg', 'baby7');

let Baby8 = new BabyImage('Baby8', './babyImage/baby8.jpg', 'baby8');

let Baby9 = new BabyImage('Baby9', './babyImage/baby9.jpg', 'baby9');

let Baby10 = new BabyImage('Baby10', './babyImage/baby10.jpg', 'baby10');  

//push our new instances/objects to our babyImageArray
babyImageArray =[Baby, Baby1, Baby2, Baby3, Baby4, Baby5, Baby6, Baby7, Baby8, Baby9, Baby10];   
 };




//define a function for selecting a random image object from our babyImageArray
function randomImage(){
    //declare a variable that calculate a random number
    let randomNumber = Math.floor(Math.random()*babyImageArray.length);
    //declare a variable that will store a random image object
    let imageIndex = babyImageArray[randomNumber];
    //return random image object
    return imageIndex;  
   
}
//define event handler function that will increment the times clicked
function imageClicked(event){
    //if id of target html element equel to first and second and third image object, inrement object clicked by 1
    if(event.target.id === firstImage.id){
        firstImage.clicked += 1;
    }else if (event.target.id === secondImage.id){
        secondImage.clicked += 1;
    }else if(event.target.id === thirdImage){
        thirdImage.clicked += 1;
    }
    //calling our displayImage function for displaying images
    displayImage();
    //save our baby image array to local storage whenever ann image is clicked
    
    totalClicked += 1;
    localStorage.setItem('BabyImageArr',JSON.stringify(babyImageArray));
    
    if(totalClicked >= 25){
    
        elImageContainer.innerHTML = "";
        displayChart();

    }
  
}

//define a function that will display random images
function displayImage() {
    //re-assign the image container html to an empty string so that it removes our previously
    elImageContainer.innerHTML = '';
    //create a for loop that will iterate 3 times to display 3 images
    for (i=0; i<3; i++){
        //declare a variable and assign it the value from calling randomImage function
        let imageObject = randomImage();
        //create if statement that will check what iteration our for loop is on and assign our firstImage, secondImage, and thirdImage variables the value of our current image object
        if(i === 0){
            //re-assign firstImage to the value our image object
            firstImage = imageObject
        }else if (i === 1){
            //while the current image is the same as first image, get new image from randomImage function
            while (imageObject.id === firstImage.id) {
                imageObject = randomImage();
                console.log('second while',imageObject.id);
            }
            secondImage = imageObject
        }else {
            while (imageObject.id === firstImage.id || imageObject.id === secondImage.id) {
                imageObject = randomImage();
                console.log('third while',imageObject.id);
            }    
            thirdImage = imageObject
        }
        
        //create a new img html element
        let elImage = document.createElement('img');
        //append our img tag to image container
        elImageContainer.appendChild(elImage);
        //set an id attribute on new img element
        elImage.setAttribute('id', imageObject.id);
        //change sorce of image element with image obgect with file path
        elImage.src = imageObject.filePath;
        //add event listener to new image element
        elImage.addEventListener('click', imageClicked)
        imageObject.shown += 1;
        
}}

//invok displyImage
displayImage();






