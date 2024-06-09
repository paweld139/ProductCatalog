using ProductCatalog.DAL.Entities;

namespace ProductCatalog.DAL.Models
{
    public class ProductsModel
    {
        public required List<Product> Products { get; set; }
    }
}
