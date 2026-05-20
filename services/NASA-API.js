const API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kon NASA-data niet ophalen.");
    }

    return response.json();
}

export async function getApod(apiKey = API_KEY) {
    return fetchJson(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
}

export async function getNeoObject(objectId = "3542519", apiKey = API_KEY) {
    return fetchJson(
        `https://api.nasa.gov/neo/rest/v1/neo/${objectId}?api_key=${apiKey}`,
    );
}