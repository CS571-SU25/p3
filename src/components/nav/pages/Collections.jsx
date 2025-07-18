import RestaurantCard from '../../content/RestaurantCard';

export default function Collections({ collected, toggleCollected }) {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Collected Restaurants</h2>
            {collected.length === 0 ? (
                <p>No restaurants collected yet.</p>
            ) : (
                collected.map((r) => (
                    <RestaurantCard
                        key={r.id}
                        restaurant={r}
                        isCollected={true}
                        onToggle={toggleCollected}
                    />
                ))
            )}
        </div>
    );
}