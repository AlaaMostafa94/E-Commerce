using System.ComponentModel.DataAnnotations.Schema;

namespace ApiTest.DAL
{
    public class Order
    {
        public int ID { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly Time { get; set; }
        [ForeignKey("applicationUser")]
        public string UserId { get; set; }
        public virtual ApplicationUser applicationUser { get; set; }
        public virtual ICollection<Product> Products { get; set; }

    }
}
