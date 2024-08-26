using ApiTest.DAL;
using Microsoft.EntityFrameworkCore;

namespace ApiTest.Repository
{
    public class CategoryRepository : GenericRepository<Category>,ICategoryRepository
    {
        public CategoryRepository(ApplicationDbContext context) : base(context) { }
    }
}
