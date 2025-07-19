using FinancialApp.Models;

namespace FinancialApp.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
