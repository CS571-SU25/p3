import coverImage from '../../../assets/img/Homepage.png'

export default function Home() {
    console.log("Home page loaded");
    return (
        <div className="text-center p-4">
            <h1>Welcome to Tastemap Madison</h1><br />
            <p>
                <strong>Tastemap Madison</strong> is a platform where you can explore reviews of restaurants
                across different cuisines in Madison. Each listing includes recommended dishes, prices,
                and addresses. Logged-in users can also leave their own reviews.
            </p>
            <img
                src={coverImage}
                alt="Tastemap banner"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", margin: "20px 0" }}
            />

        </div>
    );
}