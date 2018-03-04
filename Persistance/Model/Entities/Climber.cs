
namespace JimHill.Gumby.Persistance.Model.Entities
{
    public class Climber
    {
        public long Id { get; set; }
        public string Nickname { get; set; }

        public bool IsComplete()
        {
            if(this.Nickname == null)
            {
                return false;
            }
            return true;
        }
        
        public void Update(Climber climber)
        {
            if(climber.Nickname != null)
            {
                this.Nickname = climber.Nickname;
            }
        }
    }
}
