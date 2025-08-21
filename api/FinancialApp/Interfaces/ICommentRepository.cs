using FinancialApp.Helpers;
using FinancialApp.Models;

namespace FinancialApp.Interfaces
{
    public interface ICommentRepository
    {
        Task<List<Comment>> GetAllAsync(CommentQueryObject queryObject);
        Task<Comment?> GetByIdAsync(Guid id);
        Task<Comment> CreateAsync(Comment commentModel);
        Task<Comment?> UpdateAsync(Guid id, Comment commentModel);
        Task<Comment?> DeleteAsync(Guid id);
        
    }
}
