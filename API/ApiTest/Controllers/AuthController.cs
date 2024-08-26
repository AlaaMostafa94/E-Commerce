using ApiTest.DAL;
using ApiTest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;

        public AuthController(UserManager<ApplicationUser> userManager) 
        { 
            _userManager = userManager;
        }

        private string GenerateToken(List<Claim> Claims)
        {
            var SecretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ixh9kt9TOFhBM8PLUtSFtyr3e03C-HoA6CHY0k30jbo"));
            var SigninCredintials = new SigningCredentials(SecretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(issuer: "https://localhost:5027", audience: "https://localhost:5027",
                                                   claims: Claims,
                                                   expires: DateTime.Now.AddMinutes(5),
                                                   signingCredentials: SigninCredintials);
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return tokenString;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email, 
                BirthDate = model.BirthDate,
                UserName=model.Username

            };
            if (ModelState.IsValid)
            {
                IdentityResult result = await _userManager.CreateAsync(user,model.Password);
                if (result.Succeeded)
                {

                    string tokenString=GenerateToken(new List<Claim>());
                    return Ok(new { Token = tokenString });

                }
                else
                {
                    foreach (var item in result.Errors)
                    {
                        ModelState.AddModelError("", item.Description);
                    }
                    return BadRequest(model);
                }

            }

            return BadRequest();


        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {

            if (model == null)
            {
                return BadRequest("Invalid request");
            }

                ApplicationUser? applicationUser = await _userManager.FindByEmailAsync(model.Email);
            if (applicationUser == null)
            {
                ModelState.AddModelError("", "Email or password is not correct");
                return BadRequest();
            }
            
                bool userExists = await _userManager.CheckPasswordAsync(applicationUser, model.Password);
            //bool IsAdmin = await _userManager.IsInRoleAsync(applicationUser, "Admin");
            if (userExists)// && IsAdmin)
            {

                //List<Claim> claims = new List<Claim>
                //{
                //    new Claim(ClaimTypes.Email,model.Email),
                //    new Claim(ClaimTypes.Role,"Admin")
                    
                //};

                string tokenString = GenerateToken(new List<Claim>());
                return Ok(new { Token = tokenString });
            }
            ModelState.AddModelError("", "Email or password is not correct");
            return BadRequest(model);
            

            

        }
    }
}
