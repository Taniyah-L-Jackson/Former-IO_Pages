//Shelves with carousels
let shelfA = document.getElementById('shelfA');
let shelfB = document.getElementById('shelfB');
let shelfC = document.getElementById('shelfC');

let booksToAdd = 13; //add to shelf

//add the books back to back in a loop
//when a certain point is reached, restart the loop
for (let i = 0; i < booksToAdd; i++) {

    var stack = document.createElement('div');
    stack.classList.add('books')

    //give books random colors
    let randomColors = ['purple', 'green', 'teal', 'blue', 'navy', 'brown', 'eggshell']; 

    let bookColor = randomColors[Math.floor(Math.random() * randomColors.length)]; 

    if (stack.className == 'books') {

        switch (bookColor) {

            case 'purple':
                stack.classList.add('purple');
                break;
        
            case 'green':
                stack.classList.add('green');
                break;

            case 'teal':
                stack.classList.add('teal');
                break;
            
            case 'blue':
                stack.classList.add('purple');
                break;

            case 'navy': 
                stack.classList.add('navy');
                break;
            
            case 'brown':
                stack.classList.add('brown');
                break;
            
            case 'eggshell':
                stack.classList.add('eggshell');
                break;
        }

    }

    // Append random stacks of books to shelves with carousels

    //For Shelf A
    shelfA.appendChild(stack);

    //For Shelf B

    //--cloneNode is used for copying a child node that already has a parent
    let cloneStackB = stack.cloneNode(stack);

    //--Once cloned, append to new parent
    shelfB.appendChild(cloneStackB);

    //For Shelf C
    let cloneStackC = stack.cloneNode(stack);
    shelfC.appendChild(cloneStackC);

    //Add carousels last (shown later in code)   

}

//Append HTML-CSS book function to first shelf
//Append Javascript book function to second shelf
//Append Achievements book function to third shelf 

//Books with functions
var red_book = document.getElementById('HTML-CSS');
var blue_book = document.getElementById('JavaScript');
var green_book = document.getElementById('Achievements');

//get all books from each shelves
var book_Stack_A = document.getElementById('shelfA')
var book_Stack_B = document.getElementById('shelfB')
var book_Stack_C = document.getElementById('shelfC')

//assign functions to books
red_book.addEventListener('click', moveShelfA);
blue_book.addEventListener('click', moveShelfB);
green_book.addEventListener('click', moveShelfC);


//Add functions to main books. Make sure that the function is not applied to more than one book

function moveShelfA() {
    // .contains checks to see if that class is included with the element 

    if(book_Stack_B.classList.contains('bookShiftDown')) {

        book_Stack_B.classList.remove('bookShiftDown')

    }else if(book_Stack_C.classList.contains('bookShiftDown')) {

        book_Stack_C.classList.remove('bookShiftDown')
    }

    book_Stack_A.classList.add('bookShiftDown');

}

function moveShelfB() {

    if(book_Stack_A.classList.contains('bookShiftDown')) {

        book_Stack_A.classList.remove('bookShiftDown')

    }else if(book_Stack_C.classList.contains('bookShiftDown')){

        book_Stack_C.classList.remove('bookShiftDown')
    }

    book_Stack_B.classList.add('bookShiftDown');

}

function moveShelfC() {

    if(book_Stack_A.classList.contains('bookShiftDown')) {

        book_Stack_A.classList.remove('bookShiftDown')

    }else if(book_Stack_B.classList.contains('bookShiftDown')) {
        
        book_Stack_B.classList.remove('bookShiftDown')
    }

    book_Stack_C.classList.add('bookShiftDown');

}


//Carousels:
//-----------------------------------------------------------
//Carousel bases
var carousel_base_A = document.getElementById('carousel_HTML_CSS');
var carousel_base_B = document.getElementById('carousel_JavaScript');
var carousel_base_C = document.getElementById('carousel_Achievements')

//carousel items:
var current_indexA = 0; //current carouselA index
var current_indexB = 0; //current carouselB index 
var current_indexC = 0; //current carouselC index

//--ids and lists (Carousel A):
var carousel_A_img = document.getElementById('imageA');
var carousel_A_caption = document.getElementById('captionA');
var carousel_A_Cover = document.getElementById('viewA');
var carousel_A_Test = document.getElementById('testA');

var carousel_A_list = [
    
    {image: "media/bloom.png",
    caption: 'Bloom Project',
    view: 'https://github.com/Taniyah-L-Jackson/bloom',
    test: 'https://taniyah-l-jackson.github.io/bloom/'},

    {image: "media/venedor.png",
    caption: 'Venedor Project',
    view: 'https://github.com/Taniyah-L-Jackson/venedor',
    test: 'https://taniyah-l-jackson.github.io/venedor/'},

    {image: "media/hourglass.png",
    caption: 'Hourglass Experiment',
    view: 'https://github.com/Taniyah-L-Jackson/hourglass',
    test: 'https://taniyah-l-jackson.github.io/hourglass/'},

    {image: "media/spinning-squares.png",
    caption: 'Spinning Squares Experiment',
    view: 'https://github.com/Taniyah-L-Jackson/position-assignment',
    test: 'https://taniyah-l-jackson.github.io/position-assignment/'},

    {image: "media/illusion.png",
    caption: 'Illusion Experiment',
    view: 'https://github.com/Taniyah-L-Jackson/illusion',
    test: 'https://taniyah-l-jackson.github.io/illusion/'},

];
//store in list

//show for first carousel
carousel_A_img.src = carousel_A_list[current_indexA].image;
carousel_A_caption.innerText = carousel_A_list[current_indexA].caption;
//view code
carousel_A_Cover.href = carousel_A_list[current_indexA].view;
//test code
carousel_A_Test.href = carousel_A_list[current_indexA].test;


//-----------------------------------------------------------
//-----------------------------------------------------------

//--ids and lists (Carousel B):

var carousel_B_img = document.getElementById('imageB');
var carousel_B_caption = document.getElementById('captionB');
var carousel_B_Cover = document.getElementById('viewB');
var carousel_B_Test = document.getElementById('testB');

var carousel_B_list = [
    
    {image: "media/smokingAge.png",
    caption: 'Smoking Age Detector',
    view: 'https://github.com/Taniyah-L-Jackson/Smoking_Age',
    test: ' https://taniyah-l-jackson.github.io/Smoking_Age/'},

    {image: "media/passwordMaker.png",
    caption: 'Password Maker',
    view: 'https://github.com/Taniyah-L-Jackson/PasswordMaker',
    test: 'https://taniyah-l-jackson.github.io/PasswordMaker/'},

    {image: "media/battleship.png",
    caption: 'BattleShip Game',
    view: 'https://github.com/Taniyah-L-Jackson/Battleship',
    test: 'https://taniyah-l-jackson.github.io/Battleship/'},

    {image: "media/adventureGame.png",
    caption: 'Adventure Game',
    view: 'https://github.com/Taniyah-L-Jackson/Adventure_Prompt',
    test: 'https://taniyah-l-jackson.github.io/Adventure_Prompt/'},

    {image: "media/baristaGame.png",
    caption: 'Barista Game',
    view: 'https://github.com/Taniyah-L-Jackson/Baristas',
    test: 'https://taniyah-l-jackson.github.io/Baristas/'},


];
//store in list

//show for second carousel
carousel_B_img.src = carousel_B_list[current_indexB].image;
carousel_B_caption.innerText = carousel_B_list[current_indexB].caption;
carousel_B_Cover.href = carousel_B_list[current_indexB].view;
carousel_B_Test.href = carousel_B_list[current_indexB].test; 
//------------------------------------------------------------
//-----------------------------------------------------------

//--ids and lists (Carousel C):

var carousel_C_img = document.getElementById('imageC');
var carousel_C_caption = document.getElementById('captionC');
var carousel_C_Cover = document.getElementById('viewC');


var carousel_C_list = [
    
    {image: "media/HTML-CSS_Cert.jpg",
    caption: 'HTML/CSS Certificate',
    view: 'https://www.sololearn.com/Certificate/1014-14588647/pdf/'},

    {image: "media/JavaScript_Cert.jpg",
    caption: 'JavaScript Certificate',
    view: 'https://www.sololearn.com/Certificate/1024-14588647/pdf/'},

    {image: "media/Python_Cert.jpg",
    caption: 'Python Certificate',
    view: 'https://www.sololearn.com/Certificate/1073-14588647/pdf/'},

    {image: "media/responsive_web_design.png",
    caption: 'Responsive Web Design',
    view: 'https://www.freecodecamp.org/certification/lanesha_h/responsive-web-design'},

    {image: "media/JavaScript_Algorithms_and_Data_Structures.png",
    caption: 'JavaScript Algorithms',
    view: 'https://www.freecodecamp.org/certification/lanesha_h/javascript-algorithms-and-data-structures'},

];
//store in list

//show for second carousel
carousel_C_img.src = carousel_C_list[current_indexC].image;
carousel_C_caption.innerText = carousel_C_list[current_indexC].caption;
//view cert
carousel_C_Cover.href = carousel_C_list[current_indexC].view;


//-----------------------------------------------------
//-----------------------------------------------------

//--buttons:

//---left:
var left_buttonA = document.getElementById('leftA');
left_buttonA.addEventListener('click', prev);

var left_buttonB = document.getElementById('leftB');
left_buttonB.addEventListener('click', prev);

var left_buttonC = document.getElementById('leftC');
left_buttonC.addEventListener('click', prev);


//---right:
var right_buttonA = document.getElementById('rightA');
right_buttonA.addEventListener('click', next);

var right_buttonB = document.getElementById('rightB');
right_buttonB.addEventListener('click', next);

var right_buttonC = document.getElementById('rightC');
right_buttonC.addEventListener('click', next);

//All button functions
function prev(event) {

    left = event.currentTarget.value;

    switch (left) {
        case 'leftA':

            current_indexA--

            if (current_indexA < 0) { //if left is pressed again, reset loop

                current_indexA = (carousel_A_list.length - 1); //start loop from end

            }
            
            carousel_A_img.src = carousel_A_list[current_indexA].image;
            carousel_A_caption.innerText = carousel_A_list[current_indexA].caption;
            carousel_A_link = carousel_A_list[current_indexA].link;
            carousel_A_caption.href = carousel_A_link;
            break;
    
        case 'leftB':

            current_indexB--

            if (current_indexB < 0) { 

                current_indexB = (carousel_B_list.length - 1);

            }
            
            carousel_B_img.src = carousel_B_list[current_indexB].image;
            carousel_B_caption.innerText = carousel_B_list[current_indexB].caption;
            carousel_B_link = carousel_B_list[current_indexB].link;
            carousel_B_caption.href = carousel_B_link;

            break;

        case 'leftC':

            current_indexC--

            if (current_indexC < 0) { 

                current_indexC = (carousel_C_list.length - 1);

            }
            
            carousel_C_img.src = carousel_C_list[current_indexC].image;
            carousel_C_caption.innerText = carousel_C_list[current_indexC].caption;
            carousel_C_link = carousel_C_list[current_indexC].link;
            carousel_C_caption.href = carousel_C_link;

            break;
    }

    // image.classList.add('image_animation');

    //Display
    

}

function next(event) {

    right = event.currentTarget.value;

    switch (right) {
        case 'rightA':

            current_indexA++

            if (current_indexA > (carousel_A_list.length - 1)) { //if right is pressed again, reset loop

                current_indexA = 0; //start loop from beginning

            }
            
            //display new set
            carousel_A_img.src = carousel_A_list[current_indexA].image;
            carousel_A_caption.innerText = carousel_A_list[current_indexA].caption;
            carousel_A_Cover.href = carousel_A_list[current_indexA].view;
            carousel_A_Test.href = carousel_A_list[current_indexA].test; 
            break;
    
        case 'rightB':

            current_indexB++

            if (current_indexB > (carousel_B_list.length - 1)) { 

                current_indexB = 0;

            }
            
            carousel_B_img.src = carousel_B_list[current_indexB].image;
            carousel_B_caption.innerText = carousel_B_list[current_indexB].caption;
            carousel_B_Cover.href = carousel_B_list[current_indexB].view;
            carousel_B_Test.href = carousel_B_list[current_indexB].test; 

            break;

        case 'rightC':

            current_indexC++

            if (current_indexC > (carousel_C_list.length - 1)) { 

                current_indexC = 0;

            }
            
            carousel_C_img.src = carousel_C_list[current_indexC].image;
            carousel_C_caption.innerText = carousel_C_list[current_indexC].caption;
            carousel_C_Cover.href = carousel_C_list[current_indexC].view;

            break;
    }

}



//the left and right button must start from the current image slot

//decrease left and increase right

//the left also must start where the right stops, and vise versa



//----------------------------------------
//for everytime books is called in HTML
//add the books from the css classes
//the books will repeatedly show up until 
//the 'booksToAdd' is complete
//--------------------------------------------


