
//Burger Menu switch

const nav = document.getElementById('nav-bar');
const header = document.getElementById('header');
const burgericon = document.getElementById('burger-icon');
const burgerclose = document.getElementById('burger-close');

burgericon.addEventListener('click', () => {
    nav.classList.add('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.add('hidden');
    burgerclose.classList.remove('hidden');
})

burgerclose.addEventListener('click', () => {
    nav.classList.remove('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.remove('hidden');
    burgerclose.classList.add('hidden');
})

window.onresize = () => {
    let viewPortWidth = window.innerWidth;
    if(viewPortWidth > 848){
        nav.classList.remove('nav-bar-show');
        nav.classList.remove('nav-bar-transition');
        burgericon.classList.remove('hidden');
        burgerclose.classList.add('hidden');
    }
}

// Back this Project Modal Screen Toggle 
//Including Event Listener for Button-Back this Project and Button-Close Modal

const btn_back_project = document.getElementById('btn-back-project');
const modal_back_project = document.getElementById('modal-back-project');
const btn_close_modal = document.getElementById('btn-close-modal');
const main_window = document.getElementById('main-window');

function toggleModal(){
    modal_back_project.classList.toggle("show-modal");
    main_window.classList.toggle("main-hide-overflow");
}

function windowOnClick(event){
    if (event.target === modal_back_project) {
        console.log('closing modal')
        toggleModal();
        hidePledgeSections();
    }else if(event.target === modal_completed){
        console.log('closing modal 2')
        toggleModalCompleted();
    }
}

btn_back_project.addEventListener("click", () =>{
    toggleModal();
});

btn_close_modal.addEventListener("click", () =>{
    toggleModal();
    hidePledgeSections();
});

window.addEventListener("click", windowOnClick);

// Bookmark switch

const btn_bookmark = document.getElementById('btn-bookmark');

function toggleBookmark(){
    btn_bookmark.classList.toggle("bookmark-selected");
}

btn_bookmark.addEventListener("click", toggleBookmark);

//Show Enter Pledge Section

const radio_noreward = document.getElementById('radio-noreward');
const radio_bamboo = document.getElementById('radio-bamboo');
const radio_blackEdition = document.getElementById('radio-black-edition');
const div_pledge_noreward = document.getElementById('div-pledge-noreward');
const div_pledge_bamboo = document.getElementById('div-pledge-bamboo');
const div_pledge_blackedition = document.getElementById('div-pledge-blackedition');

function hidePledgeSections(){
    div_pledge_noreward.classList.remove('show-pledge-details');
    div_pledge_bamboo.classList.remove('show-pledge-details');
    div_pledge_blackedition.classList.remove('show-pledge-details');
    radio_noreward.checked = false;
    radio_bamboo.checked = false;
    radio_blackEdition.checked = false;
}

radio_noreward.addEventListener('change', () => {
    hidePledgeSections();
    if (radio_noreward.checked = true ){
        div_pledge_noreward.classList.add('show-pledge-details');
    }
})

radio_bamboo.addEventListener('change', () => {
    hidePledgeSections();
    if (radio_bamboo.checked = true ){
        div_pledge_bamboo.classList.add('show-pledge-details');
    }
})

radio_blackEdition.addEventListener('change', () => {
    hidePledgeSections();
    if (radio_blackEdition.checked = true ){
        div_pledge_blackedition.classList.add('show-pledge-details');
    }
})

// Select Reward Buttons Event Listeners

const btn_select_blackEdition = document.getElementById('btn-select-black-edition');
const btn_select_bamboo = document.getElementById('btn-select-bamboo');

btn_select_blackEdition.addEventListener('click', () => {
    radio_blackEdition.checked = true;
    div_pledge_blackedition.classList.add('show-pledge-details');
    toggleModal();
})

btn_select_bamboo.addEventListener('click', () => {
    radio_bamboo.checked = true;
    div_pledge_bamboo.classList.add('show-pledge-details');
    toggleModal();
})

//Modal Completed Screen Toggle

const btn_continue = document.getElementById('btn-continue');
const modal_completed = document.getElementById('modal-completed');
const btn_close_completed = document.getElementById('btn-close-completed');

function toggleModalCompleted(){
    modal_completed.classList.toggle("show-modal");
    main_window.classList.toggle("main-hide-overflow");
}

btn_continue.addEventListener('click', ()=>{
    console.log('button continue pressed');
    toggleModal();
    hidePledgeSections();
    toggleModalCompleted();
})

btn_close_completed.addEventListener('click', ()=>{
    toggleModalCompleted();
})