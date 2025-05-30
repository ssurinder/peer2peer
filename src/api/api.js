const BASE_URL = "https://your-api.com/api";

export async function registerUser (data ){
    const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Registration failed");
    }
}

let loginUser =  async({ email, password }) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Login failed");
    }
  
    return res.json(); // should return token
} 