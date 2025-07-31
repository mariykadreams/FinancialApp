import axios from "axios"
import { CompanySearch } from "./company"

interface SearchResponse{
    data:CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    // Access the API key from the environment variables.
    // Ensure REACT_APP_API_KEY is defined in your .env file
    // (e.g., REACT_APP_API_KEY=YOUR_ACTUAL_API_KEY)
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    console.log("API Key loaded:", apiKey);

    // Check if the API key is available
    if (!apiKey) {
      console.error("API Key is not defined. Please set REACT_APP_API_KEY in your .env file.");
      return "API Key is missing.";
    }

    // Construct the API URL with the dynamic query and API key
    const response = await axios.get<CompanySearch[]>( // Changed to CompanySearch[] as the API returns an array directly
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
    );

    // The API returns an array directly, so we return response.data
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error message: ", error.message);
      // Return a user-friendly error message or re-throw for higher-level handling
      return `Failed to fetch companies: ${error.message}`;
    } else {
      console.error("Unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};