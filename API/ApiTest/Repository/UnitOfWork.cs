using ApiTest.DAL;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using System.Net;
using System;

namespace ApiTest.Repository
{
    public class UnitOfWork:IUnitOfWork
    {
        private ApplicationDbContext context;
        public ICategoryRepository CategoryRepo { get; private set; }
      
        public UnitOfWork(ApplicationDbContext context)
        {
            this.context = context;
            CategoryRepo = new CategoryRepository(this.context);
        }


        public void Dispose()
        {
            context.Dispose();
        }
        public int Save()
        {
            return context.SaveChanges();
        }
    }
}
