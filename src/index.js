const CLIENT_WIDTH = document.documentElement.clientWidth;
const wrapper = document.querySelector('.cards_wrapper');
const slider = document.querySelector('.card_slider');
let offset = 0;
let count = 0;
let width;

function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header_list");
    const menuHeader = document.querySelector(".menu__body");
    const card_z = document.querySelector(".cards_wrapper");
    const slider_z = document.querySelector(".card_slider");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
        menuHeader.classList.toggle("active");
        document.body.classList.toggle("_lock");
        card_z.classList.toggle("active");
        slider_z.classList.toggle("active");
    }
    const headerLink = document.querySelectorAll(".header_link");

    headerLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        menuHeader.classList.remove("active");
        document.body.classList.remove("_lock");
        card_z.classList.remove("active");
        slider_z.classList.remove("active");

    }
}



let pets = [{
        name: "Jennifer",
        img: "../../../assets/images/pets-jennifer.svg",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Sophia",
        img: "../../../assets/images/pets-sophia.svg",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Woody",
        img: "../../../assets/images/pets-woody.svg",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"],
    },
    {
        name: "Scarlett",
        img: "../../../assets/images/pets-scarlet.svg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Katrine",
        img: "../../../assets/images/pets-katrine.svg",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Timmy",
        img: "../../../assets/images/pets-timmy.svg",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"],
    },
    {
        name: "Freddie",
        img: "../../../assets/images/pets-freddie.svg",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"],
    },
    {
        name: "Charly",
        img: "../../../assets/images/pets-charly.svg",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
    },
];

// const items = pets.map((item) => {
//     return `<div class="card" onClick="openPopup()" id=${item.name} >
//                 <div class="item-image" id=${item.name} >
//                     <img src=${item.img} alt=${item.type} id=${item.name} />
//                 </div>
//                 <h4 id=${item.name}>${item.name}</h4>
//                 <a href="#." class="button" id=${item.name} >Learn more</a>
//             </div>`;
// });
function createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node
}

// const buttons = document.querySelectorAll('.card_btn')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             generatePopup();
//         })
//     });

//     function generatePopup() {
//         console.log('pampma')
//     }
function AddCard() {

    pets.map(item => {




        const card = createDomNode('div', 'div', 'card');
        slider.append(card);
        const imgPet = createDomNode('img', 'img', 'card_image');
        imgPet.src = `${item.img}`;
        card.append(imgPet);
        const petName = createDomNode('p', 'p', 'pet_name');
        petName.textContent += `${item.name}`;
        card.append(petName);
        const cardButton = createDomNode('button', 'button', 'card_btn')
        cardButton.textContent += "Learn more";
        card.append(cardButton);
        console.log(pets.indexOf(item))
        cardButton.addEventListener('click', () => {

            // //modal
            // modal = createDomNode('div', 'modal', 'modal');
            // //modal contant
            // modalContent = createDomNode('div', 'modal__content');
            // //close btn
            // modalCloseBtn = createDomNode('span', 'modal__close-icon');
            // console.log(`${item.name}`)
            generatePopup(pets.indexOf(item))
                // generatePopup(`${item.name}`);

        })
    });
}

function generatePopup(index) {
    // overlay = document.createElement('div');
    // overlay.classList.add('overlay');
    // overlay = createDomNode('div', 'div', 'overlay');
    // // document.append(overlay)
    // 
    over = document.createElement('div')
    over.className = 'overlay'
    over.classList.add('overlay')
    body = document.querySelector('body')
    body.append(over)
    modal = createDomNode('div', 'modal', 'modal');
    // //modal contant
    over.append(modal);
    modalCloseBtn = createDomNode('div', 'div', 'close-icon');
    modal.append(modalCloseBtn);

    modalContent = createDomNode('div', 'div', 'modal__content');
    modal.append(modalContent);


    const imgPet = createDomNode('img', 'img', 'modal_image');
    imgPet.src = `${pets[index].img}`;
    modalContent.append(imgPet);


    modalInfo = createDomNode('div', 'div', 'modal__info');
    modalContent.append(modalInfo);

    const petName = createDomNode('h3', 'h3', 'modal_name');
    petName.textContent += `${pets[index].name}`;
    modalInfo.append(petName);

    const typePet = createDomNode('h4', 'h4', 'modal_type')
    typePet.textContent = `${pets[index].type}-${pets[index].breed}`;
    modalInfo.append(typePet);
    // const breedPet = createDomNode('h4', 'h4', 'modal_breed')
    // breedPet.textContent = `${pets[index].breed}`;
    // modalInfo.append(breedPet);
    const descrPet = createDomNode('h5', 'h5', 'modal_desc')
    descrPet.textContent = `${pets[index].description}`;
    modalInfo.append(descrPet);
    const modalList = createDomNode('ul', 'ul', 'modal_list')
    modalInfo.append(modalList);

    const agePet = createDomNode('li', 'li', 'modal_li')
    agePet.textContent = `age: ${pets[index].age}`;
    modalList.append(agePet);
    const inoPet = createDomNode('li', 'li', 'modal_li')
    inoPet.textContent = `inoculations: ${pets[index].inoculations}`;
    modalList.append(inoPet);

    const diseasePet = createDomNode('li', 'li', 'modal_li')
    diseasePet.textContent = `diseases: ${pets[index].diseases}`;
    modalList.append(diseasePet);

    const parasitesPet = createDomNode('li', 'li', 'modal_li')
    parasitesPet.textContent = `parasites: ${pets[index].parasites}`;
    modalList.append(parasitesPet);

    bindEvents();

    console.log(`${pets[index].name}`)
}

overlay = document.querySelector('overlay')


function bindEvents() {
    modalCloseBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}


function closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('close-icon')) {
        document.querySelector('.overlay').remove();
    }
}


function sliderPets() {
    console.log('resize');

    width = document.querySelector('.cards_wrapper').offsetWidth;
    column_gap = (width % 270) / (Math.floor(width / 270) - 1);

    document.querySelector('.rows-right').addEventListener('click', function() {

        offset = offset + 270 + column_gap;
        if (offset > 0) {
            offset = 0;
        }
        slider.style.left = offset + 'px';
    })

    document.querySelector('.rows-left').addEventListener('click', function() {
        offset = offset - (270 + column_gap);
        if (offset < -1800) {
            offset = 0;
        }
        slider.style.left = offset + 'px';
    })

}


// class Modal {
//     constructor(classes) {
//         this.classes = classes;
//         this.modal = '';
//         this.modalContent = '';
//         this.modalCloseBtn = '';
//         this.overlay = '';
//         this.Img=''
//     }

//     buildModal(content) {
//         //overlay
//         // this.overlay=document.createElement('div');
//         // this.overlay.classList.add('overlay');
//         this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');
//         //modal
//         this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
//         //modal contant
//         this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');
//         //close btn
//         this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
//         this.modalCloseBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'


//         this.appendModalElements();
//         console.log(this.modal);

//         // Bind Event
//         this.bindEvents();


//         ///open
//         this.openModal();

//     }
//     createDomNode(node, element, ...classes) {
//         node = document.createElement(element);
//         node.classList.add(...classes);
//         return node;
//     }

//     appendModalElements() {
//         this.modal.append(this.modalCloseBtn);
//         this.modal.append(this.modalContent);
//         this.overlay.append(this.modal);
//     }

//     bindEvents() {
//         this.modalCloseBtn.addEventListener('click', this.closeModal);
//         this.overlay.addEventListener('click', this.closeModal);

//     }
//     openModal() {
//         document.body.append(this.overlay);
//     }
//     closeModal(e) {
//         let classes = e.target.classList;
//         if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
//             document.querySelector('.overlay').remove();
//         }
//     }
// }

// const addToolsClickHandler = () => {
//     const buttons = document.querySelectorAll('.card_btn')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             generateToolsModal();
//         })
//     })
// }
// const generateToolsModal = () => {
//     // console.log('generateToolsModal');
//     renderModalWindow('TEst content');
// }
// const renderModalWindow = (content) => {
//     let modal = new Modal('tools-modal');
//     modal.buildModal(content);
// }


window.onload = function() {
    console.log("hello")
        // if (pets) {
        //     renderArticlesToDom();
        // }
    hamburgerMenu();
    AddCard();
    window.addEventListener('resize', sliderPets);
    sliderPets();
    // addToolsClickHandler();
    // const buttons = document.querySelectorAll('.card_btn')
    // buttons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         generatePopup();
    //     })
    // });

    // function generatePopup() {
    //     console.log('pampma')
    // }


}