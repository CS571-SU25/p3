import ThaiBasilImg from '../../assets/img/ThaiBasil.jpg';
import LallandeImg from '../../assets/img/Lallande.jpg';
import DQ from '../../assets/img/DQ.jpg'
import EnoVinoDowntown from '../../assets/img/EnoVinoDowntown.jpg'
import BarCorallini from '../../assets/img/BarCorallini.jpg'
import Sweetgreen from '../../assets/img/Sweetgreen.jpg'
import pokeplus from '../../assets/img/pokeplus.jpg'
import rareStakehouse from '../../assets/img/rareSteakhouse.jpg'
import muramoto from '../../assets/img/muramoto.jpg'

const restaurants = [
    {
        id: 1,
        name: "Thai Basil",
        image: ThaiBasilImg,
        priceRange: "$$",
        cuisine: "Thai",
        address: "3519 University Ave, Madison, WI",
        recommended: ["Pad Thai", "Pineapple Curry", "Crab Rangoon"]
    },
    {
        id: 2,
        name: "Lallande",
        image: LallandeImg,
        priceRange: "$$$",
        cuisine: "French",
        address: "1859 Monroe St, Madison, WI",
        recommended: ["Escargots", "Poisson en Croute", "Soupe a l'Oignon Gratinee"]
    },
    {
        id: 3,
        name: "Dairy Queen Grill & Chill",
        image: DQ,
        priceRange: "$",
        cuisine: "Others",
        address: "3030 Fish Hatchery Rd, Madison, WI",
        recommended: ["Chicken Strip Baskets", "OREO BLIZZARD Treat"]
    },
    {
        id: 4,
        name: "Eno Vino Downtown",
        image: EnoVinoDowntown,
        priceRange: "$$$",
        cuisine: "Spanish",
        address: "1 N Webster St, Madison, WI",
        recommended: ["Crispy Lobster", "most Chef's special"]
    },
    {
        id: 5,
        name: "Bar Corallini",
        image: BarCorallini,
        priceRange: "$$$",
        cuisine: "Italian",
        address: "2004 Atwood Ave, Madison, WI",
        recommended: ["Antipasti Salad", "Muffaletta"]
    },
    {
        id: 6,
        name: "Sweetgreen",
        image: Sweetgreen,
        priceRange: "$",
        cuisine: "Others",
        address: "652 State St, Madison, WI",
        recommended: ["Kale Salad", "Autumn Harvest Bowl"]
    },
    {
        id: 7,
        name: "Poke Plus Madison",
        image: pokeplus,
        priceRange: "$",
        cuisine: "Others",
        address: "615 State St, Madison, WI",
        recommended: ["Teriyaki", "make your own bowl"]
    },
    {
        id: 8,
        name: "Rare Steakhouse",
        image: rareStakehouse,
        priceRange: "$$$$",
        cuisine: "Others",
        address: "14 W Mifflin St, Madison, WI",
        recommended: ["Dry-aged", "Japanese A5 Wagyu"]
    },
    {
        id: 9,
        name: "Muramoto Hilldale",
        image: muramoto,
        priceRange: "$$",
        cuisine: "Japanese",
        address: "546 N Midvale Blvd, Madison, WI",
        recommended: ["Caterpillar", "Sashimi Plate"]
    }

];

export default restaurants;