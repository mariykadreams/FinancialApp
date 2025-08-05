using FinancialApp.DTOS.Stock;
using FinancialApp.Interfaces;
using FinancialApp.Mappers;
using FinancialApp.Models;
using Newtonsoft.Json;

namespace FinancialApp.Service
{
    public class FMPService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var apiKey = _config["FMPKey"];
                // It's good practice to log or check if the API key is loaded
                if (string.IsNullOrEmpty(apiKey))
                {
                    Console.WriteLine("FMP API Key is missing from configuration.");
                    return null;
                }

                var result = await _httpClient.GetAsync($"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={apiKey}");

                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);

                    // CORRECTED: Check if the array contains any elements before accessing index 0
                    if (tasks != null && tasks.Length > 0)
                    {
                        var stock = tasks[0];
                        return stock.ToStockFromFMP();
                    }
                }

                // If the status code is not successful or the array is empty, return null
                return null;
            }
            catch (Exception e)
            {
                // This catch block will handle other exceptions, but the primary issue is now fixed.
                Console.WriteLine($"An error occurred in FMPService: {e}");
                return null;
            }
        }
    }
}
