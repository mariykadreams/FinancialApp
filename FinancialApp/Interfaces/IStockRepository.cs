using FinancialApp.DTOS.Stock;
using FinancialApp.Models;

namespace FinancialApp.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsyc();
        Task<Stock?> GetByIdAsync(Guid id);
        Task<Stock?> GetBySymbolAsync(string symbol);
        Task<Stock> CreateAsync(Stock stockModel);
        Task<Stock?> UpdateAsync(Guid id, UpdateStockRequestDto stockDto);
        Task<Stock?> DeleteAsync(Guid id);
        // Task<bool> StockExists(Guid id);

    }
}
