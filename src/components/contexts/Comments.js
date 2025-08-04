export const getComments = () => {
    const stored = localStorage.getItem("restaurantComments");
    return stored ? JSON.parse(stored) : {};
};

export const addComment = (restaurantId, comment) => {
    const allComments = getComments();
    if (!allComments[restaurantId]) {
        allComments[restaurantId] = [];
    }
    allComments[restaurantId].push(comment);
    localStorage.setItem("restaurantComments", JSON.stringify(allComments));
};