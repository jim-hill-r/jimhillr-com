
namespace JimHill.API.Gumby.Model.Entities
{
    public class Route
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

        public void Update(Route route)
        {
            if(route.Name != null)
            {
                this.Name = route.Name;
            }
        }
    }
}
