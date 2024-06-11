using ProductCatalog.DAL.Entities;

namespace ProductCatalog.BLL.Interfaces
{
    public interface IProductService
    {
        Task<List<Product>> Get();
        Task<Product?> Get(int id);
    }
}