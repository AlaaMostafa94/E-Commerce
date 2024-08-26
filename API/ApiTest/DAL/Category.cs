using System.ComponentModel.DataAnnotations;

namespace ApiTest.DAL
{
    public class Category
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
