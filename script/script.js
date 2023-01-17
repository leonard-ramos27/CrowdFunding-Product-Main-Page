//SELECTORS

const nav = document.getElementById('nav-bar');
const header = document.getElementById('header');
const burgericon = document.getElementById('burger-icon');
const burgerclose = document.getElementById('burger-close');

const btn_back_project = document.getElementById('btn-back-project');
const modal_back_project = document.getElementById('modal-back-project');
const btn_close_modal = document.getElementById('btn-close-modal');
const main_window = document.getElementById('main-window');

const btn_bookmark = document.getElementById('btn-bookmark');

const radio_noreward = document.getElementById('radio-noreward');
const radio_bamboo = document.getElementById('radio-bamboo');
const radio_blackEdition = document.getElementById('radio-black-edition');
const div_pledge_noreward = document.getElementById('div-pledge-noreward');
const div_pledge_bamboo = document.getElementById('div-pledge-bamboo');
const div_pledge_blackedition = document.getElementById('div-pledge-blackedition');

const btn_select_blackEdition = document.getElementById('btn-select-black-edition');
const btn_select_bamboo = document.getElementById('btn-select-bamboo');

const btn_continue_noreward = document.getElementById('btn-continue-noreward');
const btn_continue_bamboo = document.getElementById('btn-continue-bamboo');
const btn_continue_blackedition = document.getElementById('btn-continue-blackedition');
const modal_completed = document.getElementById('modal-completed');
const btn_close_completed = document.getElementById('btn-close-completed');
const txt_pledge_noreward = document.getElementById('txt-pledge-noreward');
const txt_pledge_bamboo = document.getElementById('txt-pledge-bamboo');
const txt_pledge_blackedition = document.getElementById('txt-pledge-blackedition');



//EVENT LISTENERS


burgericon.addEventListener('click', () => {    
    //Open Burger Menu
    nav.classList.add('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.add('hidden');
    burgerclose.classList.remove('hidden');
})

burgerclose.addEventListener('click', () => {   
    //Close Burger Menu 
    nav.classList.remove('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.remove('hidden');
    burgerclose.classList.add('hidden');
})

window.onresize = () => {       
    //Resetting Burger Menu when window size is changed
    let viewPortWidth = window.innerWidth;
    if(viewPortWidth > 848){
        nav.classList.remove('nav-bar-show');
        nav.classList.remove('nav-bar-transition');
        burgericon.classList.remove('hidden');
        burgerclose.classList.add('hidden');
    }
}

btn_bookmark.addEventListener("click", toggleBookmark); 

btn_back_project.addEventListener("click", () => {   
    //Open Back this Project Modal
    toggleModal();
});

btn_close_modal.addEventListener("click", () => {    
    //Close Back this Project Modal
    toggleModal();
    hidePledgeSections();
});

window.addEventListener("click", windowOnClick);  

btn_select_bamboo.addEventListener('click', () => {
    //Selects Bamboo Stand Reward
    radio_bamboo.checked = true;
    div_pledge_bamboo.classList.add('show-pledge-details');
    toggleModal();
})

btn_select_blackEdition.addEventListener('click', () => {
    //Selects Black Edition Stand Reward
    radio_blackEdition.checked = true;
    div_pledge_blackedition.classList.add('show-pledge-details');
    toggleModal();
})

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

btn_continue_noreward.addEventListener('click', () => {
    event.preventDefault();
    const pledgeAmount = parseFloat(txt_pledge_noreward.value);
    if(pledgeAmount >= 1){
        toggleModalCompleted();
    }
});

btn_continue_bamboo.addEventListener('click', () => {
    event.preventDefault();
    const pledgeAmount = parseFloat(txt_pledge_bamboo.value);
    if(pledgeAmount >= 25){
        toggleModalCompleted();
    }
});

btn_continue_blackedition.addEventListener('click', () => {
    event.preventDefault();
    const pledgeAmount = parseFloat(txt_pledge_blackedition.value);
    if(pledgeAmount >= 75){
        toggleModalCompleted();
    }
});

btn_close_completed.addEventListener('click', ()=>{
    toggleModalCompleted();
    toggleModal();
    hidePledgeSections();
});



//FUNCTIONS

function toggleModal(){
    //Opens Back this Project Modal 
    modal_back_project.classList.toggle("show-modal");
    main_window.classList.toggle("main-hide-overflow");
}

function windowOnClick(event){
    //Closes Modal when clicking the gray background screen
    if (event.target === modal_back_project) {
        console.log('closing modal')
        toggleModal();
        hidePledgeSections();
    }else if(event.target === modal_completed){
        console.log('closing modal 2')
        toggleModalCompleted();
    }
}

function toggleBookmark(){
    //Turns on and off the Bookmark
    btn_bookmark.classList.toggle("bookmark-selected");
}

function hidePledgeSections(){
    //Hides all Enter Pledge Amount sections
    div_pledge_noreward.classList.remove('show-pledge-details');
    div_pledge_bamboo.classList.remove('show-pledge-details');
    div_pledge_blackedition.classList.remove('show-pledge-details');
    //Unchecks all radio buttons
    radio_noreward.checked = false;
    radio_bamboo.checked = false;
    radio_blackEdition.checked = false;
}

function toggleModalCompleted(){
    modal_completed.classList.toggle("show-modal");
}
