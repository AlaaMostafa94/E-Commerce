using ApiTest.DAL;
using System;

namespace ApiTest.Repository
{
    public interface IUnitOfWork:IDisposable
    {


        public ICategoryRepository CategoryRepo {  get; }
        public IProductRepository ProductRepo { get; }
        int Save();


    }
}
