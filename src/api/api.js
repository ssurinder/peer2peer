const BASE_URL = "https://api.coinp2ptrader.com/api/";
// const BASE_URL = "http://192.168.1.5:8800/api/";

// const TOKEN = localStorage.getItem("auth_token");



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
export async function CreateDeal (data ){
   const TOKEN = localStorage.getItem("auth_token");
    console.log({TOKEN});
    
    const res = await fetch(`${BASE_URL}user/createDeal`,{
        method:"POST",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    
        body: JSON.stringify(data),
    })
    return res.json()
}
export async function myDeals (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/myDeals`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    console.log({res});
    
    return res.json()
}
export async function getWalletAddress (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/getWalletAddress`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    return res.json()
}
export async function depositTxn (){
    const TOKEN = localStorage.getItem("auth_token");
    const res = await fetch(`${BASE_URL}user/depositTxn`,{
        method:"GeT",
        headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    })
    return res.json()
}