namespace ProductCatalog.DAL.Entities
{
    public class Meta
    {
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public required string Barcode { get; set; }

        public required string QrCode { get; set; }
    }
}
