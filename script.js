const categories = {

    // Places for "normal" mode
    category1: [
        'schools',
        'parks',
        'stadiums',
        'arenas',
        'theatres',
        'kitchens',
        'living rooms',
        'recreational centers',
        'arcades',
        'libraries',
        'restaurants',
        'bookstores',
        'coffee shops',
        'shopping malls',
        'town squares',
        'museums',
        'art galleries',
        'local markets',
        'grocery stores',
        'fitness centers',
        'amphitheaters',
        'sports fields',
        'gardens',
        'picnic areas',
        'outdoor plazas',
        'bakeries',
        'public transportation stops',
        'neighborhoods',
        'cities'
      ],
      
    // Characteristics of places for "normal" mode
    category2: [
        'enhance accessibility and inclusivity',
        'promote spontaneous socializing',
        'promote community engagement',
        'create an inviting atmosphere',
        'create an energizing atmosphere',
        'promote sustainability practices',
        'enhance educational experiences',
        'foster a sense of community',
        'make it more engaging',
        'create a more comfortable atmosphere',
        'support well-being',
        'be more interactive',
        'be more social',
        'be more fun',
        'be more connected to nature',
        'facilitate making new connections',
        'facilitate new friendships'
      ],
      
      // Audience for "normal" mode
      category3: [
        'children',
        'young adults',
        'families',
        'elderly people',
        'young professionals',
        'single adults',
        'professionals',
        'teenagers',
        'local residents',
        'parents',
        'single parents',
        'couples'
      ],

    // Places for "creative" mode
    category4: [
        'submarines',
        'space colonies',
        'spaceships',
        'underground tunnels',
        'beaches',
        'ice skating rinks',
        'skate parks',
        'theatres',
        'museums',
        'campsites',
        'libraries',
        'arcades',
        'fitness centers',
        'coffee shops',
        'stadiums',
        'bookstores',
        'floating cities',
        'hidden caves',
        'observatories',
        'floating islands',
        'house boats',
        'virtual reality parks',
        'suborbital hotels',
        'microgravity amusement parks',
        'space stations',
        'climbing gyms',
        'restaurants',
        'art galleries',
        'airports',
        'cruise ships',
        'deserts',
        'skyscrapers',
        'cities',
        'treehouses',
        'underwater cities'
      ],

      // Characteristics of places for "creative" mode
      category5: [
        'promote spontaneous socializing',
        'create an inviting atmosphere',
        'create an energizing atmosphere',
        'foster a sense of community',
        'be more social',
        'be more fun',
        'be more groovy',
        'be more mysterious',
        'be more scary',
        'be more relaxing',
        'facilitate new friendships',
        'be more retro',
        'be more intimate',
        'be more elegant',
        'be more hip',
        'be more nostalgic',
        'be more cosmopolitan',
        'be more homey',
        'be more artsy',
        'be more futuristic',
        'be more whimsical',
        'be more chic',
        'be more glamorous',
        'be more festive',
        'incite curiosity',
        'encourage conversation',
        'stimulate imagination',
        'cultivates networking',
        'spark creativity',
        'be more funky',
        'be more entertaining',
        'instill a sense of anxiety',
        'instill a sense of happiness',
        'instill a sense of sadness',
        'instill a sense of hope'

      ],

      // Audience for "creative" mode
      category6: [
        'vampires',
        'astronauts',
        'chefs',
        'royalty',
        'fairies',
        'artists',
        'professional athletes',
        'animal enthusiasts',
        'plant enthusiasts',
        'time travelers',
        'aliens',
        'gnomes',
        'spies',
        'assassins',
        'animals',
        'superheroes',
        'wizards',
        'mermaids / mermen',
        'explorers',
        'cyborgs',
        'detectives',
        'jesters',
        'pilots',
        'geneticists',
        'bounty hunters',
        'ninjas',
        'alchemists',
        'sirens',
        'inventors',
        'druids',
        'archaeologists',
        'mythical beasts trainers',
        'pirates',
        'ghost hunters',
        'celestial guardians',
        'magicians',
        'scientists',
        'diplomats',
        'dancers',
        'engineers',
        'cartographers',
        'cowboys',
        'divers',
        'sailors',
        'villians',
        'monsters',
        'elves',
        'zombies',
        'werewolves',
        'centaurs',
        'philosophers',
        'sorcerers',
        'knights',
        'artisans'
      ]
      
}

// Image paths for all places

const wordToImage = {
    schools: 'images/schools.png',
    parks: 'images/parks.png',
    stadiums: 'images/stadiums.jpeg',
    arenas: 'images/arenas.jpeg',
    theatres: 'images/theatres.jpeg',
    kitchens: 'images/kitchens.jpeg',
    'living rooms':'images/living_rooms.jpeg',
    'recreational centers': 'images/recreational_centers.jpeg',
    arcades: 'images/arcades.jpeg',
    libraries: 'images/libraries.png',
    restaurants: 'images/restaurants.jpeg',
    bookstores: 'images/bookstores.jpeg',
    'coffee shops': 'images/coffee_shops.jpeg',
    'shopping malls': 'images/shopping_malls.jpeg',
    'town squares': 'images/town_squares.jpeg',
    museums: 'images/museums.jpeg',
    'art galleries': 'images/art_galleries.jpeg',
    'local markets': 'images/local_markets.jpeg',
    'grocery stores': 'images/grocery_stores.jpeg',
    'fitness centers': 'images/fitness_centers.jpeg',
    amphitheaters: 'images/amphitheaters.jpeg',
    'sports fields': 'images/sports_fields.jpeg',
    gardens: 'images/gardens.jpeg',
    'picnic areas': 'images/picnic_areas.jpeg',
    'outdoor plazas': 'images/outdoor_plazas.jpeg',
    bakeries: 'images/bakeries.jpeg',
    'public transportation stops': 'images/public_transportation_stops.jpeg',
    neighborhoods: 'images/neighborhoods.jpeg',
    submarines: 'images/submarines.jpeg',
    'space colonies': 'images/space_colonies.jpeg',
    spaceships: 'images/spaceships.jpeg',
    'underground tunnels': 'images/underground_tunnels.jpeg',
    beaches: 'images/beaches.jpeg',
    'ice skating rinks': 'images/ice_skating_rinks.jpeg',
    'skate parks': 'images/skate_parks.jpeg',
    campsites: 'images/campsites.jpeg',
    'floating cities': 'images/floating_cities.jpeg',
    'hidden caves': 'images/hidden_caves.jpeg',
    observatories: 'images/observatories.jpeg',
    'floating islands': 'images/floating_islands.jpeg',
    'house boats': 'images/house_boats.jpeg',
    'virtual reality parks': 'images/virtual_reality_parks.jpeg',
    'suborbital hotels': 'images/suborbital_hotels.jpeg',
    'microgravity amusement parks': 'images/microgravity_amusement_parks.jpeg',
    'space stations': 'images/space_stations.jpeg',
    'climbing gyms': 'images/climbing_gyms.jpeg',
    'art galleries': 'images/art_galleries.jpeg',
    airports: 'images/airports.jpeg',
    'cruise ships': 'images/cruise_ships.jpeg',
    deserts: 'images/deserts.jpeg',
    skyscrapers: 'images/skyscrapers.jpeg',
    cities: 'images/cities.jpeg',
    treehouses: 'images/treehouses.jpeg',
    'underwater cities': 'images/underwater_cities.jpeg'
};


// Function to generate a random word from a category
function generateWord(category) {
    const randomIndex = Math.floor(Math.random() * categories[category].length);
    const randomWord = categories[category][randomIndex];

    return randomWord;
}

// Function to generate random words from selected categories and update the sentence
function generateAllCategories() {

    const sentenceParagraph = document.getElementById('sentence');
    // Go crazy = switching to creative mode
    const goCrazyCheckbox = document.getElementById('goCrazyCheckbox');
    const imageElement = document.getElementById('placeImage');

    // Choose categories based on the checkbox state
    const selectedCategories = goCrazyCheckbox.checked ? ['category4', 'category5', 'category6'] : ['category1', 'category2', 'category3'];

    // Generate words from selected categories
    const place = generateWord(selectedCategories[0]);
    const characteristic = generateWord(selectedCategories[1]);
    const audience = generateWord(selectedCategories[2]);

    sentenceParagraph.innerText = '';
    sentenceParagraph.style.opacity = 0;

    // Set the content of the sentence paragraph
    sentenceParagraph.innerText = `how can ${place} be redesigned to ${characteristic}, geared towards ${audience}?`;

    if (wordToImage[place]) {
        imageElement.src = wordToImage[place];
        imageElement.alt = `Image of ${place}`;
        imageElement.style.visibility = 'visible';

    } else {

        // If no image is found for the word, reset the image source
        imageElement.src = '';
        imageElement.alt = '';
        imageElement.style.visibility = 'hidden';
    }
    typewriterAnimation(sentenceParagraph);

    // Function to handle the typewriter-style animation
    function typewriterAnimation(element) {

        element.style.opacity = 1; // Make the element fully visible

        // Get the text content
        const text = element.innerText;

        // Clear the existing content
        element.innerHTML = '';

        // Iterate through each character in the text and append it with a delay
        for (let i = 0; i < text.length; i++) {

            // If the character is a space, add a non-breaking space (&nbsp;) to preserve spaces
            const char = text[i] === ' ' ? '&nbsp;' : text[i];

            setTimeout(() => {
                element.innerHTML += char;
            }, i * 12);
        }
        document.getElementById('generateButton').disabled = false;
    }
}


function updateColors() {
    const goCrazyCheckbox = document.getElementById('goCrazyCheckbox');
    const bodyElement = document.body;

    if (goCrazyCheckbox.checked) {
        bodyElement.classList.add('goCrazy');
    } else {
        bodyElement.classList.remove('goCrazy');
    }
}

document.getElementById('goCrazyCheckbox').addEventListener('change', updateColors);



