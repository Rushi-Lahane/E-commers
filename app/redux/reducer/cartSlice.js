import { createSlice } from "@reduxjs/toolkit";


const getCartStorage = () => {
    if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
};

const initialProducts = [
    {
        id: 1,
        name: "Samsung Laptop",
        category: "Electronic",
        price: "80000",
        url: "/images/Product-1.jpg",
        desc: "Samsung laptops often feature high-resolution AMOLED or QLED displays with vibrant colors, sharp details, and excellent brightness levels, ensuring an immersive viewing experience.",
        Performance:
            "Powered by the latest Intel or AMD processors, Samsung laptops deliver fast and efficient performance for multitasking, video editing, gaming, and more.",
    },
    {
        id: 2,
        name: "Pedestal Fan",
        category: "Electronic",
        price: "2500",
        url: "/images/Product-2.jpg",

        desc: "Warranty: 2 years warranty provided by Crompton from date of purchase. Installation is not provided by brand. For product related queries please visit Crompton's website; Warranty: 2 Years;Includes: 1 Pedestal Fan",

        Performance:
            "Sturdy Base and Thermal Overload Protection for safety and durability;Sweep Size = 400 mm; Speed = 2100 RPM; Air Delivery = 105 CMM; Input Power = 125W",

    },
    {
        id: 3,
        name: "Football",
        category: "Sports",
        price: "999",
        url: "/images/Product-3.jpg",

        desc: "Nivia Dominator 3.0 Football, Match Ball, 32 Panels, Durable & Soft PU Leather, Butyl Fabric Wounded Bladder, FIFA Basic, to Play on Both Natural and Artificial Grass (Multicolor, Size - 5)",

        Performance:
            "FIFA Basic Certified: Ideal for competitive championships Consistent Flight & Bounce: Perfect for tournament-level precision.Durable & Soft PU Leather Cover: Long-lasting performance on all surfaces.",

    },
    {
        id: 4,
        name: "Water Bottle",
        category: "Home & Kitchen",
        price: "349",
        url: "/images/Product-4.jpg",

        desc: "Boldfit Water Bottles Stainless Steel Water Bottle 1 Litre Steel Water Bottles for School, Office, Home, Gym 1 Litre Water Bottle for Men Leakproof, Rust free Steel Bottle -1000 ml Water Bottle Black",
        Performance:
            "KEEP WATER & BEVERAGES FOR ALL DAY : Boldfit 1 litre water bottle steel bottle made with single- thin walled metal technology, which facilitates keeping water and beverages whole day as per your requirement without any difference in odour. Also taste & nutritive value will remain same throughout storage time in this water bottle.",
    },
    {
        id: 5,
        name: "Chhava Novel",
        category: "Book",
        price: "499",
        url: "/images/Product-5.jpg",

        desc: "CHHAAVA | CHATRAPATI SAMBHAJI MAHARAJ AND HIS FIGHT FOR SWARAJYA | CHHAVA | CHAVA | CHHAWA | CHAAWA - SHIVAJI SAWANT | CHATRAPATI SHIVAJI MAHARAJ | ENGLISH EDITION | MARATHA HISTORY ",
    },
    {
        id: 6,
        name: "Dandruff Shampoo",
        category: "Beauty",
        price: "249",
        url: "/images/Product-6.jpg",
        desc: "Head & Shoulders Smooth and Silky, Anti Dandruff Shampoo for Women & Men , 1 L",
        Performance:
            "Richly indulgent anti-dandruff shampoo for dry, damaged or frizzy hair, Leaves hair up to 100% dandruff free; Gentle enough for everyday use, even for color or chemically treated hair Richly indulgent anti-dandruff shampoo for dry, damaged or frizzy hair, Leaves hair up to 100% dandruff free; Gentle enough for everyday use, even for color or chemically treated hair",

    },
    {
        id: 7,
        name: "Sonic Ac",
        category: "Electronic",
        price: "49999",
        url: "/images/Product-7.jpg",

        desc: "Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with True AI Mode, PM 0.1 Air Purification Filter, CS/CU-SU18ZKYWT, White) ",

        Performance:
            "Capacity: 1.5 Ton - Suitable for medium sized rooms (121-170 sq ft). Energy Star Rating: 3 Star | Annual Power Consumption: 1002.31 kWh | ISEER: 3.90. The star rating is as per new BEE guidelines.501 (Indoor) CFM Air Circulation & Ambient Temperature: 16 to 52 degree Celsius.",

    },
    {
        id: 8,
        name: "Rede Nine Shirt",
        category: "Cloth",
        price: "1299",
        url: "/images/Product-8.jpg",

        desc: "Red Nine Solid Casual Shirt: 100% Cotton, Spread Collar, Buttoned Front - Perfect for Boys' Casual Elegance.",
        Performance:
            "Material composition100% Cotton PatternSolid Fit typeRegular Fit Sleeve typeLong Sleeve Collar styleSpread Collar LengthStandard Length Country of OriginIndia",

    },
    {
        id: 9,
        name: "Men Sneaker",
        category: "FootWear",
        price: "4999",
        url: "/images/Product-9.jpg",

        desc: "Bakca Bukki Balancer Men's Fashion Sneakers Lace-Up Trainers Basketball Style Walking Shoes ",
        Performance:
            "The sneaker gets outfitted with a sort of roll-cage on its upper for just a bit more support.High top shoes style, attached ankle closely, and improve shoes wrapping performance.",
    },
    {
        id: 10,
        name: "HeadPhone",
        category: "Electronic",
        price: "1499",
        url: "/images/Product-10.jpg",

        desc: "Boolt Q Over Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, Bluetooth 5.4, AUX Option, Easy Controls, IPX5 Wireless Headphones (Beige) ",
        Performance:
            "70H Playtime: Boult Q wireless over-ear headphones offer an impressive 70 hours of playtime, ensuring you can enjoy non-stop music, calls, or gaming without worrying about frequent charging interruptions.✅ 40mm Bass Drivers: Feel the power of deep, rich bass with 40mm drivers, designed to deliver an immersive audio experience in these Bluetooth headphones, perfect for music lovers seeking enhanced sound quality.",

    },
    {
        id: 11,
        name: "Laptop Bag",
        category: "Bags",
        price: "899",
        url: "/images/Product-11.jpg",

        desc: "Lawie Sport 47cm Osprey 28 Litres Laptop Backpack For Men & Women | Business Laptop Bag | Upto 15.6 Notebook/Macbook Compatible (Blue) ",
    },
    {
        id: 12,
        name: "Taddy Bear",
        category: "Toy",
        price: "1100",
        url: "/images/Product-12.jpg",

        desc: "AVSHUB Soft Toy Teddy Bear 6 Feet for Girl Lovable Huggable Teddy Bear | Plushie Soft Toys for Kids | Plush Soft Toys for Baby Boys and Girls Kids - Teddy | Birthday & Valentine Gift (Cream) ",
        Performance:
            "Soft and Cuddly: The stuffed animal soft toy is incredibly soft and cuddly, making it perfect for hugging and snuggling. It provides comfort and warmth, making it a perfect companion for kids and adults alike.Design: The plush toy features an adorable and lovable teddy bear design that is sure to win the hearts of both kids and adults. It is available in color and measures 6 feet in height, making it a perfect size to snuggle with.",

    },
    {
        id: 13,
        name: "My Phone",
        category: "Electronic",
        price: "110999",
        url: "/images/Product-13.jpg",
        desc: "Processor: High performance MediaTek Helio G36,upto 2.2GHz| Fast Side fingerprint sensor | Upto 8GB RAM including 4GB Virtual RAM |64GB Storage; Display: Large 17.04 cm 90Hz dot display with ",
        Performance:
            "High performance MediaTek Helio G36,upto 2.2GHz; | 6.71 HD+ 90Hz Display with GG3 Protection | Upto 8GB RAM including 4GB Virtual RAM |64GB Storage | Fast Side fingerprint sensor Display: Large 17.04 cm 90Hz dot display with Corning Gorilla Glass 3 protection | 500nits peak brightness | 180Hz Touch sampling Rate",

    },
    {
        id: 14,
        name: "Laddy Sandal",
        category: "FootWear",
        price: "1100",
        url: "/images/Product-14.jpg",

        desc: "Step into the spotlight and make heads turn with Monrow Heels! Prepare to be captivated by our irresistibly stylish and luxuriously comfortable footwear. These vegan-friendly masterpieces effortlessly blend class and chic, creating a harmonious fusion of fashion and function. ",
        Performance:
            "MONROW Noel Leather Wedge Heels for Women & Girls | Fancy & Stylish Heel sandals |Extra Cushioning & Comfortable, Fashionable, Light Weight, Vegan, Fashion Heel Sandal for Girls, Green, 4UK",

    },
    {
        id: 15,
        name: " Casual Denim",
        category: "Cloths",
        price: "1900",
        url: "/images/Product-15.jpg",

        desc: "Sizes: XS-36 Inches | S-38 Inches | M-40 Inches | L-42 Inches | XL-44 Inches | 2XL-46 Inches | 3XL-48 Inches | 4XL-50 Inches | 5XL-52 Inches | 6XL-54 Inches | 7XL-56 Inches; Please check the size chart before ordering for the perfect fit",
        Performance:
            "100% High-grade premium soft Cotton Denim Fabri Full-sleeve casual button-down shirt with a left-chest pocket and guaranteed 0% shrinkage post washing Stylish Slim-fit classic shirt, easy through chest and",

    },
];

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        allProducts: initialProducts, // All available products
        cart: getCartStorage(), // Cart items
    },
    reducers: {
        // ✅ Add product to cart (increase quantity if exists)
        add: (state, action) => {
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        // ✅ Remove product from cart
        remove: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        // ✅ Set cart from localStorage (on app load)
        setCart: (state, action) => {
            state.cart = action.payload;
        },

        // ✅ Increase quantity of a product in the cart
        increaseQuantity: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        // ✅ Decrease quantity (but not below 1)
        decreaseQuantity: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});

// Export actions
export const { add, remove, setCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Export selectors
export const selectAllProducts = (state) => state.cart.allProducts;
export const selectCartItems = (state) => state.cart.cart;

// Export reducer
export default cartSlice.reducer;
