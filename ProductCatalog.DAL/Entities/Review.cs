namespace ProductCatalog.DAL.Entities
{
    public class Review
    {
        public int Id { get; set; }

        public int Rating { get; set; }

        public required string Comment { get; set; }

        public DateTime Date { get; set; }

        public required string ReviewerName { get; set; }

        public required string ReviewerEmail { get; set; }
    }
}
