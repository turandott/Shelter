const CLIENT_WIDTH = document.documentElement.clientWidth;

function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header_list");
    const menuHeader = document.querySelector(".menu__body");


    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
        menuHeader.classList.toggle("active");
        document.body.classList.toggle("_lock");
        // headerWr.classList.toggle("active");
    }
    const headerLink = document.querySelectorAll(".header_link");

    headerLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        menuHeader.classList.remove("active");
        document.body.classList.remove("_lock");

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
        // app.append(node);
}

const wrapper = document.querySelector('.cards_wrapper');

function AddCard() {

    pets.map(item => {
        const card = createDomNode('div', 'div', 'card');
        wrapper.append(card);
        const imgPet = createDomNode('img', 'img', 'card_image');
        imgPet.src = `${item.img}`;
        card.append(imgPet);
        const petName = createDomNode('p', 'p', 'pet_name');
        petName.textContent += `${item.name}`;
        card.append(petName);
        const cardButton = createDomNode('button', 'button', 'card_btn')
        cardButton.textContent += "Learn more";
        card.append(cardButton);

    });
}

function showCards() {
    if (CLIENT_WIDTH >= 1280) {} else if (CLIENT_WIDTH >= 768) {} else {}
}



window.onload = function() {
    console.log("hello")
        // if (pets) {
        //     renderArticlesToDom();
        // }

    AddCard();
    hamburgerMenu();




}