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
    public class AchievementDefinitionController : Controller 
    {
        private readonly GumbyContext _context;

        public AchievementDefinitionController(GumbyContext context)
        {
            this._context = context;

            if(this._context.AchievementDefinitions.Count().Equals(0))
            {
                this._context.AchievementDefinitions.Add(new AchievementDefinition { Name = "AchievementDefinition1" });
                this._context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<AchievementDefinition> GetAll()
        {
            return this._context.AchievementDefinitions.ToList();
        }

        [HttpGet("{id}", Name = "[controller]GetById")]
        public IActionResult GetById(long id)
        {
            AchievementDefinition achievementDefinition = this._context.AchievementDefinitions.FirstOrDefault<AchievementDefinition>(aD => aD.Id.Equals(id));

            if(achievementDefinition == null)
            {
                return NotFound();
            }

            return new ObjectResult(achievementDefinition);
        }

        [HttpPost]
        public IActionResult Create([FromBody] AchievementDefinition achievementDefinition)
        {
            if(achievementDefinition == null)
            {
                return BadRequest();
            }

            this._context.AchievementDefinitions.Add(achievementDefinition);
            this._context.SaveChanges();

            return CreatedAtRoute("[controller]GetById", new { id = achievementDefinition.Id }, achievementDefinition);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateComplete(long id, [FromBody] AchievementDefinition requestAchievementDefinition)
        {
            if(requestAchievementDefinition == null || !requestAchievementDefinition.Id.Equals(id))
            {
                return BadRequest();
            }

            if(!requestAchievementDefinition.IsComplete())
            {
                return BadRequest();
            }

            AchievementDefinition achievementDefinition = this._context.AchievementDefinitions.FirstOrDefault<AchievementDefinition>(aD => aD.Id.Equals(id));

            if(achievementDefinition == null)
            {
                return NotFound();
            }

            achievementDefinition.Update(requestAchievementDefinition);

            this._context.Update(achievementDefinition);
            this._context.SaveChanges();

            return new NoContentResult();
        }

        [HttpPatch("{id}")]
        public IActionResult Update(long id, [FromBody] AchievementDefinition requestAchievementDefinition)
        {
            if (requestAchievementDefinition == null || !requestAchievementDefinition.Id.Equals(id))
            {
                return BadRequest();
            }

            AchievementDefinition achievementDefinition = this._context.AchievementDefinitions.FirstOrDefault<AchievementDefinition>(aD => aD.Id.Equals(id));

            if (achievementDefinition == null)
            {
                return NotFound();
            }

            achievementDefinition.Update(requestAchievementDefinition);

            this._context.Update(achievementDefinition);
            this._context.SaveChanges();

            return new EmptyResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            AchievementDefinition achievementDefinition = this._context.AchievementDefinitions.FirstOrDefault<AchievementDefinition>(aD => aD.Id.Equals(id));

            if (achievementDefinition == null)
            {
                return NotFound();
            }

            this._context.AchievementDefinitions.Remove(achievementDefinition);
            this._context.SaveChanges();

            return new NoContentResult();
        }


    }
}
