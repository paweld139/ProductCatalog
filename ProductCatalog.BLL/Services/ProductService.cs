using Microsoft.EntityFrameworkCore;
using ProductCatalog.BLL.Interfaces;
using ProductCatalog.DAL;
using ProductCatalog.DAL.Entities;

namespace ProductCatalog.BLL.Services
{
    public class ProductService(ProductCatalogContext context) : IProductService
    {
        public Task<List<Product>> Get() => context.Products
            .Include(p => p.Tags)
            .ToListAsync();

        public Task<Product?> Get(int id) => context.Products
            .Include(p => p.Tags)
            .SingleOrDefaultAsync(p => p.Id == id);
    }
}
