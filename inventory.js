// CREME THEORY - CENTRAL DATA (Sync Version)
const InventoryData = [
    { 
        "id": "sc-01",
        "name": "Signature 6\" Cake", 
        "inStock": true, 
        "price": "$6,500", 
        "category": "Signature Cakes",
        "description": "Serves 8-10. Perfect for intimate celebrations.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-12" 
    },
    { 
        "id": "sc-02",
        "name": "Velvet Theory", 
        "inStock": false, 
        "price": "$7,200", 
        "category": "Signature Cakes",
        "description": "Cocoa-infused sponge with vanilla bean frosting.",
        "image": "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-01"
    },
    { 
        "id": "dp-01",
        "name": "Heritage Croissant", 
        "inStock": true, 
        "price": "$850", 
        "category": "Daily Pastries",
        "description": "Flaky layers made with French butter.",
        "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-14"
    },
    { 
        "id": "dp-02",
        "name": "Classic Croissant", 
        "inStock": true, 
        "price": "$850", 
        "category": "Daily Pastries",
        "description": "Traditional buttery goodness.",
        "image": "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2025-12-20"
    },
    { 
        "id": "dp-03",
        "name": "Chocolate Ganache", 
        "inStock": true, 
        "price": "$1,200", 
        "category": "Daily Pastries",
        "description": "Rich dark chocolate filling.",
        "image": "https://images.unsplash.com/photo-1626803791432-152646637372?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-01-10"
    }
];

const SiteSettings = {
    "announcement": "We are now accepting orders for the weekend!",
    "shopOpen": true,
    "themeColor": "amber-900",
    "deliveryFee": 500
};

// Connect data to the global window
window.CremeInventory = InventoryData;
window.CremeSettings = SiteSettings;

// Trigger event so Menu.html knows items are ready to display
document.dispatchEvent(new Event('inventoryLoaded'));
