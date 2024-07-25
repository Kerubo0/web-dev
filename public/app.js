const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

toggleBtnIcon.classList  = isOpen 
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
}


const root = document.documentElement;

const setDropdownProps = (button, list, deg, ht, opacity) => {
    //button.querySelector('.dropdown-arrow').style.transform = `rotate(${deg}deg)`;
    button.querySelector('.angle').style.transform = `rotate(${deg}deg)`;
    list.style.maxHeight = ht;
    list.querySelectorAll('.dropdown-list-item').forEach(item => {
        item.style.opacity = opacity;
    });
};

document.querySelectorAll('.dropdown-button').forEach(button => {
    const list = button.nextElementSibling;
    
    const listWrapperSizes = 3.5; // margins, paddings & borders (3.5rem)

    button.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    button.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });

    list.addEventListener('mouseenter', () => {
        const dropdownOpenHeight = `${100 * list.children[0].children.length + listWrapperSizes}rem`;
        setDropdownProps(button, list, 180, dropdownOpenHeight, 1);
    });

    list.addEventListener('mouseleave', () => {
        setDropdownProps(button, list, 0, '0', 0);
    });
});

 //FORM START
 const button = document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", ()=> {
    document.getElementById("formContainer").style.display = 'flex'
  })
 })

 document.querySelector(".form-container .close-btn").addEventListener("click", function() {
   document.getElementById('formContainer').style.display ='none'
 })



// Get all elements with the class name 'angle'
var angleImages = document.querySelectorAll('.angle');

// Add click event listeners to each image
angleImages.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the corresponding dropdown menu for this image
        var dropdownMenu = this.parentElement.querySelector('.dropdown');

        // Toggle the display property of the dropdown menu
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
            // Add rotation class
            image.classList.add('rotate180');
        } else {
            dropdownMenu.style.display = "none";
            // Remove rotation class
            image.classList.remove('rotate180');
        }
    });
});

