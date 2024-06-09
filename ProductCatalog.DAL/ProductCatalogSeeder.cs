using Microsoft.EntityFrameworkCore;
using ProductCatalog.DAL.Entities;
using ProductCatalog.DAL.Models;
using System.Net.Http.Json;
using System.Text.Json;

namespace ProductCatalog.DAL
{
    public class ProductCatalogSeeder(ProductCatalogContext context, IHttpClientFactory httpClientFactory)
    {
        private readonly HttpClient httpClient = httpClientFactory.CreateClient();

        private async Task Migrate()
        {
            var pendingMigrations = await context.Database.GetPendingMigrationsAsync();

            var canMigrate = pendingMigrations.Any();

            if (canMigrate)
                await context.Database.MigrateAsync();
        }

        private async Task SeedProducts()
        {
            var exists = await context.Products.AnyAsync();

            if (exists)
                return;

            var url = "https://dummyjson.com/products";

            var result = await httpClient.GetFromJsonAsync<ProductsModel>(url, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (result is null)
                return;

            result.Products.ForEach(p =>
            {
                p.Id = 0;

                p.Images = p.ImagesArray?
                    .Select(i => new Image
                    {
                        Url = i
                    })
                    .ToList();

                p.Tags = p.TagsArray?
                    .Select(t => new Tag
                    {
                        Name = t
                    })
                    .ToList();
            });

            context.Products.AddRange(result.Products);

            await context.SaveChangesAsync();
        }

        public async Task Seed()
        {
            await Migrate();

            await SeedProducts();
        }
    }
}
