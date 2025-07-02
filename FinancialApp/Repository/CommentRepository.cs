using FinancialApp.Data;
using FinancialApp.Interfaces;
using FinancialApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FinancialApp.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext _context;
        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<Comment> CreateAsync(Comment commentModel)
        {
            throw new NotImplementedException();
        }

        public Task<Comment?> DeleteAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.ToListAsync();
        }

        public Task<Comment?> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Comment?> UpdateAsync(Guid id, Comment commentModel)
        {
            throw new NotImplementedException();
        }
    }
}
