//VARIABLES
let articleDiv;
let cardImageBox;
let image;
let openButton;
let cardHeader;
let cardName;
let recipeName;
let cardDescription;
let categoryRecipe;
let dietRecipe;
let cardContent;
let ingredientsDiv
let hr
let ingredientsTitle
let ingredients
let directionsDiv
let directionsTitle
let directions


// FETCHING the Collection of recipes
const fetchRecipes = async (url) =>{

    try{
        const response = await fetch(url);
        const result = await response.json()
        console.log(result)

        getCards(result)
        }

    catch(e){
        alert('error')
        console.error(e)
    }
  
}

fetchRecipes("collection.json")

// CREATE FUNCTION TO GENERATE THE CARDS
function getCards(list){

  //Variables for the function
  let numberOfRecipe = list.length;
  let containerCard = document.querySelector('.main__content__recipe__cards');
  console.log(articleDiv)
  
  
  // Loop that creates a section and a paragraph for each element of the list
      for (let i = 0; i < numberOfRecipe; i++) {
        console.log(list[i].category)

//Create card div and place it in the main container HTML
      createCard(containerCard, list[i].id)

  //adding new elements from COLLECTION
          createCardImageBox()
          createCardImage(list[i].photo)
          createButton()
          createCardHeader()
          setName()
          setNameElement(list[i].name)
          createDivDescription()
          setCategory(list[i].category)
          setDiet(list[i].diet);
          createContentSection()
          setIngredients()
          createHR(ingredientsDiv)
          setTitleH3(ingredientsTitle, ingredientsDiv, "card__ingredients__title")
          createIngredientsList()

          console.log(list[i].ingredients)
          setListItems(list[i].ingredients, ingredients)
          setDirections()
          setTitleH3(directionsTitle, directionsDiv, "card__directions__title")
          createDirectionsList()

          setListItems(list[i].directions, directions)

                      //CREATE A LIST OF INGREDIENTS ITEMS THROUGH A LOOP
                        // let listOfIngredients= list[i].ingredients;

                        // for (const j of listOfIngredients) {
                        //   let listItemIngredient = document.createElement('li');

                        //   //add a label for the check box
                        //   let labelCheck= document.createElement("label");
                        //   listItemIngredient.appendChild(labelCheck);

                        //   //add a input and checkbox style to each li
                        //   let inputCheck = document.createElement("input");
                        //   listItemIngredient.appendChild(inputCheck);
                        //   inputCheck.setAttribute("type", "checkbox");

                        //   listItemIngredient.appendChild(document.createTextNode(j))
                        //   ingredients.appendChild(listItemIngredient);
                        //   listItemIngredient.classList.add("card__ingredients__list__items");
                        // }

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
  

//FUNCTION to add new elements from COLLECTION
  //CREATE THE INDIVIDUAL DIV OF MY CARDS
const createCard = (container, listId) =>{
    articleDiv = document.createElement('div');
    container.appendChild(articleDiv);
    articleDiv.classList.add("card");
    articleDiv.classList.add(listId);
    console.log(articleDiv)
}

  //CREATE DIV FOR IMAGE AN TEXT
const createCardImageBox = () =>{
    cardImageBox = document.createElement("div");
    articleDiv.appendChild(cardImageBox);
    cardImageBox.classList.add("card__image__box")
}

 //Create image  
const createCardImage = (imgSrc) =>{
    image = document.createElement('img');
    image.src=imgSrc;
    cardImageBox.appendChild(image);
    image.classList.add("card__image");
}

  //Create the button
  const createButton = () =>{
    openButton= document.createElement('button');
    openButton.innerText= 'Click here for full recipe';
    cardImageBox.appendChild(openButton);
    openButton.classList.add("card__image__button");
}
  
  // CREATE THE SECTION
const createCardHeader = () =>{
    cardHeader= document.createElement("section");
    articleDiv.appendChild(cardHeader);
    cardHeader.classList.add("card__header");
}

  // Create name element
const setName = () =>{
    cardName= document.createElement('article');
    cardHeader.appendChild(cardName);
    cardName.classList.add("card__title__block");

}

const setNameElement = (title) =>{
    recipeName = document.createElement('h2');
    let nameText= document.createTextNode(title);
    recipeName.appendChild(nameText);
    cardName.appendChild(recipeName);
    recipeName.classList.add("card__title");
}

  //create Div for category & diet
const createDivDescription = () =>{
  cardDescription = document.createElement('div');
  cardName.appendChild(cardDescription);
  cardDescription.classList.add("card__content__description");
}

  // SET category to each cards
const setCategory = (category) =>{
  categoryRecipe = document.createElement('p');
  categoryRecipe.innerHTML = category;
  cardDescription.appendChild(categoryRecipe);
  categoryRecipe.classList.add("card__category");
  categoryRecipe.classList.add(category);
}

  // SET diet to each cards
const setDiet = (diet) =>{
  let dietRecipe = document.createElement('p');
  dietRecipe.innerHTML= diet ;
  cardDescription.appendChild(dietRecipe);
  dietRecipe.classList.add("card__diet");
  dietRecipe.classList.add(diet)
}

  //create SECTION card_content
const createContentSection = () =>{
  cardContent = document.createElement('section');
  cardContent.classList.add("card__content");
  articleDiv.appendChild(cardContent);
}

  //create Ingredients SECTION
const setIngredients = () =>{
  ingredientsDiv = document.createElement('div');
  cardContent.appendChild(ingredientsDiv);
  ingredientsDiv.classList.add("card__content__ingredients");
}

  //CREATING OF A HORIZONTAL LINE
const createHR = (parent) =>{
  let hr = document.createElement('hr');
  parent.appendChild(hr);
  return hr;
}

  //create the ingredients List
const createIngredientsList = () =>{
  ingredients = document.createElement('ul');          
  ingredientsDiv.appendChild(ingredients);
  ingredients.classList.add("card__ingredients__list");
}

//create Directions SECTION
const setDirections = () =>{
  directionsDiv = document.createElement('div');
  cardContent.appendChild(directionsDiv);
  directionsDiv.classList.add("card__content__directions");

}

  //create the ingredients List
const createDirectionsList = () =>{
directions = document.createElement('ul');
directionsDiv.appendChild(directions);
directions.classList.add("card__directions__list");
directions.setAttribute("type", "checkbox");
}


  // CREATE LIST ITEMS
const setListItems = (array, position) =>{
    array.map(element => {
    const listItem = document.createElement('li')
    listItem.innerHTML= element;
    position.appendChild(listItem)

  })
}

  // Create H3 titles
const setTitleH3 = (x, y , classP) =>{
  x = document.createElement('h3');
  x.innerText = 'Directions :';
  y.appendChild(x);
  x.classList.add(classP);
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




