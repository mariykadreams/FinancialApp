namespace FinancialApp.Models
{
    public class Comment
    {
        public Guid? StockId { get; set; }
        //Navigation property
        public Stock? Stock { get; set; }
    }
}
