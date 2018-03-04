using Microsoft.EntityFrameworkCore;

using JimHill.Gumby.Persistance.Model.Entities;

namespace JimHill.Gumby.Persistance
{
    public class GumbyContext : DbContext
    {
        public DbSet<AchievementDefinition> AchievementDefinitions { get; set; }
        public DbSet<Climber> Climbers { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Route> Routes { get; set; }

        public GumbyContext(DbContextOptions<GumbyContext> dbContextOption) : base(dbContextOption)
        {

        }

        
    }
}
