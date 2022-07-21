
// COLLECTION OF OBJECTS == RECIPES
const collectionRecipe = [
 //Object 1
    {   
// faut-il le mettre??      id: "1",
      name: "Good Old Fashioned Pancakes",
      category: "Breakfast",
      diet: "Vegetarian",
      photo: 'assests/pancakes.jpeg',
      serves: 8,
      preparationTime: "20 minutes",
      ingredients: [
        "1 ½ cups all-purpose flour",
        "3 ½ teaspoons baking powder",
        "¼ teaspoon salt, or more to taste",
        "1 tablespoon white sugar",
        "1 ¼ cups milk",
        "1 egg",
        "3 tablespoons butter, melted",
        ],
      directions: [
        "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
        "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
      ],
    },
//Object 2
    {
        name: "French Toast ",
        category: "Breakfast",
        diet: "Vegetarian",
        photo: 'assests/pain_perdu.jpeg',
        serves: 3,
        preparationTime: "15 minutes",
        ingredients: [
            "⅔ cup milk",
            "2 large eggs",
            "1 teaspoon vanilla extract (Optional)",
            "¼ teaspoon ground cinnamon (Optional)",
            "salt to taste",
            "6 thick slices bread",
            "1 tablespoon unsalted butter",
        ],
        directions: [
            "Whisk milk, eggs, vanilla, cinnamon, and salt together in a shallow bowl.",
            "Lightly butter a griddle and heat over medium-high heat.",
            "Dunk bread in the egg mixture, soaking both sides. Transfer to the hot skillet and cook until golden, 3 to 4 minutes per side. Serve hot.",   
        ],
      },
//Object 3
      {
        name: "Salmon Poke Bowl",
        category: "Lunch",
        diet: "Classic",
        photo: 'assests/salmon_poke.jpeg',
        serves: 2,
        preparationTime: "30 minutes",
        ingredients: [
            "½ cup rice becomes approx. 1 cup cooked",
            "8 oz salmon sushi-grade – this is very important!",
            "2 Tbsp. soy sauce",
            "1 Tbsp. rice vinegar",
            "1 Tbsp. sesame oil",
            "¼ tsp. brown sugar",
            "½ avocado",
            "½ mango",
            "¼ cup edamame cooked",
            "½ tsp. sesame seeds toasted white or black",
        ],
        directions: [
            "Cook rice according to package or recipe directions, and set aside when ready.",
            "While the rice is cooking, trim any skin and brown flesh from sushi-grade salmon. Dice into bite-size pieces. Then, mix together soy sauce, rice wine vinegar, sesame oil, and brown sugar, and toss the diced salmon in the mixture.",
            "Peel and dice avocado and mango.",
            "Split the cooked rice into two separate bowls. Top with half of the avocado, mango, and edamame to one side of the bowl. Then, place the marinated salmon on the other side.",
            "Hold back most of the marinade, but adding a little to the rice gives extra flavor.",
            "Sprinkle toasted sesame seeds over the top, serve, and enjoy!",
        ],
      },
//Object 4
      {
      name: "Italian Peppers and Chickpeas",
      category: "Lunch",
      diet: "Vegan",
      photo: 'assests/chickpeas.jpeg',
      serves: 6,
      preparationTime: "30 minutes",
      ingredients: [
        "2 tablespoons olive oil or about ⅓ cup broth or water",
        "1 yellow onion halved and sliced",
        "2 cloves garlic minced",
        "2 carrots peeled and chopped",
        "3 sweet bell peppers in a variety of colors seeded and sliced",
        "1 tablespoon Herbs de Provence or Italian seasoning",
        "2 cans (15 ounces each) chickpeas drained and rinsed",
        "1 can (14.5 ounces) canned diced tomatoes",
        "1 ½ cups low-sodium vegetable broth",
        "1 can (15 ounces) tomato sauce optional, if you like it extra saucy",
        "1 tablespoon balsamic vinegar",
      ],
      directions: [
        "Heat the oil (or broth or water) in a large deep skillet over medium heat.",
        "Add the onion and sauté 4 to 5 minutes, until soft and translucent.",
        "Add the garlic, carrots, peppers, and Herbs de Provence, and sauté 2 to 3 minutes to start to release the flavors.",
        "Add the chickpeas, diced tomatoes, vegetable broth, and tomato sauce, if using.",
        "Increase heat to bring mixture to a simmer, then decrease heat to medium-low and simmer 15 minutes until vegetables are softened, but still have a bite.",
        "Add the balsamic vinegar and stir to combine.",
        "Serve with grains or noodles of choice and/or some crusty bread.",
      ],
    },
//Object 5
    {
    name: "Spaghetti Carbonara",
    category: "Diner",
    diet: "Classic",
    photo: 'assests/carbo.jpeg',
    serves: 4,
    preparationTime: "30",
    ingredients: [
        "500g spaghetti",
        "4 eggs",
        "1 tsp black pepper",
        "3 tsp Pecorino Romano, plus extra, for serving",
        "10ml single cream, optional",
        "1 tbsp extra-virgin olive oil",
        "3 slices pancetta",
        ],
    directions:[
        "Boil the spaghetti in salted water until it is al dente. Drain and set aside.",
        "Beat the eggs. Add the black pepper and cheese to the beaten eggs. Set aside. Add the cream to this mixture, if desired, for a creamier dish.",
        "Put the oil in a saucepan with the pancetta, and saute for 5 minutes. Add the spaghetti into the pan and saute for another 3 minutes.",
        "Turn off the flame (this is important) and add the egg and cheese mixture to the pasta and mix.",
        "Serve with additional Pecorino Romano on top.",
        ],
    },
//Object 6
  {
    name: "Chicken Fajitas",
    category: "Diner",
    diet: "Classic",
    photo: 'assests/fajita.jpeg',
    serves: 6,
    preparationTime: "30 minutes",
    ingredients: [
        "3 boneless skinless chicken breasts",
        "1 onion, thinly sliced",
        "3 bell peppers , thinly sliced",
        "2 tablespoons olive oil",
        "1/2 lime",
        "mix spices: chili powder, ground cumin, grarlic powder, parprika, oregano, salt & pepper.",
        "tortillas",
        "sour cream",
        "avocado",
    ],
    directions:[
        "Add the fajitas seasoning ingredients to a small mixing bowl and stir together.",
        "Generously sprinkle the fajita seasoning on both sides of the chicken and use your fingers to press it into the chicken.",
        "Heat the oil in a large skillet over medium heat. Sear the chicken breasts for about 7-8 minutes on each side.",
        "While your chicken is cooking, cut the bell peppers and onion into thin slices.",
        "Once the chicken has finished cooking, remove it to a plate and let it rest for a couple of minutes. Add the bell peppers and onion to the same skillet over medium heat and saute for 4-5 minutes, stirring frequently.",
        "When the bell peppers are just about done sauteing, slice the chicken breasts into strips.",
    "Add the chicken back into the skillet, add a squeeze of fresh lime juice and stir everything together.",
    "Serve immediately with tortillas and extra toppings such as sour cream, pico de gallo and guacamole.",
    ],
    },
//Object 7
  {
    name: "2-Ingredients Ice Cream",
    category: "Dessert",
    diet: "vegetarian",
    photo: 'assests/ice_Cream.jpeg',
    serves: 3,
    preparationTime: "20 minutes",
    ingredients: [
        "2 cups (16oz/450ml ) heavy whipping cream (cold)",
        "14 ounces (1 Can/ 400ml) sweetened condensed milk (fat-free or regular, and cold)",
        "1 teaspoon Vanilla Extract (optional)",        
    ],
    directions:[
        "Place sweetened condensed milk in the fridge to keep cold.",
        "Using a hand or stand mixer fitted with a whisk attachment, whip the cold cream on medium/high speed until soft peaks form.",
        "Turn off the machine and pour the cold condensed milk into the whipped cream.",
        "Turn the speed up to high and whisk until the mixture is thick and stiff peaks form. Turn off the machine and stir in vanilla extract (optional).",
    ],
    },
//Object 8
  {
    name: "Chocolate mousse",
    category: "Dessert",
    diet: "vegetarian",
    photo: 'assests/mousse.jpeg',
    serves: 6,
    preparationTime: "90 minutes",
    ingredients: [
        "300g Baking Dark Chocolate, roughly chopped",
        "3 eggs, at room temperature",
        "55g caster sugar",
        "10.00 gm good-quality cocoa powder, sifted",
        "300ml thickened cream, plus extra whipped cream to serve",
        "Grated chocolate, to serve",
    ],
    directions:[
        "Place the chocolate in a heatproof bowl over a pan of gently simmering water (don't let the bowl touch the water). Stir until melted. Remove bowl from heat and set aside to cool slightly.",

        "Place eggs and sugar in a large bowl and beat with electric beaters for 5 minutes, or until mixture is pale, thick and doubled in volume. Fold in cocoa powder and cooled chocolate until combined.",

        "In a separate bowl, whip cream until thickened (be careful not to over-beat). Use a large metal spoon to carefully fold the cream into the chocolate mixture, trying to keep the mixture as light as possible.", 
        
        "Spoon into 6 serving glasses and chill in fridge for at least 1 hour. Remove from fridge 15 minutes before serving, then top with extra whipped cream and grated chocolate to serve.",
    ],
    },
//Object 9
  {
    name: "Mango Smoothie with Spinach and Banana",
    category: "Snack",
    diet: "vegan",
    photo: 'assests/smoothis.jpeg',
    serves: 1,
    preparationTime: "5 minutes",
    equipment:"Blender",
    ingredients: [
        "1 1/2 cups frozen mango pieces about 10 ounces",
        "1 ripe banana cut into chunks",
        "1 cup packed baby spinach leaves",
        "3/4 cup  unsweetened almond milk",
    ],
    directions:[
        "Place all of the ingredients in your blender.",
        "Blend until smooth. Enjoy immediately.",
    ],
    },
//Object 10  
  {
    name: "Soft Oatmeal Cookies",
    category: "Snack",
    diet: "vegetarien",
    photo: 'assests/cookie.jpeg',
    serves: 12,
    preparationTime: "120 minutes",
    ingredients: [
        "1 cup butter, softened",
        "1 cup packed brown sugar",
        "2 eggs",
        "1 teaspoon vanilla extract",
        "2 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1 teaspoon salt",
        "1 ½ teaspoons ground cinnamon",
        "3 cups quick cooking oats",
        "1 cup white sugar",
    ],
    directions:[
        "In a medium bowl, cream together butter, white sugar, and brown sugar. Beat in eggs one at a time, then stir in vanilla. Combine flour, baking soda, salt, and cinnamon; stir into the creamed mixture. Mix in oats. Cover, and chill dough for at least one hour.",

        "Preheat the oven to 375 degrees F (190 degrees C). Grease cookie sheets. Roll the dough into walnut sized balls, and place 2 inches apart on cookie sheets. Flatten each cookie with a large fork dipped in sugar.",

        "Bake for 8 to 10 minutes in preheated oven. Allow cookies to cool on baking sheet for 5 minutes before transferring to a wire rack to cool completely.",
    ],
    },
  ];


function showName(list){

  let numberOfRecipe = list.length;
  let containerCard = document.querySelector('.main__content__recipe__cards');
  
  // Loop that creates a section and a paragraph for each element of the list
      for (let i = 0; i < numberOfRecipe; i++) {
  
      //adding new elements
        //CREATE THE INDIVIDUAL DIV OF MY CARDS
        let articleDiv = document.createElement('div');
        containerCard.appendChild(articleDiv);
        articleDiv.classList.add("card");

        //CREATE CARD HEADER OF MY CARD
          // CREATE THE SECTION
          let cardHeader= document.createElement("section");
          articleDiv.appendChild(cardHeader);
          cardHeader.classList.add("card__header");

          //create ARTICLE Name
          let cardName= document.createElement('article');
          cardHeader.appendChild(cardName);
          // Create name element
          let name = document.createElement('h2');
          let nameText= document.createTextNode(list[i].name);
          name.appendChild(nameText);
          cardName.appendChild(name);
          //Create category paragraph
          let category = document.createElement('p');
          let categoryText= document.createTextNode(list[i].category);
          category.appendChild(categoryText);
          cardName.appendChild(category);
          //Create diet paragraph
          let diet = document.createElement('p');
          let dietText= document.createTextNode(list[i].diet);
          diet.appendChild(dietText);
          cardName.appendChild(diet);
          //Create image 
          let img = document.createElement('img');
          img.src=(list[i].photo);
          cardHeader.appendChild(img);
      
        //create ARTICLE ingredients

        //create section card_content
          let cardContent = document.createElement('section');
          articleDiv.appendChild(cardContent);
          cardContent.classList.add("card__content");
          //create Ingredients article
          let ingredients = document.createElement('p');
          let ingredientsText= document.createTextNode(list[i].ingredients);
          diet.appendChild(ingredientsText);
          cardContent.appendChild(ingredients);

          let directions = document.createElement('p');
          let directionsText= document.createTextNode(list[i].directions);
          diet.appendChild(directionsText);
          cardContent.appendChild(directions);

        //create section card_footer
          let cardFooter = document.createElement('section');
          articleDiv.appendChild(cardFooter);
          cardFooter.classList.add("card__footer");
      }
}  

showName(collectionRecipe);

