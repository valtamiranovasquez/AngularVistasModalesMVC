using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularVistasModalesMVC.Startup))]
namespace AngularVistasModalesMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
