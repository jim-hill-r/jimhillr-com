using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using JimHill.Gumby.Persistance.Relational;
using JimHill.Gumby.Persistance.Relational.Model;

namespace JimHill.Gumby.API.Controllers
{
    [Route("api/v0/[controller]")]
    public class LocationController : Controller 
    {
        private readonly GumbyContext _context;

        public LocationController(GumbyContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Location> GetAll()
        {
            return this._context.Locations.ToList();
        }

        [HttpGet("{id}", Name = "[controller]GetById")]
        public IActionResult GetById(long id)
        {
            Location location = this._context.Locations.FirstOrDefault<Location>(loc => loc.Id.Equals(id));

            if(location == null)
            {
                return NotFound();
            }

            return new ObjectResult(location);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Location location)
        {
            if(location == null)
            {
                return BadRequest();
            }

            this._context.Locations.Add(location);
            this._context.SaveChanges();

            return CreatedAtRoute("[controller]GetById", new { id = location.Id }, location);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateComplete(long id, [FromBody] Location requestLocation)
        {
            if(requestLocation == null || !requestLocation.Id.Equals(id))
            {
                return BadRequest();
            }

            if(!requestLocation.IsComplete())
            {
                return BadRequest();
            }

            Location location = this._context.Locations.FirstOrDefault<Location>(loc => loc.Id.Equals(id));

            if(location == null)
            {
                return NotFound();
            }

            location.Update(requestLocation);

            this._context.Update(location);
            this._context.SaveChanges();

            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update(long id, [FromBody] Location requestLocation)
        {
            if (requestLocation == null || !requestLocation.Id.Equals(id))
            {
                return BadRequest();
            }

            Location location = this._context.Locations.FirstOrDefault<Location>(loc => loc.Id.Equals(id));

            if (location == null)
            {
                return NotFound();
            }

            location.Update(requestLocation);

            this._context.Update(location);
            this._context.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Location location = this._context.Locations.FirstOrDefault<Location>(loc => loc.Id.Equals(id));

            if (location == null)
            {
                return NotFound();
            }

            this._context.Locations.Remove(location);
            this._context.SaveChanges();

            return new NoContentResult();
        }


    }
}
