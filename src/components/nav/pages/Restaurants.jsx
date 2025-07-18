import restaurants from '../../contexts/restaurants';
import RestaurantCard from '../../content/RestaurantCard';

export default function Restaurants({ collected, toggleCollected }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">All Restaurants</h2>
            {restaurants.map((r) => (
                <RestaurantCard
                    key={r.id}
                    restaurant={r}
                    isCollected={collected.some(item => item.id === r.id)}
                    onToggle={toggleCollected}
                />
            ))}
        </div>
    );
}