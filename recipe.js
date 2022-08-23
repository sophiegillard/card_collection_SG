
// FETCHING the Collection of recipes
fetch("collection.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      showName(json.recipe)
    })

function showName(list){

  let numberOfRecipe = list.length;
  let containerCard = document.querySelector('.main__content__recipe__cards');
  
  // Loop that creates a section and a paragraph for each element of the list
      for (let i = 0; i < numberOfRecipe; i++) {
  
  //adding new elements from COLLECTION
        //CREATE THE INDIVIDUAL DIV OF MY CARDS
        let articleDiv = document.createElement('div');
        containerCard.appendChild(articleDiv);
        articleDiv.classList.add("card");

        

        //CREATE CARD HEADER OF MY CARD
          //CREATE DIV FOR IMAGE AN TEXT
          let cardImageBox= document.createElement("div");
          articleDiv.appendChild(cardImageBox);
          cardImageBox.classList.add("card__image__box")

          //Create image 
          let img = document.createElement('img');
          img.src=(list[i].photo);
          cardImageBox.appendChild(img);
          img.classList.add("card__image");

          let clickHere= document.createElement('button');
          clickHere.innerText= 'Click here for full recipe';
          cardImageBox.appendChild(clickHere);
          clickHere.classList.add("card__image__button");
          // CREATE THE SECTION
          let cardHeader= document.createElement("section");
          articleDiv.appendChild(cardHeader);
          cardHeader.classList.add("card__header");

          //create ARTICLE Name
          let cardName= document.createElement('article');
          cardHeader.appendChild(cardName);
          cardName.classList.add("card__title__block");
          // Create name element
          let name = document.createElement('h2');
          let nameText= document.createTextNode(list[i].name);
          name.appendChild(nameText);
          cardName.appendChild(name);
          name.classList.add("card__title");
          //create Div for category & diet
          let catDiet = document.createElement('div');
          cardName.appendChild(catDiet);
          catDiet.classList.add("card__content__description");
          //Create category paragraph
          let category = document.createElement('p');
          let categoryText= document.createTextNode(list[i].category);
          category.appendChild(categoryText);
          catDiet.appendChild(category);
          category.classList.add("card__category");
          
                    //NAME CLASS ACCORDING TO CATEGORY
                      let categoryLength= list[i].category;

                        if(categoryLength=="Breakfast"){
                        category.classList.add("breakfast");
                        } 
                        else if (categoryLength=="Lunch") {
                          category.classList.add("lunch");
                        } 
                        else if (categoryLength=="Diner") {
                          category.classList.add("diner");
                        } 
                        else if (categoryLength=="Snack") {
                          category.classList.add("snack");
                        } 
                        else if (categoryLength=="Dessert") {
                          category.classList.add("dessert");
                        } 
           

          //Create diet paragraph
          let diet = document.createElement('p');
          let dietText= document.createTextNode(list[i].diet);
          diet.appendChild(dietText);
          catDiet.appendChild(diet);
          diet.classList.add("card__diet");

                    //NAME CLASS ACCORDING TO DIET
                      let dietLength= list[i].diet;

                        if(dietLength=="vegetarian"){
                        diet.classList.add("vegetarian");
                        } 
                        else if (dietLength=="vegan") {
                          diet.classList.add("vegan");
                        } 
                        else if (dietLength=="Classic") {
                          diet.classList.add("classic");
                        } 
                      
           
      

        //create SECTION card_content
          let cardContent = document.createElement('section');
          cardContent.classList.add("card__content");
          articleDiv.appendChild(cardContent);
      
          //create Ingredients SECTION
          let ingredientsDiv = document.createElement('div');
          cardContent.appendChild(ingredientsDiv);
          ingredientsDiv.classList.add("card__content__ingredients");

          //CREATING OF A HORIZONTAL LINE
          let hr = document.createElement('hr');
          ingredientsDiv.appendChild(hr);

                  //create the ingredients title
                  let ingredientsTitle = document.createElement('h3');
                  // add text
                  ingredientsTitle.innerText = 'Ingredients :';
                  // grab target element reference
                  ingredientsDiv.appendChild(ingredientsTitle);
                  ingredientsTitle.classList.add("card__ingredients__title");

                    //create the ingredients LIST      
                  let ingredients = document.createElement('ul');
                 
                  ingredientsDiv.appendChild(ingredients);
                  ingredients.classList.add("card__ingredients__list");


                      //CREATE A LIST OF INGREDIENTS ITEMS THROUGH A LOOP
                        let listOfIngredients= list[i].ingredients;

                        for (const j of listOfIngredients) {
                          let listItemIngredient = document.createElement('li');

                          //add a label for the check box
                          let labelCheck= document.createElement("label");
                          listItemIngredient.appendChild(labelCheck);

                          //add a input and checkbox style to each li
                          let inputCheck = document.createElement("input");
                          listItemIngredient.appendChild(inputCheck);
                          inputCheck.setAttribute("type", "checkbox");

                          listItemIngredient.appendChild(document.createTextNode(j))
                          ingredients.appendChild(listItemIngredient);
                          listItemIngredient.classList.add("card__ingredients__list__items");
                        };

          //create Directions SECTION
          let directionsDiv = document.createElement('div');
          cardContent.appendChild(directionsDiv);
          directionsDiv.classList.add("card__content__directions");

                 //create the ingredients title
                 let directionsTitle = document.createElement('h3');
                 // add text
                 directionsTitle.innerText = 'Directions :';
                 // grab target element reference
                 directionsDiv.appendChild(directionsTitle);
                 directionsTitle.classList.add("card__directions__title");

            //create the directions List    
          let directions = document.createElement('ul');
          directionsDiv.appendChild(directions);
          directions.classList.add("card__directions__list");
          directions.setAttribute("type", "checkbox");
          


                  //CREATE A LIST OF DIRECTIONS ITEMS THROUGH A LOOP
                  let listOfDirections= list[i].directions;
          
                  for (const j of listOfDirections) {
                    let listItemDirections = document.createElement('li');
                    listItemDirections.appendChild(document.createTextNode(j))
                    directions.appendChild(listItemDirections);
                    listItemDirections.classList.add("card__directions__list__items");
                  };


        //create section card_footer
          let cardFooter = document.createElement('section');
              let hrTwo = document.createElement('hr');
              cardFooter.appendChild(hrTwo);
          articleDiv.appendChild(cardFooter);
          cardFooter.classList.add("card__footer");
          //create serves SECTION
              let servesDiv = document.createElement('div');
              cardFooter.appendChild(servesDiv);
              servesDiv.classList.add("card__footer__serves");

                  //create the title
                  let servesTitle = document.createElement('h3');
                  // add text
                  servesTitle.innerText = 'Serves  : ';
                  // grab target element reference
                  servesDiv.appendChild(servesTitle);
                  servesTitle.classList.add("card__servesTime__title");      


          let serves = document.createElement('p');
          let servesText= document.createTextNode(list[i].serves);
          serves.appendChild(servesText);
          servesDiv.appendChild(serves);
          serves.classList.add("card__serves");
          //create PrepTime SECTION
              let timeDiv = document.createElement('div');
              cardFooter.appendChild(timeDiv);
              timeDiv.classList.add("card__footer__time");

                 //create the title
                 let timeTitle = document.createElement('h3');
                 // add text
                 timeTitle.innerText = 'Preparation Time  : ';
                 // grab target element reference
                 timeDiv.appendChild(timeTitle);
                 timeTitle.classList.add("card__prepTime__title");  

          let preparationTime = document.createElement('p');
          let preparationTimeText= document.createTextNode(list[i].preparationTime);
          preparationTime.appendChild(preparationTimeText);
          timeDiv.appendChild(preparationTime);
          preparationTime.classList.add("card__prepTime");

        
      }
}  
  


//create var for my button
var recipeButton= document.querySelectorAll('.card__image__button');
//creates nodeList for the cards to expand
var card = document.querySelectorAll('.card');
//creates nodeList for the text areas
var cardText = document.querySelectorAll('.card__content');
//creates variable for the specific text area
//next puts the nodeList of .card-text into an array and hides them all
//finally removes class hide on the targeted .card-text
function showHide(){
    var target = this.querySelector('.card__content');
    [].forEach.call(cardText,function(x)
      {x.classList.add('card__content');
    });
    target.classList.remove('card__content');
}
//creates an array of card, runs through it, and adds an eventListener to each, on click it executes showHide()
[].forEach.call(card, function(e){e.addEventListener('click',showHide,false);});




