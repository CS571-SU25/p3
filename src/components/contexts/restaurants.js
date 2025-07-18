import ThaiBasilImg from '../../assets/img/ThaiBasil.jpg';
import LallandeImg from '../../assets/img/Lallande.jpg';

const restaurants = [
    {
        id: 1,
        name: "Thai Basil",
        image: ThaiBasilImg,
        priceRange: "$20-40",
        cuisine: "Thai",
        address: "3519 University Ave, Madison, WI",
        recommended: ["Pad Thai", "Pineapple Curry", "Crab Rangoon"]
    },
    {
        id: 2,
        name: "Lallande",
        image: LallandeImg,
        priceRange: "$50-100",
        cuisine: "French",
        address: "1859 Monroe St, Madison, WI",
        recommended: ["Escargots", "Poisson en Croute", "Soupe a l'Oignon Gratinee"]
    },
    // ...more restaurants
];

export default restaurants;