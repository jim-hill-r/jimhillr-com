using Microsoft.EntityFrameworkCore;

using JimHill.Gumby.Persistance.Relational.Model;

namespace JimHill.Gumby.Persistance.Relational
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
