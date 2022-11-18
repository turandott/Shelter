// hamburger
// const menu = document.querySelector(".header_list");
// const menuItems = document.querySelectorAll(".header_link");
// const hamburger = document.querySelector(".hamburger");
// const closeIcon = document.querySelector(".close_icon");
// const menuIcon = document.querySelector(".hamburger");

// function toggleMenu() {
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.remove("showMenu");
//         closeIcon.style.display = "none";
//         menuIcon.style.display = "block";
//     } else {
//         menu.classList.add("showMenu");
//         closeIcon.style.display = "block";
//         menuIcon.style.display = "none";
//     }
// }



// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach(
//     function(menuItem) {
//         menuItem.addEventListener("click", toggleMenu);
//     }
// )
function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".header_list");
    const menuHeader = document.querySelector(".menu__body");
    // const header = document.querySelector(".header");
    // const headerWr = document.querySelector(".header-screen");

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



const pets = [{
        name: "Jennifer",
        img: "../../assets/images/pets-jennifer.png",
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
        img: "../../assets/images/pets-sophia.png",
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
        img: "../../assets/images/pets-woody.png",
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
        img: "../../assets/images/pets-scarlet.png",
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
        img: "../../assets/images/pets-katrine.png",
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
        img: "../../assets/images/pets-timmy.png",
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
        img: "../../assets/images/pets-freddie.png",
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
        img: "../../assets/images/pets-charly.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
    },
];







class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }

    buildModal(content) {
        //overlay
        // this.overlay=document.createElement('div');
        // this.overlay.classList.add('overlay');
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');
        //modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
        //modal contant
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');
        //close btn
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'


        this.setContent(content);
        this.appendModalElements();
        console.log(this.modal);

        // Bind Event
        this.bindEvents();


        ///open
        this.openModal();

    }
    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    }
    setContent(content) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }
    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);

    }
    openModal() {
        document.body.append(this.overlay);
    }
    closeModal(e) {
        let classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
            document.querySelector('.overlay').remove();
        }
    }
}
class Card extends Modal {
    constructor(classes, { id, title, urlToImage, tags, content, date }) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.content = content;
        this.date = date;
    }

    //generate card
    // generateCard() {
    //     let template = '';
    //     let card = document.createElement('div');
    //     card.className = 'card-modal__content';
    //     card.setAttribute('pets-id', this.id);
    //     this.urlToImage &&
    //         (template += `<img class="stragedy__image" src=${this.urlToImage} alt="stragedy">`)

    //     if (this.title) && ()

    // }
}



window.onload = function() {
    console.log("hello")
        // if (data){
        //     renderArticlesToDom();
        // }



    hamburgerMenu();

    addToolsClickHandler();
    // hamburger.addEventListener("click", toggleMenu);

    //generate base modal from modal class


}
const addToolsClickHandler = () => {
    document.querySelector('.card_btn').addEventListener('click', () => {
        generateToolsModal();
    })
}
const generateToolsModal = () => {
    // console.log('generateToolsModal');
    renderModalWindow('Test content');
}
const renderModalWindow = (content) => {
    let modal = new Modal('tools-modal');
    modal.buildModal(content);
}

// class Article{
//     constructor({id, title, urlToImage, tags, ...rest}){
//         this.id=id;
//         this.title=title;
//         this.urlToImage=urlToImage;
//         this.tags=tags
//     }
//     generateArticle(){
//         let template ='';
//         let article=document.
//     }
//}