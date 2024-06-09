using Microsoft.EntityFrameworkCore;

namespace ProductCatalog.DAL
{
    public class ProductCatalogSeeder(ProductCatalogContext context)
    {
        public async Task Seed()
        {
            var pendingMigrations = await context.Database.GetPendingMigrationsAsync();

            var canMigrate = pendingMigrations.Any();

            if (canMigrate)
                await context.Database.MigrateAsync();
        }
    }
}
