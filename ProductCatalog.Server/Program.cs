using ProductCatalog.BLL.Interfaces;
using ProductCatalog.BLL.Services;
using ProductCatalog.DAL;

namespace ProductCatalog.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var services = builder.Services;

            var configuration = builder.Configuration;

            services.AddControllers();

            services.AddEndpointsApiExplorer();

            services.AddSwaggerGen();

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            services.AddNpgsql<ProductCatalogContext>(connectionString);

            services.AddScoped<ProductCatalogSeeder>();

            services.AddHttpClient();

            services.AddScoped<IProductService, ProductService>();

            var app = builder.Build();

            using var scope = app.Services.CreateScope();

            var seeder = scope.ServiceProvider.GetRequiredService<ProductCatalogSeeder>();

            seeder.Seed().Wait();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();

                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
