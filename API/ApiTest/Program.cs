using ApiTest.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ApiTest.Controllers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using ApiTest.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "https://localhost:5027",
        ValidAudience = "https://localhost:5027",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ixh9kt9TOFhBM8PLUtSFtyr3e03C-HoA6CHY0k30jbo"))
    };
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(item => item.UseSqlServer("server=DESKTOP-D4M4S6G\\SQLEXPRESS; database=TestApp;Trusted_Connection=True;TrustServerCertificate=True"));
builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(opt => {
    opt.Password.RequireNonAlphanumeric = false;

}

).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
//builder.Services.AddAuthorization(opt => opt.AddPolicy("Default", new AuthorizationPolicyBuilder()
//        .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
//        .RequireAuthenticatedUser()
//        .Build())
//);
builder.Services.AddCors();
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("EnableCORS", builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
//});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});
//app.UseCors("EnableCORS");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapProductEndpoints();

app.Run();
