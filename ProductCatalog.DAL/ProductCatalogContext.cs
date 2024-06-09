using Microsoft.EntityFrameworkCore;

namespace ProductCatalog.DAL
{
    public class ProductCatalogContext(DbContextOptions options) : DbContext(options)
    {
    }
}
