using ApiTest.DAL;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace ApiTest.Repository
{
    public class GenericRepository<T>:IGenericRepository<T> where T: class
    {
        protected readonly ApplicationDbContext context;
        public GenericRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public void Add(T entity)
        {
            context.Set<T>().Add(entity);
        }

        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            return context.Set<T>().Where(expression);
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>().ToList();
        }

        public T GetById(int id)
        {
            return context.Set<T>().Find(id);
        }

        public void Remove(T entity)
        {
            context.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;

        }
    }
}
