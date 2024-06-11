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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await productService.Get(id);

            if (result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
