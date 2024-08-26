using System.ComponentModel.DataAnnotations;

namespace ApiTest.Models
{
    public class RegisterModel
    {
        
        public string Email {  get; set; }
        public string Username { get; set; }
        public DateOnly BirthDate { get; set; }
        public string Password { get; set; }
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
    }
}
