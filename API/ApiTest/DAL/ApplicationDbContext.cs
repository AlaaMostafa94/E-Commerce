using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ApiTest.DAL
{
    public class ApplicationUser : IdentityUser
    {
        public DateOnly? BirthDate { get; set; }

    }
    public class ApplicationDbContext:IdentityDbContext<ApplicationUser>
    {
  

        public ApplicationDbContext(DbContextOptions options):base(options) 
        { 
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}
