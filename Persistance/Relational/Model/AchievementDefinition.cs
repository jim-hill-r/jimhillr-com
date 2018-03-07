
namespace JimHill.Gumby.Persistance.Relational.Model
{
    public class AchievementDefinition
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public bool IsComplete()
        {
            if(this.Name == null)
            {
                return false;
            }
            return true;
        }
        
        public void Update(AchievementDefinition achievementDefinition)
        {
            if(achievementDefinition.Name != null)
            {
                this.Name = achievementDefinition.Name;
            }
        }
    }
}
