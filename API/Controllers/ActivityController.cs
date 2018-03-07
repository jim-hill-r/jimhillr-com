using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using JimHill.Gumby.API.Model;

namespace Gumby.API.Controllers
{
    [Route("api/v0/[controller]")]
    public class ActivityController : Controller
    {
        public ActivityController()
        {
        }

        [HttpGet]
        public IEnumerable<Activity> GetAll()
        {
            return new List<Activity>();
        }

        [HttpGet("{id}", Name = "[controller]GetById")]
        public IActionResult GetById(long id)
        {
            Activity activity = new Activity();

            return new ObjectResult(activity);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Activity activity)
        {
            return CreatedAtRoute("[controller]GetById", new { id = activity.Id }, activity);
        }

        [HttpPut("{id}")]
        public IActionResult FullUpdate(long id, [FromBody] Activity requestActivity)
        {
            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update(long id, [FromBody] Activity requestActivity)
        {        
            return new EmptyResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            return new NoContentResult();
        }
    }
}
