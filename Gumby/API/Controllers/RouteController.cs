using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using JimHill.Gumby.Persistance;
using JimHill.Gumby.Persistance.Model.Entities;

namespace JimHill.Gumby.API.Controllers
{
    [Route("api/v0/gumby/[controller]")]
    public class RouteController : Controller 
    {
        private readonly GumbyContext _context;

        public RouteController(GumbyContext context)
        {
            this._context = context;

            if(this._context.Routes.Count().Equals(0))
            {
                this._context.Routes.Add(new Route { Name = "Route1" });
                this._context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Route> GetAll()
        {
            return this._context.Routes.ToList();
        }

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(long id)
        {
            Route route = this._context.Routes.FirstOrDefault<Route>(r => r.Id.Equals(id));

            if(route == null)
            {
                return NotFound();
            }

            return new ObjectResult(route);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Route route)
        {
            if(route == null)
            {
                return BadRequest();
            }

            this._context.Routes.Add(route);
            this._context.SaveChanges();

            return CreatedAtRoute("GetById", new { id = route.Id }, route);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateComplete(long id, [FromBody] Route requestRoute)
        {
            if(requestRoute == null || !requestRoute.Id.Equals(id))
            {
                return BadRequest();
            }

            if(!requestRoute.IsComplete())
            {
                return BadRequest();
            }

            Route route = this._context.Routes.FirstOrDefault<Route>(r => r.Id.Equals(id));

            if(route == null)
            {
                return NotFound();
            }

            route.Update(requestRoute);

            this._context.Update(route);
            this._context.SaveChanges();

            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update(long id, [FromBody] Route requestRoute)
        {
            if (requestRoute == null || !requestRoute.Id.Equals(id))
            {
                return BadRequest();
            }

            Route route = this._context.Routes.FirstOrDefault<Route>(r => r.Id.Equals(id));

            if (route == null)
            {
                return NotFound();
            }

            route.Update(requestRoute);

            this._context.Update(route);
            this._context.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Route route = this._context.Routes.FirstOrDefault<Route>(c => c.Id.Equals(id));

            if (route == null)
            {
                return NotFound();
            }

            this._context.Routes.Remove(route);
            this._context.SaveChanges();

            return new NoContentResult();
        }


    }
}
