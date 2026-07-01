const API_URL = "https://nyres-backend.onrender.com/api/auth";

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Please fill all fields!");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            // ⚠️ Your backend does NOT send res.status properly
            if (data.token) {
                alert("Login successful ✅");

                localStorage.setItem("token", data.token);

                window.location.href = "dashboard.html";
            } else {
                alert(data.message || "Login failed ❌");
            }

        } catch (err) {
            console.error("Login error:", err);
            alert("Server error ❌");
        }
    });
}


// ================= REGISTER =================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !email || !password) {
            alert("Please fill all fields!");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

           
            if (data.message === "User registered successfully"){
                window.location.href = "index.html";
            } else {
                alert(data.message || "Registration failed ❌");
            }

        } catch (err) {
            console.error("Register error:", err);
            alert("Server error ❌");
        }
    });
}