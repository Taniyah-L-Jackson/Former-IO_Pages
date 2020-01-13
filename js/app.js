//Shelves with carousels
let shelfA = document.getElementById('shelfA');
let shelfB = document.getElementById('shelfB');
let shelfC = document.getElementById('shelfC');

let booksToAdd = 20; //add to shelf

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


//Carousels

//Carousel bases
var carousel_base_A = document.getElementById('carousel_HTML_CSS');
var carousel_base_B = document.getElementById('carousel_JavaScript');
var carousel_base_C = document.getElementById('carousel_Achievements')

carousel_base_A.classList.add('carousel');
carousel_base_B.classList.add('carousel');
carousel_base_C.classList.add('carousel');

//carousel items
var carousel_A_sliders = [
    "media/hourglass.png",
    "media/firebloom.png",
    "media/illusion.png"
];

var carousel_B_sliders = [
    "media/illusion.png",
    "media/hourglass.png",
    "media/firebloom.png",
];

var carousel_C_sliders = [
    "media/firebloom.png",
    "media/illusion.png",
    "media/hourglass.png"
];


var caption_box_A = [
    "caption_A",
    "caption_B",
    "caption_C"
];

var caption_box_B = [
    "caption_A",
    "caption_B",
    "caption_C"
];

var caption_box_C = [
    "caption_A",
    "caption_B",
    "caption_C"
];


//carousel add-ins

//left button
var left_button_A = document.createElement('button');
left_button_A.classList.add('left');
left_button_A.innerText = '<';

//cloned left buttons 
var left_button_B = left_button_A.cloneNode(left_button_A);
var left_button_C = left_button_A.cloneNode(left_button_A);

//right button
var right_button_A = document.createElement('button');
right_button_A.classList.add('right');
right_button_A.innerText = '>';

//cloned right buttons 
var right_button_B = right_button_A.cloneNode(right_button_A);
var right_button_C = right_button_A.cloneNode(right_button_A);

//images
var image_A = document.createElement('img');
image_A.classList.add('image');

//cloned images
var image_B = image_A.cloneNode(image_A);
var image_C = image_A.cloneNode(image_A);

// image.classList.add('image_animation');

//captions
var captions_A = document.createElement('a');
captions_A.classList.add('captions')
captions_A.href = "#link";

//cloned captions
var captions_B = captions_A.cloneNode(captions_A);
var captions_C = captions_A.cloneNode(captions_A);

//start first images captions
captions_A.innerText = caption_box_A[0]
captions_B.innerText = caption_box_B[0]
captions_C.innerText = caption_box_C[0]

//Images show first elements
image_A.src = carousel_A_sliders[0];
image_B.src = carousel_B_sliders[0];
image_C.src = carousel_C_sliders[0];

//Append to each carousel

//Carousel_A
carousel_base_A.appendChild(left_button_A);
carousel_base_A.appendChild(right_button_A);
carousel_base_A.appendChild(captions_A);
carousel_base_A.appendChild(image_A);

//Carousel_B
carousel_base_B.appendChild(left_button_B);
carousel_base_B.appendChild(right_button_B);
carousel_base_B.appendChild(captions_B);
carousel_base_B.appendChild(image_B);

//Carousel_C
carousel_base_C.appendChild(left_button_C);
carousel_base_C.appendChild(right_button_C);
carousel_base_C.appendChild(captions_C);
carousel_base_C.appendChild(image_C);


//button event listeners
//For Carousel_A
left_button_A.addEventListener('click', prev_A);
right_button_A.addEventListener('click', next_A);

//For Carousel_B
left_button_B.addEventListener('click', prev_B);
right_button_B.addEventListener('click', next_B);

//For Carousel_C
left_button_C.addEventListener('click', prev_C);
right_button_C.addEventListener('click', next_C);

//looping through images   
var current_image = 0; //starting point

// image.classList.remove('image_animation');

//All button functions
function prev_A() {

    var left = current_image; //left starts from the current image displayed

    left-- //go backwards in list

    if (left < 0) { //if left is pressed again, reset loop

        var left = (carousel_A_sliders.length - 1); //start loop from end

    }

    // image.classList.add('image_animation');

    //Images
    image_A.src = carousel_A_sliders[left];

    //Image
    captions_A.innerText = caption_box_A[left];


    current_image = left; //current image is where 'left' stopped

    return current_image;
}

function prev_B() {

    var left = current_image; //left starts from the current image displayed

    left-- //go backwards in list

    if (left < 0) { //if left is pressed again, reset loop

        var left = (carousel_B_sliders.length - 1); //start loop from end

    }

    // image.classList.add('image_animation');

    //Images
    image_B.src = carousel_B_sliders[left];

    //Image
    captions_B.innerText = caption_box_B[left];


    current_image = left; //current image is where 'left' stopped

    return current_image;
}

function prev_C() {

    var left = current_image; //left starts from the current image displayed

    left-- //go backwards in list

    if (left < 0) { //if left is pressed again, reset loop

        var left = (carousel_C_sliders.length - 1); //start loop from end

    }

    // image.classList.add('image_animation');

    //Images
    image_C.src = carousel_C_sliders[left];

    //Image
    captions_C.innerText = caption_box_C[left];


    current_image = left; //current image is where 'left' stopped

    return current_image;
}

function next_A() {

    var right = current_image;

    right++ //go forwards in list

    if (right > (carousel_A_sliders.length - 1)) { //if right is pressed again, rest loop
        
        right = 0; //start loop from beginning
    }

    //Images
    image_A.src = carousel_A_sliders[right];

    //Captions
    captions_A.innerText = caption_box_A[right];

    current_image = right; //current_image is where 'right' stopped

    return current_image;

}

function next_B() {

    var right = current_image;

    right++ //go forwards in list

    if (right > (carousel_B_sliders.length - 1)) { //if right is pressed again, rest loop
        
        right = 0; //start loop from beginning
    }

    //Images
    image_B.src = carousel_B_sliders[right];

    //Captions
    captions_B.innerText = caption_box_B[right];

    current_image = right; //current_image is where 'right' stopped

    return current_image;

}

function next_C() {

    var right = current_image;

    right++ //go forwards in list

    if (right > (carousel_C_sliders.length - 1)) { //if right is pressed again, rest loop
        
        right = 0; //start loop from beginning
    }

    //Images
    image_C.src = carousel_C_sliders[right];

    //Captions
    captions_C.innerText = caption_box_C[right];

    current_image = right; //current_image is where 'right' stopped

    return current_image;

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


