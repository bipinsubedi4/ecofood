// Global variables
let ingredients = [];
let inventory = [];
let marketplaceListings = [];

// User subscription status (in a real app, this would come from authentication)
let userSubscription = 'free'; // 'free' or 'premium'

// Enhanced eco-friendly recipes database with detailed ingredient information
const ecoRecipes = {
    'chicken,rice,vegetables': {
        name: 'Eco-Friendly Chicken & Vegetable Rice Bowl',
        description: 'A sustainable one-pot meal that minimizes waste and maximizes nutrition.',
        ingredients: [
            {
                name: 'chicken breast',
                amount: '500g',
                perServing: '125g',
                tags: ['protein', 'gluten-free'],
                optional: false
            },
            {
                name: 'brown rice',
                amount: '2 cups',
                perServing: '0.5 cups',
                tags: ['grain', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'mixed vegetables',
                amount: '400g',
                perServing: '100g',
                tags: ['vegetable', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'garlic',
                amount: '3 cloves',
                perServing: '0.75 cloves',
                tags: ['seasoning', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'ginger',
                amount: '1 tbsp',
                perServing: '0.25 tbsp',
                tags: ['seasoning', 'vegan', 'gluten-free'],
                optional: true
            },
            {
                name: 'soy sauce',
                amount: '3 tbsp',
                perServing: '0.75 tbsp',
                tags: ['seasoning', 'vegan'],
                optional: false
            }
        ],
        instructions: [
            'Cook brown rice in a rice cooker or pot with minimal water to reduce energy consumption.',
            'Cut chicken into small pieces to reduce cooking time and energy usage.',
            'Stir-fry chicken with garlic and ginger in a single pan.',
            'Add vegetables and cook until tender-crisp to preserve nutrients.',
            'Mix in cooked rice and season with soy sauce.',
            'Serve immediately to retain maximum nutritional value.'
        ],
        ecoTips: [
            'Use locally sourced chicken and vegetables when possible',
            'Save vegetable scraps for composting',
            'Cook rice in batches and store leftovers for future meals'
        ],
        cookingTime: '25 minutes',
        servings: 4,
        wasteReduction: '85%',
        nutrition: {
            calories: 420,
            protein: '32g',
            carbs: '45g',
            fat: '12g',
            fiber: '4g'
        }
    },
    'tomatoes,pasta,herbs': {
        name: 'Garden Fresh Pasta Primavera',
        description: 'A plant-forward pasta dish that celebrates seasonal vegetables.',
        ingredients: [
            {
                name: 'whole wheat pasta',
                amount: '300g',
                perServing: '100g',
                tags: ['grain', 'vegan'],
                optional: false
            },
            {
                name: 'fresh tomatoes',
                amount: '500g',
                perServing: '167g',
                tags: ['vegetable', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'fresh basil',
                amount: '1/4 cup',
                perServing: '1 tbsp',
                tags: ['herb', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'oregano',
                amount: '1 tsp',
                perServing: '1/3 tsp',
                tags: ['herb', 'vegan', 'gluten-free'],
                optional: true
            },
            {
                name: 'garlic',
                amount: '3 cloves',
                perServing: '1 clove',
                tags: ['seasoning', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'olive oil',
                amount: '3 tbsp',
                perServing: '1 tbsp',
                tags: ['oil', 'vegan', 'gluten-free'],
                optional: false
            }
        ],
        instructions: [
            'Cook pasta according to package directions, saving pasta water.',
            'Sauté garlic in olive oil until fragrant.',
            'Add diced tomatoes and cook until they break down naturally.',
            'Toss pasta with tomato mixture, adding pasta water as needed.',
            'Finish with fresh herbs and a drizzle of olive oil.',
            'Serve with grated cheese if desired.'
        ],
        ecoTips: [
            'Use pasta water to water plants after it cools',
            'Grow your own herbs on a windowsill',
            'Choose whole wheat pasta for better nutrition and sustainability'
        ],
        cookingTime: '20 minutes',
        servings: 3,
        wasteReduction: '90%',
        nutrition: {
            calories: 385,
            protein: '12g',
            carbs: '68g',
            fat: '8g',
            fiber: '6g'
        }
    },
    'eggs,vegetables,cheese': {
        name: 'Zero-Waste Vegetable Frittata',
        description: 'Perfect for using up leftover vegetables and reducing food waste.',
        ingredients: [
            {
                name: 'eggs',
                amount: '8 large',
                perServing: '2 eggs',
                tags: ['protein', 'gluten-free'],
                optional: false
            },
            {
                name: 'mixed vegetables',
                amount: '300g',
                perServing: '75g',
                tags: ['vegetable', 'vegan', 'gluten-free'],
                optional: false
            },
            {
                name: 'cheese (grated)',
                amount: '100g',
                perServing: '25g',
                tags: ['dairy', 'gluten-free'],
                optional: true
            },
            {
                name: 'fresh herbs',
                amount: '2 tbsp',
                perServing: '0.5 tbsp',
                tags: ['herb', 'vegan', 'gluten-free'],
                optional: true
            },
            {
                name: 'olive oil',
                amount: '2 tbsp',
                perServing: '0.5 tbsp',
                tags: ['oil', 'vegan', 'gluten-free'],
                optional: false
            }
        ],
        instructions: [
            'Preheat oven to 375°F (190°C).',
            'Sauté any hard vegetables first in an oven-safe pan.',
            'Beat eggs and pour over vegetables.',
            'Add cheese and herbs on top.',
            'Cook on stovetop for 3-4 minutes, then transfer to oven.',
            'Bake for 15-20 minutes until set and golden.'
        ],
        ecoTips: [
            'Use any leftover vegetables from your fridge',
            'Save eggshells for composting',
            'This recipe works great for meal prep'
        ],
        cookingTime: '30 minutes',
        servings: 4,
        wasteReduction: '95%',
        nutrition: {
            calories: 245,
            protein: '18g',
            carbs: '8g',
            fat: '16g',
            fiber: '3g'
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add enter key support for ingredient input
    const ingredientInput = document.getElementById('ingredientInput');
    if (ingredientInput) {
        ingredientInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addIngredient();
            }
        });
    }
});

// Function to start recipe generation (called from hero button)
function startRecipeGeneration() {
    const pantrySection = document.getElementById('pantry');
    if (pantrySection) {
        pantrySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on the ingredient input
        setTimeout(() => {
            const ingredientInput = document.getElementById('ingredientInput');
            if (ingredientInput) {
                ingredientInput.focus();
            }
        }, 1000);
    }
}

// Function to add ingredient
function addIngredient() {
    const input = document.getElementById('ingredientInput');
    const ingredient = input.value.trim().toLowerCase();
    
    if (ingredient && !ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
        updateIngredientsList();
        input.value = '';
        updateGenerateButton();
    }
}

// Function to remove ingredient
function removeIngredient(ingredient) {
    ingredients = ingredients.filter(item => item !== ingredient);
    updateIngredientsList();
    updateGenerateButton();
}

// Function to update ingredients list display
function updateIngredientsList() {
    const list = document.getElementById('ingredientsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    ingredients.forEach(ingredient => {
        const tag = document.createElement('span');
        tag.className = 'ingredient-tag';
        tag.innerHTML = `
            ${ingredient}
            <span class="remove" onclick="removeIngredient('${ingredient}')">&times;</span>
        `;
        list.appendChild(tag);
    });
}

// Function to update generate button state
function updateGenerateButton() {
    const button = document.getElementById('generateBtn');
    if (!button) return;
    
    button.disabled = ingredients.length === 0;
    button.textContent = ingredients.length === 0 
        ? 'Add ingredients to generate recipe' 
        : `Generate Eco-Friendly Recipe (${ingredients.length} ingredients)`;
}

// Function to generate recipe
function generateRecipe() {
    if (ingredients.length === 0) return;
    
    const output = document.getElementById('recipeOutput');
    if (!output) return;
    
    // Get the number of servings
    const servingsInput = document.getElementById('servingsInput');
    const servings = servingsInput ? parseInt(servingsInput.value) || 4 : 4;
    
    // Show loading state
    output.innerHTML = `
        <h3>Generating Your Eco-Friendly Recipe...</h3>
        <div style="display: flex; align-items: center; gap: 1rem; margin: 2rem 0;">
            <div style="width: 20px; height: 20px; border: 2px solid #4ade80; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p>Analyzing your ingredients for ${servings} ${servings === 1 ? 'person' : 'people'}...</p>
        </div>
    `;
    
    // Add CSS for loading animation
    if (!document.getElementById('loadingStyles')) {
        const style = document.createElement('style');
        style.id = 'loadingStyles';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Simulate API call delay
    setTimeout(() => {
        const recipe = findBestRecipe(ingredients, servings);
        displayRecipe(recipe, output);
    }, 2000);
}

// Function to find the best matching recipe
function findBestRecipe(userIngredients, servings = 4) {
    let bestMatch = null;
    let bestScore = 0;
    
    // Check predefined recipes first
    for (const [key, recipe] of Object.entries(ecoRecipes)) {
        const recipeIngredients = key.split(',');
        const matchScore = calculateMatchScore(userIngredients, recipeIngredients);
        
        if (matchScore > bestScore) {
            bestScore = matchScore;
            bestMatch = { ...recipe, servings: servings };
        }
    }
    
    // If no good match found, generate a custom recipe
    if (bestScore < 0.3) {
        return generateCustomRecipe(userIngredients, servings);
    }
    
    return bestMatch;
}

// Function to calculate match score between user ingredients and recipe
function calculateMatchScore(userIngredients, recipeIngredients) {
    let matches = 0;
    
    recipeIngredients.forEach(recipeIng => {
        if (userIngredients.some(userIng => 
            userIng.includes(recipeIng) || recipeIng.includes(userIng)
        )) {
            matches++;
        }
    });
    
    return matches / recipeIngredients.length;
}

// Function to generate custom recipe
function generateCustomRecipe(userIngredients, servings = 4) {
    const cookingMethods = ['sauté', 'roast', 'steam', 'stir-fry', 'grill'];
    const seasonings = ['garlic', 'herbs', 'lemon', 'olive oil', 'black pepper'];
    const method = cookingMethods[Math.floor(Math.random() * cookingMethods.length)];
    
    // Calculate cooking time based on servings
    const baseTime = 20;
    const cookingTime = servings <= 2 ? `${baseTime}-${baseTime + 5} minutes` :
                       servings <= 4 ? `${baseTime + 5}-${baseTime + 15} minutes` :
                       `${baseTime + 15}-${baseTime + 25} minutes`;
    
    return {
        name: `Custom Eco-Friendly ${userIngredients.join(' & ').replace(/\b\w/g, l => l.toUpperCase())} Dish`,
        description: `A sustainable recipe created specifically for your available ingredients, designed to minimize waste and maximize flavor for ${servings} ${servings === 1 ? 'person' : 'people'}.`,
        ingredients: [...userIngredients, ...seasonings.slice(0, 2)],
        instructions: [
            `Prepare all ingredients by washing and chopping as needed for ${servings} ${servings === 1 ? 'serving' : 'servings'}.`,
            `Heat a pan or oven to appropriate temperature for ${method}ing.`,
            `${method.charAt(0).toUpperCase() + method.slice(1)} your main ingredients until cooked through.`,
            `Season with ${seasonings.slice(0, 2).join(' and ')} to taste.`,
            `Serve immediately while hot and fresh.`,
            `Save any leftovers for tomorrow's meal to reduce waste.`
        ],
        ecoTips: [
            'Use all parts of vegetables when possible (stems, leaves, peels)',
            'Compost any unavoidable food scraps',
            'Store leftovers properly to extend their life',
            'Consider growing herbs at home for future cooking',
            servings > 4 ? 'Cooking for larger groups reduces per-person energy consumption' : 'Perfect portion size reduces food waste'
        ],
        cookingTime: cookingTime,
        servings: servings,
        wasteReduction: '80%'
    };
}

// Function to display recipe with enhanced ingredient information
function displayRecipe(recipe, output) {
    const servings = recipe.servings || 4;
    
    // Calculate ingredient amounts based on servings
    const ingredientsWithAmounts = recipe.ingredients.map(ing => {
        if (typeof ing === 'object' && ing.perServing) {
            const totalAmount = calculateIngredientAmount(ing.perServing, servings);
            return {
                ...ing,
                displayAmount: totalAmount
            };
        }
        return typeof ing === 'string' ? { name: ing, displayAmount: ing, tags: [] } : ing;
    });
    
    // Generate nutrition info if available
    const nutritionSection = recipe.nutrition ? `
        <div style="text-align: center; padding: 1rem; background-color: rgba(74, 222, 128, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem; color: #4ade80;">📊</div>
            <div style="font-size: 0.9rem; color: #a1a1aa;">Calories per serving</div>
            <div style="font-weight: bold;">${Math.round(recipe.nutrition.calories / recipe.servings * servings)}</div>
        </div>
    ` : '';
    
    output.innerHTML = `
        <h3>${recipe.name}</h3>
        <p style="color: #4ade80; margin-bottom: 1rem; font-style: italic;">${recipe.description}</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="text-align: center; padding: 1rem; background-color: rgba(74, 222, 128, 0.1); border-radius: 0.5rem;">
                <div style="font-size: 1.5rem; color: #4ade80;">⏱️</div>
                <div style="font-size: 0.9rem; color: #a1a1aa;">Cooking Time</div>
                <div style="font-weight: bold;">${recipe.cookingTime}</div>
            </div>
            <div style="text-align: center; padding: 1rem; background-color: rgba(74, 222, 128, 0.1); border-radius: 0.5rem;">
                <div style="font-size: 1.5rem; color: #4ade80;">👥</div>
                <div style="font-size: 0.9rem; color: #a1a1aa;">Servings</div>
                <div style="font-weight: bold;">${servings}</div>
            </div>
            <div style="text-align: center; padding: 1rem; background-color: rgba(74, 222, 128, 0.1); border-radius: 0.5rem;">
                <div style="font-size: 1.5rem; color: #4ade80;">♻️</div>
                <div style="font-size: 0.9rem; color: #a1a1aa;">Waste Reduction</div>
                <div style="font-weight: bold;">${recipe.wasteReduction}</div>
            </div>
            ${nutritionSection}
        </div>
        
        <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4 style="color: #ffffff; margin: 0;">Ingredients:</h4>
                ${userSubscription === 'premium' ? `
                    <button onclick="saveToShoppingList('${recipe.name}')" style="padding: 0.5rem 1rem; background-color: #4ade80; color: #0a0a0a; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#22c55e';" onmouseout="this.style.backgroundColor='#4ade80';">
                        🛒 Save to Shopping List
                    </button>
                ` : `
                    <div style="padding: 0.5rem 1rem; background-color: rgba(161, 161, 170, 0.2); color: #a1a1aa; border-radius: 0.5rem; font-size: 0.9rem;">
                        🔒 Shopping List (Premium Only)
                    </div>
                `}
            </div>
            <div style="background-color: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(74, 222, 128, 0.2);">
                ${ingredientsWithAmounts.map(ing => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid rgba(74, 222, 128, 0.1);">
                        <div style="flex: 1;">
                            <div style="color: #ffffff; font-weight: 600; margin-bottom: 0.25rem;">
                                ${ing.displayAmount || ing.name}
                                ${ing.optional ? '<span style="color: #a1a1aa; font-size: 0.8rem; margin-left: 0.5rem;">(optional)</span>' : ''}
                            </div>
                            ${ing.tags && ing.tags.length > 0 ? `
                                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                    ${ing.tags.map(tag => `
                                        <span style="background-color: ${getTagColor(tag)}; color: #0a0a0a; padding: 0.2rem 0.5rem; border-radius: 1rem; font-size: 0.7rem; font-weight: 600;">
                                            ${tag}
                                        </span>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                        ${userSubscription === 'premium' ? `
                            <button onclick="addToShoppingList('${ing.name}', '${ing.displayAmount || ing.name}')" style="padding: 0.25rem 0.5rem; background-color: transparent; color: #4ade80; border: 1px solid #4ade80; border-radius: 0.25rem; cursor: pointer; font-size: 0.8rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#4ade80'; this.style.color='#0a0a0a';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4ade80';">
                                + Add
                            </button>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
        
        ${recipe.nutrition ? `
            <div style="margin-bottom: 2rem;">
                <h4 style="color: #ffffff; margin-bottom: 1rem;">Nutrition Information (per serving):</h4>
                <div style="background-color: rgba(74, 222, 128, 0.1); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(74, 222, 128, 0.3);">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 1rem; text-align: center;">
                        <div>
                            <div style="color: #4ade80; font-weight: bold; font-size: 1.2rem;">${Math.round(recipe.nutrition.calories / recipe.servings * servings)}</div>
                            <div style="color: #a1a1aa; font-size: 0.9rem;">Calories</div>
                        </div>
                        <div>
                            <div style="color: #4ade80; font-weight: bold; font-size: 1.2rem;">${recipe.nutrition.protein}</div>
                            <div style="color: #a1a1aa; font-size: 0.9rem;">Protein</div>
                        </div>
                        <div>
                            <div style="color: #4ade80; font-weight: bold; font-size: 1.2rem;">${recipe.nutrition.carbs}</div>
                            <div style="color: #a1a1aa; font-size: 0.9rem;">Carbs</div>
                        </div>
                        <div>
                            <div style="color: #4ade80; font-weight: bold; font-size: 1.2rem;">${recipe.nutrition.fat}</div>
                            <div style="color: #a1a1aa; font-size: 0.9rem;">Fat</div>
                        </div>
                        <div>
                            <div style="color: #4ade80; font-weight: bold; font-size: 1.2rem;">${recipe.nutrition.fiber}</div>
                            <div style="color: #a1a1aa; font-size: 0.9rem;">Fiber</div>
                        </div>
                    </div>
                </div>
            </div>
        ` : ''}
        
        <div style="margin-bottom: 2rem;">
            <h4 style="color: #ffffff; margin-bottom: 1rem;">Instructions:</h4>
            <ol style="padding-left: 1rem;">
                ${recipe.instructions.map(instruction => `
                    <li style="padding: 0.5rem 0; color: #a1a1aa; line-height: 1.6;">${instruction}</li>
                `).join('')}
            </ol>
        </div>
        
        <div style="background-color: rgba(74, 222, 128, 0.1); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(74, 222, 128, 0.3);">
            <h4 style="color: #4ade80; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>🌱</span> Eco-Friendly Tips:
            </h4>
            <ul style="list-style: none; padding: 0;">
                ${recipe.ecoTips.map(tip => `
                    <li style="padding: 0.25rem 0; color: #a1a1aa; position: relative; padding-left: 1.5rem;">
                        <span style="position: absolute; left: 0; color: #4ade80;">✓</span>
                        ${tip}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button onclick="generateAnotherRecipe()" style="padding: 0.75rem 1.5rem; background-color: transparent; color: #4ade80; border: 1px solid #4ade80; border-radius: 0.5rem; cursor: pointer; margin-right: 1rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#4ade80'; this.style.color='#0a0a0a';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#4ade80';">
                Generate Another Recipe
            </button>
            <button onclick="clearIngredients()" style="padding: 0.75rem 1.5rem; background-color: transparent; color: #ef4444; border: 1px solid #ef4444; border-radius: 0.5rem; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='#ef4444'; this.style.color='#ffffff';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#ef4444';">
                Start Over
            </button>
        </div>
    `;
}

// Function to generate another recipe with same ingredients
function generateAnotherRecipe() {
    generateRecipe();
}

// Function to clear all ingredients
function clearIngredients() {
    ingredients = [];
    updateIngredientsList();
    updateGenerateButton();
    
    const output = document.getElementById('recipeOutput');
    if (output) {
        output.innerHTML = `
            <h3>Your Eco-Friendly Recipe</h3>
            <p>Add some ingredients to generate a sustainable recipe!</p>
        `;
    }
    
    // Focus on input
    const input = document.getElementById('ingredientInput');
    if (input) {
        input.focus();
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all major sections
    document.querySelectorAll('.steps, .features, .recipe-generator, .pricing').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Smart Inventory Management Functions
function addToInventory() {
    const productName = document.getElementById('productName').value.trim();
    const quantity = parseInt(document.getElementById('productQuantity').value) || 1;
    const unit = document.getElementById('productUnit').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const expiryDate = document.getElementById('expiryDate').value;
    
    if (!productName || !purchaseDate || !expiryDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    const product = {
        id: Date.now(),
        name: productName,
        quantity: quantity,
        unit: unit,
        purchaseDate: new Date(purchaseDate),
        expiryDate: new Date(expiryDate),
        addedDate: new Date()
    };
    
    inventory.push(product);
    updateInventoryDisplay();
    clearInventoryForm();
    checkExpiryNotifications();
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventoryList');
    if (!inventoryList) return;
    
    if (inventory.length === 0) {
        inventoryList.innerHTML = '<p class="empty-inventory">No items in inventory. Add some products to get started!</p>';
        return;
    }
    
    inventoryList.innerHTML = '';
    
    inventory.forEach(item => {
        const daysUntilExpiry = Math.ceil((item.expiryDate - new Date()) / (1000 * 60 * 60 * 24));
        let itemClass = 'inventory-item';
        
        if (daysUntilExpiry < 0) {
            itemClass += ' expired';
        } else if (daysUntilExpiry <= 3) {
            itemClass += ' expiring';
        }
        
        const itemElement = document.createElement('div');
        itemElement.className = itemClass;
        itemElement.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.quantity} ${item.unit} • Expires: ${item.expiryDate.toLocaleDateString()}</p>
                <p>Days until expiry: ${daysUntilExpiry > 0 ? daysUntilExpiry : 'Expired'}</p>
            </div>
            <div class="item-actions">
                <button class="use-btn" onclick="useInventoryItem(${item.id})">Use</button>
                <button class="remove-btn" onclick="removeInventoryItem(${item.id})">Remove</button>
            </div>
        `;
        inventoryList.appendChild(itemElement);
    });
}

function filterInventory(filter) {
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const inventoryList = document.getElementById('inventoryList');
    const items = inventoryList.querySelectorAll('.inventory-item');
    
    items.forEach(item => {
        const isExpired = item.classList.contains('expired');
        const isExpiring = item.classList.contains('expiring');
        
        let show = false;
        switch(filter) {
            case 'all':
                show = true;
                break;
            case 'expiring':
                show = isExpiring && !isExpired;
                break;
            case 'expired':
                show = isExpired;
                break;
        }
        
        item.style.display = show ? 'flex' : 'none';
    });
}

function useInventoryItem(id) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        // Add to recipe generator ingredients
        if (!ingredients.includes(item.name.toLowerCase())) {
            ingredients.push(item.name.toLowerCase());
            updateIngredientsList();
            updateGenerateButton();
        }
        
        // Remove from inventory
        removeInventoryItem(id);
        
        // Scroll to recipe generator
        document.getElementById('pantry').scrollIntoView({ behavior: 'smooth' });
    }
}

function removeInventoryItem(id) {
    inventory = inventory.filter(item => item.id !== id);
    updateInventoryDisplay();
    checkExpiryNotifications();
}

function clearInventoryForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '1';
    document.getElementById('productUnit').value = 'pieces';
    document.getElementById('purchaseDate').value = '';
    document.getElementById('expiryDate').value = '';
}

function checkExpiryNotifications() {
    const notificationsContainer = document.getElementById('expiryNotifications');
    if (!notificationsContainer) return;
    
    const today = new Date();
    const expiringItems = inventory.filter(item => {
        const daysUntilExpiry = Math.ceil((item.expiryDate - today) / (1000 * 60 * 60 * 24));
        return daysUntilExpiry <= 3 && daysUntilExpiry >= 0;
    });
    
    const expiredItems = inventory.filter(item => {
        const daysUntilExpiry = Math.ceil((item.expiryDate - today) / (1000 * 60 * 60 * 24));
        return daysUntilExpiry < 0;
    });
    
    if (expiringItems.length === 0 && expiredItems.length === 0) {
        notificationsContainer.style.display = 'none';
        return;
    }
    
    notificationsContainer.style.display = 'block';
    notificationsContainer.innerHTML = '<h3 style="color: #f59e0b; margin-bottom: 1rem;">⚠️ Expiry Alerts</h3>';
    
    expiringItems.forEach(item => {
        const daysLeft = Math.ceil((item.expiryDate - today) / (1000 * 60 * 60 * 24));
        const notification = document.createElement('div');
        notification.className = 'notification warning';
        notification.innerHTML = `
            <span class="notification-icon">⚠️</span>
            <div>
                <strong>${item.name}</strong> expires in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}
                <br><small>Consider using it soon or sharing with the community</small>
            </div>
        `;
        notificationsContainer.appendChild(notification);
    });
    
    expiredItems.forEach(item => {
        const notification = document.createElement('div');
        notification.className = 'notification danger';
        notification.innerHTML = `
            <span class="notification-icon">🚨</span>
            <div>
                <strong>${item.name}</strong> has expired
                <br><small>Please dispose of safely and consider composting if applicable</small>
            </div>
        `;
        notificationsContainer.appendChild(notification);
    });
}

// Community Marketplace Functions
function shareFood() {
    const productName = document.getElementById('shareProductName').value.trim();
    const quantity = parseInt(document.getElementById('shareQuantity').value) || 1;
    const unit = document.getElementById('shareUnit').value;
    const price = parseFloat(document.getElementById('sharePrice').value) || 0;
    const expiryDate = document.getElementById('shareExpiryDate').value;
    const location = document.getElementById('shareLocation').value.trim();
    const description = document.getElementById('shareDescription').value.trim();
    
    if (!productName || !expiryDate || !location) {
        alert('Please fill in all required fields');
        return;
    }
    
    const listing = {
        id: Date.now(),
        productName: productName,
        quantity: quantity,
        unit: unit,
        price: price,
        expiryDate: new Date(expiryDate),
        location: location,
        description: description,
        seller: 'You',
        postedDate: new Date()
    };
    
    marketplaceListings.unshift(listing);
    updateMarketplaceDisplay();
    clearShareForm();
    alert('Your food has been shared with the community!');
}

function updateMarketplaceDisplay() {
    const listingsGrid = document.getElementById('marketplaceListings');
    if (!listingsGrid) return;
    
    // Add some sample listings if empty
    if (marketplaceListings.length === 0) {
        marketplaceListings = [
            {
                id: 1,
                productName: 'Organic Apples',
                quantity: 2,
                unit: 'kg',
                price: 5.00,
                expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
                location: 'Downtown',
                description: 'Fresh organic apples, slightly overripe but perfect for baking',
                seller: 'Sarah M.',
                postedDate: new Date(Date.now() - 2 * 60 * 60 * 1000)
            },
            {
                id: 2,
                productName: 'Whole Grain Bread',
                quantity: 1,
                unit: 'loaf',
                price: 3.50,
                expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                location: 'Suburbs',
                description: 'Artisan bread, baked yesterday, still fresh',
                seller: 'Mike R.',
                postedDate: new Date(Date.now() - 4 * 60 * 60 * 1000)
            },
            {
                id: 3,
                productName: 'Greek Yogurt',
                quantity: 3,
                unit: 'containers',
                price: 8.00,
                expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                location: 'City Center',
                description: 'Unopened containers, bought too many',
                seller: 'Emma L.',
                postedDate: new Date(Date.now() - 1 * 60 * 60 * 1000)
            }
        ];
    }
    
    listingsGrid.innerHTML = '';
    
    marketplaceListings.forEach(listing => {
        const daysUntilExpiry = Math.ceil((listing.expiryDate - new Date()) / (1000 * 60 * 60 * 24));
        
        const listingElement = document.createElement('div');
        listingElement.className = 'marketplace-item';
        listingElement.innerHTML = `
            <h4>${listing.productName}</h4>
            <div class="price">$${listing.price.toFixed(2)}</div>
            <div class="location">📍 ${listing.location}</div>
            <div class="expiry">⏰ Expires in ${daysUntilExpiry} days</div>
            <p>${listing.quantity} ${listing.unit}</p>
            <p style="font-size: 0.9rem; color: #a1a1aa; margin-bottom: 1rem;">${listing.description}</p>
            <p style="font-size: 0.8rem; color: #a1a1aa; margin-bottom: 1rem;">Posted by ${listing.seller}</p>
            <button class="contact-btn" onclick="contactSeller('${listing.seller}', '${listing.productName}')">Contact Seller</button>
        `;
        listingsGrid.appendChild(listingElement);
    });
}

function searchMarketplace() {
    const location = document.getElementById('searchLocation').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    const listingsGrid = document.getElementById('marketplaceListings');
    const items = listingsGrid.querySelectorAll('.marketplace-item');
    
    items.forEach(item => {
        const itemLocation = item.querySelector('.location').textContent.toLowerCase();
        const itemName = item.querySelector('h4').textContent.toLowerCase();
        
        let matchesLocation = !location || itemLocation.includes(location);
        let matchesCategory = category === 'all' || categorizeProduct(itemName) === category;
        
        item.style.display = (matchesLocation && matchesCategory) ? 'block' : 'none';
    });
}

function categorizeProduct(productName) {
    const categories = {
        dairy: ['milk', 'cheese', 'yogurt', 'butter', 'cream'],
        produce: ['apple', 'banana', 'carrot', 'lettuce', 'tomato', 'fruit', 'vegetable'],
        pantry: ['rice', 'pasta', 'flour', 'sugar', 'oil', 'spice'],
        frozen: ['ice cream', 'frozen', 'peas'],
        bakery: ['bread', 'cake', 'cookie', 'muffin', 'pastry']
    };
    
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => productName.includes(keyword))) {
            return category;
        }
    }
    return 'pantry';
}

function contactSeller(seller, product) {
    alert(`Contact ${seller} about ${product}:\n\nIn a real app, this would open a messaging system or provide contact details.`);
}

function clearShareForm() {
    document.getElementById('shareProductName').value = '';
    document.getElementById('shareQuantity').value = '1';
    document.getElementById('shareUnit').value = 'pieces';
    document.getElementById('sharePrice').value = '';
    document.getElementById('shareExpiryDate').value = '';
    document.getElementById('shareLocation').value = '';
    document.getElementById('shareDescription').value = '';
}

// Leftover Magic AI Functions
function generateLeftoverRecipe() {
    const leftoverFood = document.getElementById('leftoverFood').value.trim();
    const amount = document.getElementById('leftoverAmount').value;
    const cuisine = document.getElementById('cuisinePreference').value;
    const mealType = document.getElementById('mealType').value;
    const additionalIngredients = document.getElementById('additionalIngredients').value.trim();
    
    if (!leftoverFood) {
        alert('Please describe your leftover food');
        return;
    }
    
    const output = document.getElementById('leftoverOutput');
    if (!output) return;
    
    // Show loading state
    output.innerHTML = `
        <h3>Creating Your Magic Recipe...</h3>
        <div style="display: flex; align-items: center; gap: 1rem; margin: 2rem 0;">
            <div style="width: 20px; height: 20px; border: 2px solid #4ade80; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p>AI is analyzing your leftovers and creating delicious transformation ideas...</p>
        </div>
    `;
    
    // Simulate AI processing
    setTimeout(() => {
        const recipes = generateLeftoverRecipeIdeas(leftoverFood, amount, cuisine, mealType, additionalIngredients);
        displayLeftoverRecipes(recipes, output);
    }, 2500);
}

function generateLeftoverRecipeIdeas(leftoverFood, amount, cuisine, mealType, additionalIngredients) {
    const baseRecipes = {
        'chicken': [
            {
                name: 'Chicken Fried Rice',
                difficulty: 'Easy',
                time: '15 minutes',
                description: 'Transform leftover chicken into a delicious Asian-inspired fried rice',
                ingredients: ['leftover chicken', 'rice', 'eggs', 'vegetables', 'soy sauce', 'garlic'],
                instructions: [
                    'Heat oil in a large pan or wok',
                    'Scramble eggs and set aside',
                    'Stir-fry rice with garlic and vegetables',
                    'Add shredded leftover chicken and heat through',
                    'Mix in scrambled eggs and season with soy sauce'
                ]
            },
            {
                name: 'Chicken Quesadillas',
                difficulty: 'Easy',
                time: '10 minutes',
                description: 'Mexican-style quesadillas with leftover chicken',
                ingredients: ['leftover chicken', 'tortillas', 'cheese', 'onions', 'peppers'],
                instructions: [
                    'Shred leftover chicken and season with spices',
                    'Layer chicken and cheese between tortillas',
                    'Cook in a pan until golden and cheese melts',
                    'Cut into wedges and serve with salsa'
                ]
            }
        ],
        'rice': [
            {
                name: 'Crispy Rice Balls',
                difficulty: 'Medium',
                time: '20 minutes',
                description: 'Japanese-inspired crispy rice balls with a golden exterior',
                ingredients: ['leftover rice', 'egg', 'breadcrumbs', 'cheese', 'herbs'],
                instructions: [
                    'Mix leftover rice with beaten egg and herbs',
                    'Form into balls and stuff with cheese if desired',
                    'Roll in breadcrumbs and fry until golden',
                    'Serve hot with dipping sauce'
                ]
            }
        ],
        'pasta': [
            {
                name: 'Pasta Frittata',
                difficulty: 'Medium',
                time: '25 minutes',
                description: 'Italian-style baked pasta dish with eggs',
                ingredients: ['leftover pasta', 'eggs', 'cheese', 'herbs', 'vegetables'],
                instructions: [
                    'Beat eggs with cheese and herbs',
                    'Mix in leftover pasta and any vegetables',
                    'Cook in an oven-safe pan until set',
                    'Finish under the broiler for golden top'
                ]
            }
        ]
    };
    
    // Find matching recipes based on leftover food
    let matchingRecipes = [];
    for (const [key, recipes] of Object.entries(baseRecipes)) {
        if (leftoverFood.toLowerCase().includes(key)) {
            matchingRecipes = [...matchingRecipes, ...recipes];
        }
    }
    
    // If no specific matches, generate generic transformation ideas
    if (matchingRecipes.length === 0) {
        matchingRecipes = [
            {
                name: `${cuisine !== 'any' ? cuisine.charAt(0).toUpperCase() + cuisine.slice(1) : 'Creative'} Leftover Transformation`,
                difficulty: 'Medium',
                time: '20-30 minutes',
                description: `Transform your ${leftoverFood} into a delicious ${mealType !== 'any' ? mealType : 'meal'}`,
                ingredients: [leftoverFood, 'fresh herbs', 'spices', 'vegetables', 'sauce base'],
                instructions: [
                    `Assess the texture and flavor of your leftover ${leftoverFood}`,
                    'Add complementary fresh ingredients to enhance flavor',
                    'Consider changing the texture by chopping, mashing, or mixing',
                    'Season appropriately for your chosen cuisine style',
                    'Present in a new format to create a completely different dish'
                ]
            }
        ];
    }
    
    // Customize based on additional ingredients
    if (additionalIngredients) {
        matchingRecipes.forEach(recipe => {
            recipe.ingredients.push(...additionalIngredients.split(',').map(ing => ing.trim()));
        });
    }
    
    return matchingRecipes.slice(0, 2); // Return top 2 recipes
}

function displayLeftoverRecipes(recipes, output) {
    output.innerHTML = '<h3>Your Magic Recipes ✨</h3>';
    
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h4>${recipe.name}</h4>
            <div class="difficulty">${recipe.difficulty}</div>
            <p style="color: #a1a1aa; margin-bottom: 1rem;">${recipe.description}</p>
            <p style="color: #4ade80; margin-bottom: 1rem;">⏱️ ${recipe.time}</p>
            
            <div style="margin-bottom: 1rem;">
                <strong style="color: #ffffff;">Ingredients:</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                    ${recipe.ingredients.map(ing => `<li style="color: #a1a1aa; margin-bottom: 0.25rem;">${ing}</li>`).join('')}
                </ul>
            </div>
            
            <div>
                <strong style="color: #ffffff;">Instructions:</strong>
                <ol style="margin-top: 0.5rem; padding-left: 1rem;">
                    ${recipe.instructions.map(inst => `<li style="color: #a1a1aa; margin-bottom: 0.5rem; line-height: 1.4;">${inst}</li>`).join('')}
                </ol>
            </div>
        `;
        output.appendChild(recipeCard);
    });
    
    // Add regenerate button
    const regenerateBtn = document.createElement('button');
    regenerateBtn.className = 'magic-btn';
    regenerateBtn.style.marginTop = '1rem';
    regenerateBtn.textContent = '✨ Generate More Ideas';
    regenerateBtn.onclick = generateLeftoverRecipe;
    output.appendChild(regenerateBtn);
}

// Enhanced recipe display with ingredient amounts
function displayRecipeWithAmounts(recipe, output) {
    const servings = recipe.servings || 4;
    
    // Calculate ingredient amounts based on servings
    const ingredientsWithAmounts = recipe.ingredients.map(ing => {
        if (typeof ing === 'object' && ing.perServing) {
            const totalAmount = calculateIngredientAmount(ing.perServing, servings);
            return `${totalAmount} ${ing.name}`;
        }
        return typeof ing === 'string' ? ing : ing.name;
    });
    
    // Use the existing display function but with calculated amounts
    const enhancedRecipe = {
        ...recipe,
        ingredients: ingredientsWithAmounts
    };
    
    displayRecipe(enhancedRecipe, output);
}

function calculateIngredientAmount(perServing, servings) {
    // Parse the per-serving amount and multiply by servings
    const match = perServing.match(/^([\d.]+)\s*(.*)$/);
    if (match) {
        const amount = parseFloat(match[1]) * servings;
        const unit = match[2];
        return `${amount} ${unit}`;
    }
    return perServing;
}

// Initialize new features when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set default dates for inventory
    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const purchaseDateInput = document.getElementById('purchaseDate');
    const expiryDateInput = document.getElementById('expiryDate');
    const shareExpiryInput = document.getElementById('shareExpiryDate');
    
    if (purchaseDateInput) purchaseDateInput.value = today;
    if (expiryDateInput) expiryDateInput.value = nextWeek;
    if (shareExpiryInput) shareExpiryInput.value = nextWeek;
    
    // Initialize marketplace with sample data
    updateMarketplaceDisplay();
    
    // Check for expiry notifications
    checkExpiryNotifications();
});

// Shopping list functionality
let shoppingList = [];

// Function to get tag colors
function getTagColor(tag) {
    const tagColors = {
        'vegan': 'rgba(34, 197, 94, 0.8)',
        'gluten-free': 'rgba(59, 130, 246, 0.8)',
        'protein': 'rgba(239, 68, 68, 0.8)',
        'dairy': 'rgba(245, 158, 11, 0.8)',
        'grain': 'rgba(168, 85, 247, 0.8)',
        'vegetable': 'rgba(34, 197, 94, 0.8)',
        'herb': 'rgba(16, 185, 129, 0.8)',
        'seasoning': 'rgba(107, 114, 128, 0.8)',
        'oil': 'rgba(245, 158, 11, 0.8)'
    };
    return tagColors[tag] || 'rgba(161, 161, 170, 0.8)';
}

// Function to add individual ingredient to shopping list
function addToShoppingList(ingredientName, amount) {
    if (userSubscription !== 'premium') {
        showUpgradePrompt('Shopping List feature is only available for Premium users. Upgrade to save ingredients to your shopping list!');
        return;
    }
    
    const existingItem = shoppingList.find(item => item.name === ingredientName);
    if (existingItem) {
        alert(`${ingredientName} is already in your shopping list!`);
        return;
    }
    
    shoppingList.push({
        id: Date.now(),
        name: ingredientName,
        amount: amount,
        checked: false,
        addedDate: new Date()
    });
    
    alert(`${ingredientName} added to shopping list!`);
    updateShoppingListDisplay();
}

// Function to save entire recipe to shopping list
function saveToShoppingList(recipeName) {
    if (userSubscription !== 'premium') {
        showUpgradePrompt('Shopping List feature is only available for Premium users. Upgrade to save entire recipes to your shopping list!');
        return;
    }
    
    alert(`All ingredients from "${recipeName}" have been saved to your shopping list!`);
}

// Function to update shopping list display (placeholder for future implementation)
function updateShoppingListDisplay() {
    // This would update a shopping list UI component
    console.log('Shopping list updated:', shoppingList);
}

// Function to show upgrade prompt for free users
function showUpgradePrompt(message) {
    const upgradeModal = document.createElement('div');
    upgradeModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    upgradeModal.innerHTML = `
        <div style="background-color: #1a1a1a; padding: 2rem; border-radius: 1rem; border: 1px solid #4ade80; max-width: 500px; text-align: center;">
            <h3 style="color: #4ade80; margin-bottom: 1rem;">🔒 Premium Feature</h3>
            <p style="color: #ffffff; margin-bottom: 2rem; line-height: 1.6;">${message}</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="selectPlan('premium')" style="padding: 0.75rem 1.5rem; background-color: #4ade80; color: #0a0a0a; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;">
                    Upgrade to Premium
                </button>
                <button onclick="this.closest('div').parentElement.remove()" style="padding: 0.75rem 1.5rem; background-color: transparent; color: #a1a1aa; border: 1px solid #a1a1aa; border-radius: 0.5rem; cursor: pointer;">
                    Maybe Later
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(upgradeModal);
    
    // Close modal when clicking outside
    upgradeModal.addEventListener('click', function(e) {
        if (e.target === upgradeModal) {
            upgradeModal.remove();
        }
    });
}

// Function to handle plan selection
function selectPlan(plan) {
    if (plan === 'premium') {
        // In a real app, this would redirect to payment processing
        userSubscription = 'premium';
        alert('🎉 Welcome to Premium! You now have access to all features including shopping lists, expiry notifications, and community sharing!');
        
        // Close any open modals
        document.querySelectorAll('div[style*="position: fixed"]').forEach(modal => modal.remove());
        
        // Scroll to pricing section to show the change
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('You\'re already on the Free plan. Enjoy basic recipe browsing!');
    }
}

// Function to check subscription access for features
function checkPremiumAccess(feature) {
    if (userSubscription === 'premium') {
        return true;
    }
    
    const featureMessages = {
        'expiry_alerts': 'Expiry alerts are only available for Premium users. Upgrade to get smart notifications when your food is about to expire!',
        'community_sharing': 'Community food sharing is only available for Premium users. Upgrade to share surplus food with your neighbors!',
        'leftover_magic': 'Leftover Magic AI is only available for Premium users. Upgrade to transform your leftovers into delicious new meals!',
        'shopping_list': 'Shopping List feature is only available for Premium users. Upgrade to save ingredients to your shopping list!',
        'unlimited_recipes': 'You\'ve reached your monthly recipe limit. Upgrade to Premium for unlimited recipe generation!'
    };
    
    showUpgradePrompt(featureMessages[feature] || 'This feature requires a Premium subscription.');
    return false;
}

// Enhanced recipe generation with subscription limits
let monthlyRecipeCount = 0;
const FREE_RECIPE_LIMIT = 5;

// Override the original generateRecipe function to include subscription checks
const originalGenerateRecipe = generateRecipe;
generateRecipe = function() {
    if (userSubscription === 'free') {
        if (monthlyRecipeCount >= FREE_RECIPE_LIMIT) {
            checkPremiumAccess('unlimited_recipes');
            return;
        }
        monthlyRecipeCount++;
    }
    
    originalGenerateRecipe();
};