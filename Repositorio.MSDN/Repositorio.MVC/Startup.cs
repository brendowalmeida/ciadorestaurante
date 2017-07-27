using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Repositorio.MVC.Startup))]
namespace Repositorio.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
