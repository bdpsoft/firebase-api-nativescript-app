// Shared API client for both web and mobile platforms
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || "https://vas-api-server.com/secure-endpoint";

export async function callApiWithToken(idToken: string) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API call failed: ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        return jsonResponse;

    } catch (error) {
        console.error("Error calling API:", error);
        return { error: true, message: error.message };
    }
}