const navigation = document.querySelector('[data-id="menu"]');

navigation.addEventListener("click", function(e){

    const currentElemet = e.target;

    if( currentElemet.matches('[data-dropdown],[data-dropdown] *') ){

        const parentLi = currentElemet.closest("li");
        
        if(parentLi.matches("[data-toggle]")){

        }else{

            parentLi.setAttribute("data-toggle", "");

        }
    }

});