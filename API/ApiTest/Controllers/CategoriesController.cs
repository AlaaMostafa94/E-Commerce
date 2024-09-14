using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiTest.DAL;
using ApiTest.Repository;
using ApiTest.DTO;

namespace ApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public CategoriesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        [HttpGet]
        public  IActionResult GetCategories()
        {
            IEnumerable<Category> categories = _unitOfWork.CategoryRepo.GetAll();
            return Ok(categories);

        }

        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
            var category = _unitOfWork.CategoryRepo.GetById(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);

        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutCategory(int id, CategoryDTO categoryDto)
        {
            Category category = _unitOfWork.CategoryRepo.GetById(id);
            if (category == null)
            {
                return NotFound();
            }

            category.Name = categoryDto.Name;

            _unitOfWork.CategoryRepo.Update(category);

            try
            {
                _unitOfWork.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
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
        [HttpPost]
        public IActionResult PostCategory(CategoryDTO categoryDto)
        {
            Category category = new Category
            {
                Name = categoryDto.Name,
            };
            _unitOfWork.CategoryRepo.Add(category);
            int result = _unitOfWork.Save();

            if (result == 1)
            {
                return Created();

            }
            else
            {
                return BadRequest(category);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var category = _unitOfWork.CategoryRepo.GetById(id);
            if (category == null)
            {
                return NotFound();
            }

            _unitOfWork.CategoryRepo.Remove(category);
            int result = _unitOfWork.Save();
            if (result == 1)
            {
                return NoContent();

            }
            return BadRequest();
        }

        private bool CategoryExists(int id)
        {
            Category category = _unitOfWork.CategoryRepo.Find(c => c.ID == id).FirstOrDefault();
            return category != null;
        }
    }
}
