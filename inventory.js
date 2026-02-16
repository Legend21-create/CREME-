// CREME THEORY - CENTRAL DATA
const InventoryData = {
    "Signature 6\" Cake": { 
        "inStock": true, 
        "price": 6500, 
        "category": "Signature Cakes",
        "description": "Serves 8-10. Perfect for intimate celebrations.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-12" 
    },
    "Velvet Theory": { 
        "inStock": false, 
        "price": 7200, 
        "category": "Signature Cakes",
        "description": "Cocoa-infused sponge with vanilla bean frosting.",
        "image": "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-01"
    },
    "Heritage Croissant": { 
        "inStock": true, 
        "price": 850, 
        "category": "Daily Pastries",
        "description": "Flaky layers made with French butter.",
        "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-02-14"
    },
    "Classic Croissant": { 
        "inStock": true, 
        "price": 850, 
        "category": "Daily Pastries",
        "description": "Traditional buttery goodness.",
        "image": "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2025-12-20"
    },
    "Chocolate Ganache": { 
        "inStock": true, 
        "price": 1200, 
        "category": "Daily Pastries",
        "description": "Rich dark chocolate filling.",
        "image": "https://images.unsplash.com/photo-1626803791432-152646637372?auto=format&fit=crop&q=80&w=800",
        "dateAdded": "2026-01-10"
    }
};

const SiteSettings = {
    "announcement": "We are now accepting orders for the weekend!",
    "shopOpen": true,
    "themeColor": "amber-900",
    "deliveryFee": 500
};

window.CremeInventory = InventoryData;
window.CremeSettings = SiteSettings;
