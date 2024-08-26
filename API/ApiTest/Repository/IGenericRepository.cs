using System.Linq.Expressions;

namespace ApiTest.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable <T> GetAll();
        T GetById(int id);
        IEnumerable<T> Find(Expression<Func<T, bool>> expression);
        void Add(T entity);
        void Remove(T entity);
    }
}
