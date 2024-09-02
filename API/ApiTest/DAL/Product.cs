using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ApiTest.DAL;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.EntityFrameworkCore;

namespace ApiTest.DAL
{
    public class Product
    {
        public int ID { get; set; }
        [Required]
        [MinLength(3,ErrorMessage ="Product name must be at least 3 characters")]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public int AvailableQuantity { get; set; }
        public double Price { get; set; }
        //public string? Image {  get; set; }
        [ForeignKey("Category")]
        public int CategoryID { get; set; }
        public virtual Category? Category { get; set; }
        public virtual ICollection<Order>? Orders { get; set; }
    }


//public static class ProductEndpoints
//{
//	public static void MapProductEndpoints (this IEndpointRouteBuilder routes)
//    {
//        var group = routes.MapGroup("/api/Product").WithTags(nameof(Product));

//        group.MapGet("/", async (ApplicationDbContext db) =>
//        {
//            return await db.Products.ToListAsync();
//        })
//        .WithName("GetAllProducts")
//        .WithOpenApi();

//        group.MapGet("/{id}", async Task<Results<Ok<Product>, NotFound>> (int id, ApplicationDbContext db) =>
//        {
//            return await db.Products.AsNoTracking()
//                .FirstOrDefaultAsync(model => model.ID == id)
//                is Product model
//                    ? TypedResults.Ok(model)
//                    : TypedResults.NotFound();
//        })
//        .WithName("GetProductById")
//        .WithOpenApi();

//        group.MapPut("/{id}", async Task<Results<Ok, NotFound>> (int id, Product product, ApplicationDbContext db) =>
//        {
//            var affected = await db.Products
//                .Where(model => model.ID == id)
//                .ExecuteUpdateAsync(setters => setters
//                  .SetProperty(m => m.ID, product.ID)
//                  .SetProperty(m => m.Name, product.Name)
//                  .SetProperty(m => m.Description, product.Description)
//                  .SetProperty(m => m.AvailableQuantity, product.AvailableQuantity)
//                  .SetProperty(m => m.Price, product.Price)
//                  .SetProperty(m => m.Image, product.Image)
//                  .SetProperty(m => m.CategoryID, product.CategoryID)
//                  );
//            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
//        })
//        .WithName("UpdateProduct")
//        .WithOpenApi();

//        group.MapPost("/", async (Product product, ApplicationDbContext db) =>
//        {
//            db.Products.Add(product);
//            await db.SaveChangesAsync();
//            return TypedResults.Created($"/api/Product/{product.ID}",product);
//        })
//        .WithName("CreateProduct")
//        .WithOpenApi();

//        group.MapDelete("/{id}", async Task<Results<Ok, NotFound>> (int id, ApplicationDbContext db) =>
//        {
//            var affected = await db.Products
//                .Where(model => model.ID == id)
//                .ExecuteDeleteAsync();
//            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
//        })
//        .WithName("DeleteProduct")
//        .WithOpenApi();
//    }
//}
}
