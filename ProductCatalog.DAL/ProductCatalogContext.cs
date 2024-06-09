using Microsoft.EntityFrameworkCore;
using ProductCatalog.DAL.Entities;

namespace ProductCatalog.DAL
{
    public class ProductCatalogContext(DbContextOptions options) : DbContext(options)
    {
        public virtual DbSet<Product> Products { get; set; }

        public virtual DbSet<Dimensions> Dimensions { get; set; }

        public virtual DbSet<Image> Images { get; set; }

        public virtual DbSet<Meta> Metas { get; set; }

        public virtual DbSet<Review> Reviews { get; set; }

        public virtual DbSet<Tag> Tags { get; set; }
    }
}
