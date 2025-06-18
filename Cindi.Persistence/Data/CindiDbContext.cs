using Cindi.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Persistence.Data
{
    public class CindiDbContext : DbContext
    {
        public CindiDbContext(DbContextOptions<CindiDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(typeof(CindiDbContext).Assembly);
        }
        public DbSet<Card> Cards { get; set; }
        public DbSet<CardActivity> CardActivities { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
