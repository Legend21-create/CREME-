// CREME THEORY - CENTRAL INVENTORY
// Use true for Available | false for Sold Out
const InventoryData = {
    "Signature 6\" Cake": { 
        "inStock": true, 
        "price": 6500 
    },
    "Velvet Theory": { 
        "inStock": false, 
        "price": 7200 
    },
    "Heritage Croissant": { 
        "inStock": true, 
        "price": 850 
    },
    "Classic Croissant": { 
        "inStock": true, 
        "price": 850 
    },
    "Chocolate Ganache": { 
        "inStock": true, 
        "price": 1200 
    }
};

// This makes the data accessible across your Menu, Order Form, and Admin pages
window.CremeInventory = InventoryData;
