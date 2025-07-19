import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const usernameRef = useRef();
    const pinRef = useRef();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value.trim();
        const pin = pinRef.current.value.trim();

        if (!username || !pin) {
            alert("Please provide both a username and PIN.");
            return;
        }

        const pinRegex = /^\d{7}$/;
        if (!pinRegex.test(pin)) {
            alert("PIN must be a 7-digit number.");
            return;
        }

        // Simulate registration
        if (username === FAKE_USER.username && pin === FAKE_USER.pin) {
            alert("Login successful!");
            setLoginStatus({ username });
            sessionStorage.setItem("loginStatus", JSON.stringify({ username }));
            navigate("/");
        } else {
            alert("Incorrect username or pin!");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Create an Account</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input id="username" type="text" className="form-control" ref={usernameRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pin" className="form-label">PIN (7-digit)</label>
                    <input id="pin" type="password" className="form-control" ref={pinRef} />
                </div>
                <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
        </div>
    );
}