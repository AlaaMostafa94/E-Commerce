using ApiTest.DAL;

namespace ApiTest.Repository
{
    public class ProductRepository:GenericRepository<Product>,IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context) { }


    }
}
