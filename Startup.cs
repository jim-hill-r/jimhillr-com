using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

using JimHill.Gumby.Persistance;
using Swashbuckle.AspNetCore.Swagger;

namespace JimHill
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<GumbyContext>(opt => opt.UseInMemoryDatabase("Gumby"));
            services.AddMvc();

            services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v0", new Info { Title = "Jim Hill API", Version = "v0" });
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc();

            app.UseSwagger();

            app.UseSwaggerUI(opt =>
            {
                opt.SwaggerEndpoint("/swagger/v0/swagger.json", "Jim Hill API v0");
            });
        }
    }
}
