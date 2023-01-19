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
const div_input_noreward = document.getElementById('div-input-noreward');
const div_input_bamboo = document.getElementById('div-input-bamboo');
const div_input_blackedition = document.getElementById('div-input-blackedition');
let pledgeStats = {
    totalPledge: 89914,
    totalBackers: 5007
};




//EVENT LISTENERS

window.addEventListener('resize', resetMobileMenu)
window.addEventListener("click", windowOnClick)  
burgericon.addEventListener('click', openMobileMenu)
burgerclose.addEventListener('click', closeMobileMenu)
btn_bookmark.addEventListener("click", toggleBookmark)
btn_back_project.addEventListener("click", toggleModal)

btn_close_modal.addEventListener("click", () => {    
    toggleModal()
    hidePledgeSections()
})

btn_select_bamboo.addEventListener('click', () => {
    selectBambooReward()
    toggleModal()
})

btn_select_blackEdition.addEventListener('click', () => {
    selectBlackEditionReward()
    toggleModal()
})

radio_noreward.addEventListener('change', selectNoReward)
radio_bamboo.addEventListener('change', selectBambooReward)
radio_blackEdition.addEventListener('change', selectBlackEditionReward)

btn_continue_noreward.addEventListener('click', (event)=>{
    event.preventDefault();
    btnContinueClicked('noreward', parseFloat(txt_pledge_noreward.value))
})

/*(event) => {
    event.preventDefault();
    const pledgeAmount = parseFloat(txt_pledge_noreward.value);
    if(pledgeAmount >= 1){
        toggleModalCompleted();
        div_input_noreward.classList.remove('invalid-value')
    }else{
        div_input_noreward.classList.add('invalid-value')
    }
});*/

btn_continue_bamboo.addEventListener('click', (event) => {
    event.preventDefault();
    btnContinueClicked('bamboo', parseFloat(txt_pledge_bamboo.value))
    /*const pledgeAmount = parseFloat(txt_pledge_bamboo.value);
    if(pledgeAmount >= 25){
        toggleModalCompleted();
        div_input_bamboo.classList.remove('invalid-value')
    }else{
        div_input_bamboo.classList.add('invalid-value')
    }*/
});

btn_continue_blackedition.addEventListener('click', (event) => {
    event.preventDefault();
    btnContinueClicked('blackedition', parseFloat(txt_pledge_blackedition.value))
    /*const pledgeAmount = parseFloat(txt_pledge_blackedition.value);
    if(pledgeAmount >= 75){
        toggleModalCompleted();
        div_input_blackedition.classList.remove('invalid-value')
    }else{
        div_input_blackedition.classList.add('invalid-value')
    }*/
});

btn_close_completed.addEventListener('click', ()=>{
    toggleModalCompleted();
    toggleModal();
    hidePledgeSections();
});



//FUNCTIONS


function openMobileMenu(){
    //Open Burger Menu
    nav.classList.add('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.add('hidden');
    burgerclose.classList.remove('hidden');
}

function closeMobileMenu(){
    //Close Burger Menu 
    nav.classList.remove('nav-bar-show');
    nav.classList.add('nav-bar-transition');
    burgericon.classList.remove('hidden');
    burgerclose.classList.add('hidden');
}

function resetMobileMenu(){
    //Resetting Burger Menu when window size is changed
    let viewPortWidth = window.innerWidth;
    if(viewPortWidth > 848){
        nav.classList.remove('nav-bar-show');
        nav.classList.remove('nav-bar-transition');
        burgericon.classList.remove('hidden');
        burgerclose.classList.add('hidden');
    }
}

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
    if(btn_bookmark.classList.contains("bookmark-selected")){
        btn_bookmark.children[1].innerHTML = "Bookmarked"
    }else{
        btn_bookmark.children[1].innerHTML = "Bookmark"
    }
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
    //remove invalid value error message
    div_input_noreward.classList.remove('invalid-value')
    div_input_bamboo.classList.remove('invalid-value')
    div_input_blackedition.classList.remove('invalid-value')
    //reset input values
    txt_pledge_noreward.value = "1";
    txt_pledge_bamboo.value = "25";
    txt_pledge_blackedition.value = "75";
    //remove green borders for sections
    radio_noreward.closest('.modal-product-container').classList.remove('green-border')
    radio_bamboo.closest('.modal-product-container').classList.remove('green-border')
    radio_blackEdition.closest('.modal-product-container').classList.remove('green-border')
}

function toggleModalCompleted(){
    modal_completed.classList.toggle("show-modal");
}

function selectBambooReward(){
    hidePledgeSections();
    if (radio_bamboo.checked = true ){
        div_pledge_bamboo.classList.add('show-pledge-details');
        radio_bamboo.closest('.modal-product-container').classList.add('green-border')
    }
}

function selectBlackEditionReward(){
    hidePledgeSections();
    if (radio_blackEdition.checked = true ){
        div_pledge_blackedition.classList.add('show-pledge-details');
        radio_blackEdition.closest('.modal-product-container').classList.add('green-border')
    }
}

function selectNoReward(){
    hidePledgeSections();
    if (radio_noreward.checked = true ){
        div_pledge_noreward.classList.add('show-pledge-details');
        radio_noreward.closest('.modal-product-container').classList.add('green-border')
    }
}

function btnContinueClicked(pledgeType, pledgeAmount){
    console.log(pledgeType, pledgeAmount)
    switch(pledgeType){
        case "noreward":
            if(pledgeAmount >= 1){
                addPledge(pledgeAmount);
                toggleModalCompleted();
                div_input_noreward.classList.remove('invalid-value')
                break;
            }else{
                div_input_noreward.classList.add('invalid-value')
                break;
            }
        case "bamboo" :
            if(pledgeAmount >= 25){
                addPledge(pledgeAmount);
                toggleModalCompleted();
                div_input_bamboo.classList.remove('invalid-value')
                break;
            }else{
                div_input_bamboo.classList.add('invalid-value')
                break;
            }
        case "blackedition" :
            if(pledgeAmount >= 75){
                addPledge(pledgeAmount);
                toggleModalCompleted();
                div_input_blackedition.classList.remove('invalid-value')
                break;
            }else{
                div_input_blackedition.classList.add('invalid-value')
                break;
            }
    }
}

function addPledge(pledgeAmount){
    pledgeStats.totalPledge += pledgeAmount;
    pledgeStats.totalBackers++;
    console.log(pledgeStats.totalPledge, pledgeStats.totalBackers)
}
