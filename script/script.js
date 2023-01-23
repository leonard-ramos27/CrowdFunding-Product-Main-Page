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
const bookmark_icon_gray = document.getElementById('bookmark-icon-gray')
const bookmark_icon_green= document.getElementById('bookmark-icon-green')
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
const div_total_pledge = document.getElementById('pledge-total-amount');
const div_total_backers = document.getElementById('pledge-total-backers');
const stats_progress_bar = document.querySelector('.stat-progress-bar');
const span_bamboo_count = document.querySelectorAll('.bamboo-count');
const span_black_edition_count = document.querySelectorAll('.black-edition-count');
const div_product_container_bamboo = document.getElementById('product-container-bamboo');
const div_product_container_blackedition = document.getElementById('product-container-blackedition');
let pledgeStats = {};

//EVENT LISTENERS

window.addEventListener('resize', resetMobileMenu)
window.addEventListener("click", windowOnClick)  
burgericon.addEventListener('click', openMobileMenu)
burgerclose.addEventListener('click', closeMobileMenu)
btn_bookmark.addEventListener("click", btnBookmarkClicked)
btn_back_project.addEventListener("click", toggleModal)
btn_select_bamboo.addEventListener('click', btnSelectRewardClicked)
btn_select_blackEdition.addEventListener('click', btnSelectRewardClicked)
radio_noreward.addEventListener('click', radioBtnChecked)
radio_bamboo.addEventListener('change', radioBtnChecked)
radio_blackEdition.addEventListener('change', radioBtnChecked)
btn_continue_noreward.addEventListener('click', btnContinueClicked)
btn_continue_bamboo.addEventListener('click', btnContinueClicked)
btn_continue_blackedition.addEventListener('click', btnContinueClicked);
btn_close_modal.addEventListener("click", () => {    
    toggleModal()
    hidePledgeSections()
    clearRadioButtons()
})
btn_close_completed.addEventListener('click', ()=>{
    toggleModalCompleted();
    toggleModal();
    hidePledgeSections();
    clearRadioButtons();
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

function btnBookmarkClicked(){
    toggleBookmark()
    updateLocalPledgeStats()
}

function toggleBookmark(){
    //Turns on and off the Bookmark
    btn_bookmark.classList.toggle("bookmark-selected");
    bookmark_icon_gray.classList.toggle("hidden")
    bookmark_icon_green.classList.toggle("hidden")
    //Changes Text to Bookmarked if turned on
    if(btn_bookmark.classList.contains("bookmark-selected")){
        btn_bookmark.children[2].innerHTML = "Bookmarked"
        pledgeStats.isBookMarked = true
    }else{
        btn_bookmark.children[2].innerHTML = "Bookmark"
        pledgeStats.isBookMarked = false
    }
}

function toggleModal(){
    //Opens Modal of Back this project
    modal_back_project.classList.toggle("show-modal");
    main_window.classList.toggle("main-hide-overflow");
}

function toggleModalCompleted(){
    modal_completed.classList.toggle("show-modal");
}

function windowOnClick(event){
    //Closes Modal when clicking the gray background screen
    if (event.target === modal_back_project) {
        toggleModal();
        hidePledgeSections();
        clearRadioButtons();
    }else if(event.target === modal_completed){
        toggleModalCompleted();
    }
}

function hidePledgeSections(){
    //Hides all Enter Pledge Amount sections
    div_pledge_noreward.classList.remove('show-pledge-details');
    div_pledge_bamboo.classList.remove('show-pledge-details');
    div_pledge_blackedition.classList.remove('show-pledge-details');
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

function clearRadioButtons(){
    //Unchecks all radio buttons
    radio_noreward.checked = false;
    radio_bamboo.checked = false;
    radio_blackEdition.checked = false;
}

function clearErrorInvalidValue(){
    //Removes the error invalid value on all input boxes
    div_input_noreward.classList.remove('invalid-value')
    div_input_bamboo.classList.remove('invalid-value')
    div_input_blackedition.classList.remove('invalid-value')
}

function btnSelectRewardClicked(event){
    //Checks the type of reward selected
    if(event.target === btn_select_bamboo){
        radio_bamboo.checked = true
    }else if(event.target === btn_select_blackEdition){
        radio_blackEdition.checked = true
    }
    radioBtnChecked()
    toggleModal()
}

function radioBtnChecked(){
    hidePledgeSections();
    if (radio_noreward.checked === true ){
        div_pledge_noreward.classList.add('show-pledge-details');
        radio_noreward.closest('.modal-product-container').classList.add('green-border')
    }else if(radio_bamboo.checked === true){
        div_pledge_bamboo.classList.add('show-pledge-details');
        radio_bamboo.closest('.modal-product-container').classList.add('green-border')
    }else if (radio_blackEdition.checked === true ){
        div_pledge_blackedition.classList.add('show-pledge-details');
        radio_blackEdition.closest('.modal-product-container').classList.add('green-border')
    }
}

function btnContinueClicked(event){
    event.preventDefault()
    //Check if user selected No Reward
    if(event.target === btn_continue_noreward){
        let pledgeAmount = parseFloat(txt_pledge_noreward.value)
        //Check if the amount entered is more than 1
        if(pledgeAmount >= 1){
            //Removes all error messages for invalid values
            clearErrorInvalidValue()
            //Add amount to total Pledge
            addPledge(pledgeAmount)
            //Update LocalStorage
            updateLocalPledgeStats()
            //Show Modal Completed
            toggleModalCompleted()
            //Update stats in Main Page
            updateStats()
        }else{
            //Shows message that value is invalid
            div_input_noreward.classList.add('invalid-value')
        }
    }
    //Check if user selected the Bamboo Stand Reward
    else if(event.target === btn_continue_bamboo){
        let pledgeAmount = parseFloat(txt_pledge_bamboo.value)
        if(pledgeAmount >= 25){
            clearErrorInvalidValue()
            addPledge(pledgeAmount)
            //Decrease item left for Bamboo Stand
            decrementBamboo()
            updateLocalPledgeStats()
            toggleModalCompleted()
            updateStats()
        }else{
            div_input_bamboo.classList.add('invalid-value')
        }
    }
    //Check if user selected Black Edition Stand Reward
    else if(event.target === btn_continue_blackedition){
        let pledgeAmount = parseFloat(txt_pledge_blackedition.value)
        if(pledgeAmount >= 75){
            clearErrorInvalidValue()
            addPledge(pledgeAmount)
            //Decrease item left for Black Edition Stand
            decrementBlackEdition()
            updateLocalPledgeStats()
            toggleModalCompleted()
            updateStats()
        }else{
            div_input_blackedition.classList.add('invalid-value')
        }
    }
}

function decrementBamboo(){
    pledgeStats.bambooItemCount--;
}

function decrementBlackEdition(){
    pledgeStats.blackEditionItemCount--;
}

function addPledge(pledgeAmount){
    pledgeStats.totalPledge += pledgeAmount;
    pledgeStats.totalBackers++;
}

function updateStats(){
    //Formats USD currency for Total Pledge Amount
    const f = new Intl.NumberFormat("en-us", {
        style: "currency", 
        currency: "USD", 
        minimumFractionDigits: 0
    })
    //Updates Total Pledge Amount, Total Backers and Progress Bar in Main Page
    div_total_pledge.innerText = f.format(pledgeStats.totalPledge)
    div_total_backers.innerText = pledgeStats.totalBackers
    stats_progress_bar.value = pledgeStats.totalPledge
    //Updates total item left for Bamboo Stand in Main Page and Modal
    span_bamboo_count.forEach(span_item_count => {
        span_item_count.innerText = pledgeStats.bambooItemCount
        //Checks if there is Bamboo Item Left
        if(pledgeStats.bambooItemCount == 0){
            //disables bamboo reward section on main page and modal screen
            div_product_container_bamboo.classList.add('product-disabled')
            btn_select_bamboo.disabled = true
            btn_select_bamboo.classList.remove('green-button')
            radio_bamboo.closest('.modal-product-container').classList.add('product-disabled')
            radio_bamboo.disabled = true
        }else if(pledgeStats.bambooItemCount > 0){
            div_product_container_bamboo.classList.remove('product-disabled')
            btn_select_bamboo.disabled = false
            btn_select_bamboo.classList.add('green-button')
            radio_bamboo.closest('.modal-product-container').classList.remove('product-disabled')
            radio_bamboo.disabled = false
        }
    });
    //Updates total item left for Bamboo Stand in Main Page and Modal
    span_black_edition_count.forEach(span_item_count => {
        span_item_count.innerText = pledgeStats.blackEditionItemCount
        //Checks if there is Black Edition Item Left
        if(pledgeStats.blackEditionItemCount == 0){
            //disables Black Edition reward section on main page and modal screen
            div_product_container_blackedition.classList.add('product-disabled')
            btn_select_blackEdition.disabled = true
            btn_select_blackEdition.classList.remove('green-button')
            radio_blackEdition.closest('.modal-product-container').classList.add('product-disabled')
            radio_blackEdition.disabled = true
        }else if(pledgeStats.blackEditionItemCount > 0){
            div_product_container_blackedition.classList.remove('product-disabled')
            btn_select_blackEdition.disabled = false
            btn_select_blackEdition.classList.add('green-button')
            radio_blackEdition.closest('.modal-product-container').classList.remove('product-disabled')
            radio_blackEdition.disabled = false
        }
    });
    //Check if Bookmark is enabled
    if(pledgeStats.isBookMarked === true){
        if(!btn_bookmark.classList.contains("bookmark-selected")){
            toggleBookmark()
        }
    }
}

function getLocalPledgeStats(){
    if(localStorage.getItem('pledgeStats') === null){
        pledgeStats = {
            totalPledge: 89914,
            totalBackers: 5007,
            bambooItemCount: 101,
            blackEditionItemCount: 64,
            isBookMarked: false
        }
    }else{
        pledgeStats = JSON.parse(localStorage.getItem('pledgeStats'));
    }
    updateStats()
    console.log(pledgeStats)
}

function updateLocalPledgeStats(){
    if(pledgeStats !== null){
        localStorage.setItem('pledgeStats', JSON.stringify(pledgeStats));
    }
}

getLocalPledgeStats();
