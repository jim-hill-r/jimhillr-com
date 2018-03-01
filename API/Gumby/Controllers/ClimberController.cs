using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using JimHill.API.Gumby.Models;
using JimHill.API.Gumby.Persistance;

namespace JimHill.API.Gumby.Controllers
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

        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(long id)
        {
            Climber climber = this._context.Climbers.FirstOrDefault<Climber>(c => c.Id.Equals(id));

            if(climber == null)
            {
                return NotFound();
            }

            return new ObjectResult(climber);
        }
    }
}
