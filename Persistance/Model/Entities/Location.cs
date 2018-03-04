
namespace JimHill.Gumby.Persistance.Model.Entities
{ 
    public class Location
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public bool IsComplete()
        {
            if (this.Name == null)
            {
                return false;
            }
            return true;
        }

        public void Update(Location location)
        {
            if (location.Name != null)
            {
                this.Name = location.Name;
            }
        }
    }
}
