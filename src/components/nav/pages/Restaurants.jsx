import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
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

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;

    // Filter restaurants
    const filteredRestaurants = restaurants.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(search);
        const matchesPrice = price ? r.priceRange === price : true;
        const matchesCuisine = cuisine ? r.cuisine.toLowerCase() === cuisine : true;
        return matchesSearch && matchesPrice && matchesCuisine;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredRestaurants.length / cardsPerPage);
    const currentRestaurants = filteredRestaurants.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    console.log(filteredRestaurants.map(r => r.image));

    return (
        <div className="container mt-4">
            <h2 className="mb-4">
                {search || price || cuisine
                    ? `Restaurants matching your filters`
                    : "All Restaurants"}
            </h2>

            {currentRestaurants.length > 0 ? (
                currentRestaurants.map((r) => (
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

            {totalPages > 1 && (
                <Pagination className="justify-content-center mt-4">
                    {[...Array(totalPages)].map((_, idx) => (
                        <Pagination.Item
                            key={idx + 1}
                            active={idx + 1 === currentPage}
                            onClick={() => setCurrentPage(idx + 1)}
                        >
                            {idx + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            )}
        </div>
    );
}