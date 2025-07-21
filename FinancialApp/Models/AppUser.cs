﻿using Microsoft.AspNetCore.Identity;

namespace FinancialApp.Models
{
    public class AppUser : IdentityUser
    {
        public List<Portfolio> Portfolios { get; set; } = new List<Portfolio>();
    }
}
