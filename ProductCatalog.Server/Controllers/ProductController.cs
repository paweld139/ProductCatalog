using Microsoft.AspNetCore.Mvc;
using ProductCatalog.BLL.Interfaces;

namespace ProductCatalog.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController(IProductService productService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await productService.Get();

            return Ok(result);
        }
    }
}
