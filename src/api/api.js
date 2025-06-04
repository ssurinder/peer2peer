const BASE_URL = "https://api.coinp2ptrader.com/api/";
// const BASE_URL = "http://192.168.1.3:8800/api/";

export async function registerUser (data ){
    console.log(' data is '  , data)
    const res = await fetch(`${BASE_URL}user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json(); 
}

export async function loginUser (data){ 
    const res = await fetch(`${BASE_URL}user/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); 
    return res.json(); 
}  

export async function verifySignup (data){ 
    const res = await fetch(`${BASE_URL}user/verifySignup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); 
    return res.json(); 
}  

export async function resendVierifyOtpMail (data){ 
    const res = await fetch(`${BASE_URL}user/resendOtp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json(); 
} 

export async function forgotPassword (data){
    const res = await fetch(`${BASE_URL}user/forgotPassword`,{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    return res.json(); 
}
export async function validateSponser (sponserId){
    const res = await fetch(`${BASE_URL}user/getUser?userId=`+sponserId,{
        method:"GET",
        headers:{ "Content-Type": "application/json" },
    })
    return res.json()
}