import "dotenv/config";
import fetch from "node-fetch";
const url = "https://api.openai.com/v1/chat/completions";

const question = "Explica como são cobrado os tokens pela a openai";

const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
};

const body = {
    'model': 'gpt-3.5-turbo',
    'temperature': 0,
    "messages": [{ role: "user", content: question }],
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
})
    .then((response) => response.json())
    .then((data) => {
    
        if (data.choices && data.choices.length > 0) {
            console.log(data.choices[0].message.content);
            console.log(data.usage.total_tokens + " Tokens gastos!");
        } else {
            console.error("No choices found in the response data.");
        }
        
    })
    .catch(console.error);
