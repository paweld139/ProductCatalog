using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProductCatalog.DAL.Entities
{
    public class Product
    {
        public int Id { get; set; }

        public required string Title { get; set; }

        public required string Description { get; set; }

        public required string Category { get; set; }

        public float Price { get; set; }

        public float DiscountPercentage { get; set; }

        public float Rating { get; set; }

        public int Stock { get; set; }

        [NotMapped]
        [JsonPropertyName(nameof(Tags))]
        public string[]? TagsArray { get; set; }

        [JsonPropertyName("tagsCollection")]
        public virtual ICollection<Tag>? Tags { get; set; }

        public string? Brand { get; set; }

        public required string Sku { get; set; }

        public int Weight { get; set; }

        public required Dimensions Dimensions { get; set; }

        public required string WarrantyInformation { get; set; }

        public required string ShippingInformation { get; set; }

        public required string AvailabilityStatus { get; set; }

        public virtual ICollection<Review>? Reviews { get; set; }

        public required string ReturnPolicy { get; set; }

        public int MinimumOrderQuantity { get; set; }

        public required Meta Meta { get; set; }

        [NotMapped]
        [JsonPropertyName(nameof(Images))]
        public string[]? ImagesArray { get; set; }

        [JsonPropertyName("imagesCollection")]
        public virtual ICollection<Image>? Images { get; set; }

        public required string Thumbnail { get; set; }
    }
}
