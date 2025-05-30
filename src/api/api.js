const BASE_URL = "https://api.coinp2ptrader.com/api/";

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

export async function loginUser (data){ 
    const res = await fetch(`${BASE_URL}user/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log('now we inside login ' ,res)
    return res.json();
    // if (!res.ok) {
    //   const error = await res.json();
    //   throw new Error(error.message || "Login failed");
    // }
  
    // return res.json(); // should return token
} 