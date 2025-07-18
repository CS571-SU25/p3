export default function Home() {
    console.log("Home page loaded");
    return (
        <div className="text-center p-4">
            <h1>Welcome to Tastemap Madison</h1>
            <p>
                <strong>Tastemap Madison</strong> is a platform where you can explore reviews of restaurants
                across different cuisines in Madison. Each listing includes recommended dishes, prices,
                and addresses. Logged-in users can also leave their own reviews.
            </p>
        </div>
    );
}