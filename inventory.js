// CREME THEORY - CENTRAL INVENTORY
// true = Available | false = Sold Out
const InventoryData = {
    "Signature 6\" Cake": { inStock: true, price: 6500 },
    "Velvet Theory": { inStock: false, price: 7200 },
    "Heritage Croissant": { inStock: true, price: 850 },
    "Classic Croissant": { inStock: true, price: 850 },
    "Chocolate Ganache": { inStock: true, price: 1200 }
};

// This function makes the data available to your other scripts
window.CremeInventory = InventoryData;
