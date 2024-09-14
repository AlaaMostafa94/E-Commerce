using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiTest.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using ApiTest.Repository;
using ApiTest.DTO;

namespace ApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes=JwtBearerDefaults.AuthenticationScheme)]
    public class ProductsController : ControllerBase
    {

        private readonly IUnitOfWork _unitOfWork;
        public ProductsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

  

        [HttpGet]
        public IActionResult GetProducts()
        {
            IEnumerable<Product> products = _unitOfWork.ProductRepo.GetAll();
            return Ok(products);

        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _unitOfWork.ProductRepo.GetById(id); 

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpGet("GetProductsByCategory/{CategoryId}")]
        
        public IActionResult GetProductByCategoryId(int CategoryId)
        {
            var products = _unitOfWork.ProductRepo.Find(p => p.CategoryID == CategoryId);
            if (products==null)
            {
                return NoContent();
            }
            else
            {
                return Ok(products);
            }
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutProduct(int id, ProductDTO productDto)
        {
            Product product = _unitOfWork.ProductRepo.GetById(id);
            if (product == null)
            {
                return NotFound();
            }
            product.AvailableQuantity = productDto.AvailableQuantity;
            product.CategoryID = productDto.CategoryID;
            product.Description= productDto.Description;
            product.Price = productDto.Price;
            product.Name = productDto.Name;

            _unitOfWork.ProductRepo.Update(product); 

            try
            {
                _unitOfWork.Save(); 
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[Authorize]
        [HttpPost]
        public IActionResult PostProduct(ProductDTO productDto)
        {
            Product product = new Product()
            {
                AvailableQuantity = productDto.AvailableQuantity,
                CategoryID = productDto.CategoryID,
                Description= productDto.Description,
                Name = productDto.Name,
                Price = productDto.Price
            };
            _unitOfWork.ProductRepo.Add(product);
            int result = _unitOfWork.Save();
            if (result == 1)
            {
                return Created();
            }

            return BadRequest(product);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _unitOfWork.ProductRepo.GetById(id); 
            if (product == null)
            {
                return NotFound();
            }

            _unitOfWork.ProductRepo.Remove(product);
            int result = _unitOfWork.Save();
            if(result == 1)
            {
                return Ok();
            }
            return BadRequest();
        }

        private bool ProductExists(int id)
        {
            Product product = _unitOfWork.ProductRepo.Find(c => c.ID == id).FirstOrDefault();
            return product != null;
        }
    }
}
