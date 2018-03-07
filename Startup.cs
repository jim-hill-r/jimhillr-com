using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

using JimHill.Gumby.Persistance.Relational;
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
                opt.SwaggerDoc("v0", new Info { Title = "Gumby API", Version = "v0" });
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();

            app.UseSwagger(opt =>
            {
                opt.RouteTemplate = "api/{documentName}/swagger.json";
            });

            app.UseSwaggerUI(opt =>
            {
                opt.SwaggerEndpoint("/api/v0/swagger.json", "Gumby API v0");
                opt.RoutePrefix = "api";
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            
        }
    }
}
