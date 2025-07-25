namespace FinancialApp.DTOS.Comment
{
    public class CommentDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public string CreateBy { get; set; } = string.Empty;
        public Guid? StockId { get; set; }
    }
}
