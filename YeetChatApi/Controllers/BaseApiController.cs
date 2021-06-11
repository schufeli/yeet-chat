using Microsoft.AspNetCore.Mvc;
using YeetChatApi.Data;

namespace YeetChatApi.Controllers
{
    [Route("api/[controller]")]
    public abstract class BaseApiController : ControllerBase
    {
        public BaseApiController(
            ApplicationDbContext context)
        {
            DbContext = context;
        }

        protected ApplicationDbContext DbContext { get; private set; }
    }
}
