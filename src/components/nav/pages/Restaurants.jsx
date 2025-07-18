import { useLocation } from 'react-router-dom';
import restaurants from '../../contexts/restaurants';
import RestaurantCard from '../../content/RestaurantCard';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Restaurants({ collected, toggleCollected }) {
    const queryParams = useQuery();
    const search = queryParams.get('search')?.toLowerCase() || '';
    const price = queryParams.get('price') || '';
    const cuisine = queryParams.get('cuisine')?.toLowerCase() || '';

    const filteredRestaurants = restaurants.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(search);
        const matchesPrice = price ? r.priceRange === price : true;
        const matchesCuisine = cuisine ? r.cuisine.toLowerCase() === cuisine : true;

        return matchesSearch && matchesPrice && matchesCuisine;
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                {search || price || cuisine
                    ? `Restaurants matching your filters`
                    : "All Restaurants"}
            </h2>

            {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map((r) => (
                    <RestaurantCard
                        key={r.id}
                        restaurant={r}
                        isCollected={collected.some(item => item.id === r.id)}
                        onToggle={toggleCollected}
                    />
                ))
            ) : (
                <p>No restaurants found matching your filters.</p>
            )}
        </div>
    );
}