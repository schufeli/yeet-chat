using api.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        #region Constructor
        public BaseApiController(
            ApplicationDbContext context)
        {
            DbContext = context;

            JsonSettings = new JsonSerializerSettings()
            {
                Formatting = Formatting.Indented
            };
        }
        #endregion

        #region Properties
        protected ApplicationDbContext DbContext { get; private set; }
        protected JsonSerializerSettings JsonSettings { get; private set; }
        #endregion
    }
}
