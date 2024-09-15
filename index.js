// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (const category in menu){
        // Create an element to represent the category
        const categoryHeader = document.createElement('h2');
            categoryHeader.textContent = category; // Set the text content of the category element to the category name
            menuContainer.appendChild(categoryHeader);// Append the category element to the menu container
        // Create an element to represent a list of items
            const itemList = document.createElement('ul');
        // Append a list of items element to the menu container
            
        // Loop through the items in the category and create list items
            menu[category].forEach(item => {
                const listItem = document.createElement('li');// Create a list item element
                listItem.textContent = item; // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order
                listItem.addEventListener('click', () => addToOrder(item));
            // Append the list item to the list of items
                itemList.appendChild(listItem);
            });
        // Append the list to the menu container
        menuContainer.appendChild(itemList);
    }
}
// Callback function for adding an item to the order
let totalPrice = 0;
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;  // Set the text content of the list item to the item name
    orderItems.appendChild(orderItem); // Append the list item to the order items list

    // Assuming each item costs R50
    totalPrice += 50;

    // Update the text content of the order total element with the new total
    orderTotal.textContent = totalPrice.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
