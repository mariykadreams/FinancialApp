using FinancialApp.Models;

namespace FinancialApp.Interfaces
{
    public interface IFMPService
    {
        Task<Stock> FindStockBySymbolAsync(string symbol);
    }
}
