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
    public class ClimberController : Controller 
    {
        private readonly GumbyContext _context;

        public ClimberController(GumbyContext context)
        {
            this._context = context;

            if(this._context.Climbers.Count().Equals(0))
            {
                this._context.Climbers.Add(new Climber { Nickname = "Climber1" });
                this._context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Climber> GetAll()
        {
            return this._context.Climbers.ToList();
        }

        [HttpGet("{id}", Name = "[controller]GetById")]
        public IActionResult GetById(long id)
        {
            Climber climber = this._context.Climbers.FirstOrDefault<Climber>(c => c.Id.Equals(id));

            if(climber == null)
            {
                return NotFound();
            }

            return new ObjectResult(climber);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Climber climber)
        {
            if(climber == null)
            {
                return BadRequest();
            }

            this._context.Climbers.Add(climber);
            this._context.SaveChanges();

            return CreatedAtRoute("[controller]GetById", new { id = climber.Id }, climber);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateComplete(long id, [FromBody] Climber requestClimber)
        {
            if(requestClimber == null || !requestClimber.Id.Equals(id))
            {
                return BadRequest();
            }

            if(!requestClimber.IsComplete())
            {
                return BadRequest();
            }

            Climber climber = this._context.Climbers.FirstOrDefault<Climber>(c => c.Id.Equals(id));

            if(climber == null)
            {
                return NotFound();
            }

            climber.Update(requestClimber);

            this._context.Update(climber);
            this._context.SaveChanges();

            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update(long id, [FromBody] Climber requestClimber)
        {
            if (requestClimber == null || !requestClimber.Id.Equals(id))
            {
                return BadRequest();
            }

            Climber climber = this._context.Climbers.FirstOrDefault<Climber>(c => c.Id.Equals(id));

            if (climber == null)
            {
                return NotFound();
            }

            climber.Update(requestClimber);

            this._context.Update(climber);
            this._context.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Climber climber = this._context.Climbers.FirstOrDefault<Climber>(c => c.Id.Equals(id));

            if (climber == null)
            {
                return NotFound();
            }

            this._context.Climbers.Remove(climber);
            this._context.SaveChanges();

            return new NoContentResult();
        }


    }
}
