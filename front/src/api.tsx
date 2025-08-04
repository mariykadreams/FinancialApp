import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyKeyRatios,
  CompanyProfile,
  CompanySearch,
} from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    console.log("API Key loaded:", apiKey);

    if (!apiKey) {
      console.error(
        "API Key is not defined. Please set REACT_APP_API_KEY in your .env file."
      );
      return "API Key is missing.";
    }

    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error message: ", error.message);
      return `Failed to fetch companies: ${error.message}`;
    } else {
      console.error("Unexpected error: ", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getCompanyProfile = async (query: string) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getKeyMetrics = async (query: string) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?limit=40&apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${apiKey}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};