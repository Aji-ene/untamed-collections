// All products combined from bestSellers, featuredProducts, artistSpotlight, etc.
// Loaded from localStorage if available (for admin persistence).
let initialProducts = [
  // Best Sellers (IDs 1-12)
  { id: 1, title: "Sorry I'm late. I didn't want to come.", artist: "by martinclemmons", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Sorry+I'm+late", category: "Funny", likes: 0, inStock: true },
  { id: 2, title: "Boop", artist: "by HandsOffMyDinosaur", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/ADD8E6/000000?text=Boop", category: "Animals", likes: 0, inStock: true },
  { id: 3, title: "Antifa: Real American Her...", artist: "by UnlovelyFrankenstein", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=ANTIFA", category: "Vintage", likes: 0, inStock: true },
  { id: 4, title: "Creepshow 1982", artist: "by JCD666", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Creepshow", category: "Movies", likes: 0, inStock: true },
  { id: 5, title: "Vintage Pumpkin", artist: "by kg07_shirts", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/8B4513/FFFFFF?text=Vintage+Pumpkin", category: "Thanksgiving", likes: 0, inStock: true },
  { id: 6, title: "Easily Distracted", artist: "by Etopix", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Easily+Distrac", category: "Funny", likes: 0, inStock: true },
  { id: 7, title: "same-shit-different", artist: "by Angela Alvarez", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Same+Shit", category: "Vintage", likes: 0, inStock: true },
  { id: 8, title: "freedom-charlie-kirk", artist: "by Shivi rastogi", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/FFFFFF/000000?text=FREEDOM", category: "Sports", likes: 0, inStock: true },
  { id: 9, title: "Portland-Frog", artist: "by VOILA", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=RESIST", category: "Animals", likes: 0, inStock: true },
  { id: 10, title: "Vintage Horror Halloween...", artist: "by Itinenbroker", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Horror+Halloween", category: "Halloween", likes: 0, inStock: true },
  { id: 11, title: "90s bros bunny", artist: "by LADYLOVE", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/FFFFFF/000000?text=90s+bros", category: "Vintage", likes: 0, inStock: true },
  { id: 12, title: "Clayton Bigsby For Presid...", artist: "by DarkLordPug", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Clayton+Bigsby", category: "Funny", likes: 0, inStock: true },
  // Featured Products (IDs 13-20)
  { id: 13, title: "Bite University Mascot", artist: "by ChetArt", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/666666/FFFFFF?text=Bite+University", category: "Sports", likes: 0, inStock: true },
  { id: 14, title: "Get Ur Creep On!!!", artist: "by Pink Fang", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Creep+On", category: "Halloween", likes: 0, inStock: true },
  { id: 15, title: "Jack's Bad Day", artist: "by von Kowen", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Jack's+Bad+Day", category: "Movies", likes: 0, inStock: true },
  { id: 16, title: "Season of the Witch", artist: "by Maggie Mago Designs", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/FF0000/FFFFFF?text=Season+of+Witch", category: "Halloween", likes: 0, inStock: true },
  { id: 17, title: "HANDS", artist: "by aligulec", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=HANDS", category: "Funny", likes: 0, inStock: true },
  { id: 18, title: "Space Halloween", artist: "by nicebleed", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Space+Halloween", category: "Halloween", likes: 0, inStock: true },
  { id: 19, title: "Peak-a-Boo!", artist: "by Donnie", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Peak-a-Boo", category: "Funny", likes: 0, inStock: true },
  { id: 20, title: "Dinoween", artist: "by koalastudio", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Dinoween", category: "Animals", likes: 0, inStock: true },
  // Artist Spotlight Products (IDs 21-28, adjusted titles for brevity)
  { id: 21, title: "Bat with Halloween Basket", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Bat+Halloween", category: "Halloween", likes: 0, inStock: true },
  { id: 22, title: "Haunted House", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/CCCCCC/000000?text=Haunted+House", category: "Halloween", likes: 0, inStock: true },
  { id: 23, title: "Bat", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/FFFFFF/000000?text=Bat", category: "Animals", likes: 0, inStock: true },
  { id: 24, title: "Christmas Bats", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/008000/FFFFFF?text=Christmas+Bats", category: "Thanksgiving", likes: 0, inStock: true },
  { id: 25, title: "Frog Mushroom", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/ADD8E6/000000?text=Frog+Mushroom", category: "Animals", likes: 0, inStock: true },
  { id: 26, title: "Rabbit Dance", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/F5DEB3/000000?text=Rabbit+Dance", category: "Funny", likes: 0, inStock: true },
  { id: 27, title: "Campfire", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/ADD8E6/000000?text=Campfire", category: "Vintage", likes: 0, inStock: true },
  { id: 28, title: "The Proposal", artist: "by Cat Mallard", price: 16, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=The+Proposal", category: "Movies", likes: 0, inStock: true },
];

// New: Promo section (Oct 27 Navy Day – 4 products, mock IDs 29-32)
export const navyDayProducts = [
  { id: 29, title: "US Navy T-Shirt", artist: "by Little Quotes", price: 23, originalPrice: 23, image: "https://placehold.co/200x200/000080/FFFFFF?text=US+Navy", category: "Sports", likes: 0, inStock: true, subtitle: "Navy T-Shirt", colors: ['#000080'], description: "Celebrate Navy Day!", fits: ['Male', 'Female'], styles: ['Classic'], sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'] },
  { id: 30, title: "US Navy T-Shirt", artist: "by Little Quotes", price: 23, originalPrice: 23, image: "https://placehold.co/200x200/FF0000/FFFFFF?text=US+Navy+Red", category: "Sports", likes: 0, inStock: true, subtitle: "Navy T-Shirt", colors: ['#FF0000'], description: "Celebrate Navy Day!", fits: ['Male', 'Female'], styles: ['Classic'], sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'] },
  { id: 31, title: "NAVY T-Shirt", artist: "by The Apple Orchard", price: 23, originalPrice: 23, image: "https://placehold.co/200x200/0000FF/FFFFFF?text=NAVY", category: "Sports", likes: 0, inStock: true, subtitle: "Navy T-Shirt", colors: ['#0000FF'], description: "Celebrate Navy Day!", fits: ['Male', 'Female'], styles: ['Classic'], sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'] },
  { id: 32, title: "The US Navy Skeleton Kra", artist: "by Jorge Lebeau Kra", price: 23, originalPrice: 23, image: "https://placehold.co/200x200/000000/FFFFFF?text=Navy+Skull", category: "Sports", likes: 0, inStock: true, subtitle: "Navy Skeleton T-Shirt", colors: ['#000000'], description: "Celebrate Navy Day!", fits: ['Male', 'Female'], styles: ['Classic'], sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'] }
];

// For sections: Use existing + new
// e.g., inspiredByInterests: products.slice(0,4)
// bestSellers: products.slice(4,8)



// Load from localStorage if exists (for admin changes)
export const products = JSON.parse(localStorage.getItem('products') || '[]') || initialProducts;

export const categories = [
  { name: 'Shop All Designs', icon: '🎨' },
  { name: 'Thanksgiving', icon: '🦃' },
  { name: 'Music', icon: '🎵' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Movies', icon: '🎬' },
  { name: 'Television', icon: '📺' },
  { name: 'Vintage', icon: '📼' },
  { name: 'Animals', icon: '🐱' },
  { name: 'Funny', icon: '😂' }
];

export const productTypes = [
  { name: 'T-Shirts', image: 'https://placehold.co/80x80/FFFF00/000000?text=T-Shirt' },
  { name: 'Hoodies', image: 'https://placehold.co/80x80/FF0000/FFFFFF?text=Hoodie' },
  { name: 'Kids T-Shirts', image: 'https://placehold.co/80x80/FFD700/000000?text=Kids+T-Shirt' },
  { name: 'Phone Cases', image: 'https://placehold.co/80x80/808080/FFFFFF?text=Phone+Case' },
  { name: 'Stickers', image: 'https://placehold.co/80x80/00CED1/FFFFFF?text=Sticker' },
  { name: 'Mugs', image: 'https://placehold.co/80x80/FF6347/FFFFFF?text=Mug' }
];

export const featuredStores = [
  {
    title: '$10 Off Hoodies',
    image: 'https://placehold.co/300x200/FF6B6B/FFFFFF?text=Hoodies+Sale',
    button: 'Shop Now'
  },
  {
    title: 'Get a Holiday Head Start!',
    image: 'https://placehold.co/300x200/4ECDC4/FFFFFF?text=Holiday+Gifts',
    button: 'Discover Gifts'
  },
  {
    title: 'up to 35% Off Artists to Watch',
    image: 'https://placehold.co/300x200/45B7D1/FFFFFF?text=Artists+Sale',
    button: 'Browse'
  }
];

export const giftCategories = [
  { name: 'Comedian', icon: '😂' },
  { name: 'Musical Soul', icon: '🎵' },
  { name: 'Movie Buff', icon: '🎬' },
  { name: 'Channel Surfer', icon: '📺' },
  { name: 'Sports Fanatic', icon: '⚽' },
  { name: 'Anime Lover', icon: '🎮' },
  { name: 'Sci-Fi Nerd', icon: '👽' },
  { name: 'Vintage', icon: '📼' }
];

export const artistSpotlight = {
  name: 'Cat Mallard',
  handle: '@cat-mallard',
  joined: 'December 2024',
  designs: 31,
  saleDuration: '2 days 17:08:14',
  products: products.slice(20, 28) // Reference the last 8 products
};

export const tshirtFeatures = [
  { title: 'The Perfect Weight', description: 'Your favorite design on a tee that\'s not too thick or heavy.' },
  { title: 'Pre Shrink', description: 'Less shrinkage after washing and drying.' },
  { title: 'The Perfect Cut', description: 'Years of experience and research went into crafting the perfect fit.' },
  { title: 'Made Fairly', description: 'Made in a safe, friendly, fair-wage factory that is WRAP + Fair Labor certified.' }
];

export const footerLinks = {
  Support: ['Order Status', 'Contact Us', 'Coupon Codes', 'FAQ', 'Free Shipping', 'Refunds & Returns', 'Shipping Info', 'Size Chart'],
  Explore: ['All Designs', 'Content Directory', 'Featured Artists', 'Newest Designers', 'Newest T-Shirts', 'Tag Directory'],
  AboutUs: ['About Us', 'Accessibility', 'Create a Untamed Collections Store', 'Careers', 'Hire an Artist', 'Social Responsibility', 'Untamed Collections Reviews'],
  Artists: ['Artist Signup', 'Design Guide', 'Untamed Collections Blog']
};

export const socialMedia = [
  { name: 'Facebook', icon: 'f' },
  { name: 'Instagram', icon: '📷' },
  { name: 'Pinterest', icon: '📌' },
  { name: 'Reddit', icon: 'r' },
  { name: 'TikTok', icon: '🎵' },
  { name: 'Twitter', icon: 'X' }
];

export const paymentMethods = [
  { name: 'MasterCard', icon: 'https://placehold.co/50x30/FF5733/FFFFFF?text=MC' },
  { name: 'Visa', icon: 'https://placehold.co/50x30/0057B8/FFFFFF?text=VISA' },
  { name: 'American Express', icon: 'https://placehold.co/50x30/0066CC/FFFFFF?text=AMEX' },
  { name: 'Discover', icon: 'https://placehold.co/50x30/FF6600/FFFFFF?text=DISC' },
  { name: 'PayPal', icon: 'https://placehold.co/50x30/003087/FFFFFF?text=PP' },
  { name: 'Apple Pay', icon: 'https://placehold.co/50x30/000000/FFFFFF?text=AP' }
];

