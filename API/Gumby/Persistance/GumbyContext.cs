using Microsoft.EntityFrameworkCore;

using JimHill.API.Gumby.Model.Entities;

namespace JimHill.API.Gumby.Persistance
{
    public class GumbyContext : DbContext
    {
        public DbSet<Climber> Climbers { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Route> Routes { get; set; }

        public GumbyContext(DbContextOptions<GumbyContext> dbContextOption) : base(dbContextOption)
        {

        }

        
    }
}
