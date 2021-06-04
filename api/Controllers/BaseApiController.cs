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

        #region Methods
        // return HTTP Status 500 if client pyload is invalid
        public StatusCodeResult ValidateClientPayload(Object model)
        {
            if (model == null) return new StatusCodeResult(500);
            else return new StatusCodeResult(200);
        }

        // return HTTP Status 404 if entity was not found
        public StatusCodeResult ValidateEntityExistence(Object model)
        {
            if (model == null) return new StatusCodeResult(404);
            else return new StatusCodeResult(200);
        }
        #endregion

        #region Properties
        protected ApplicationDbContext DbContext { get; private set; }
        protected JsonSerializerSettings JsonSettings { get; private set; }
        #endregion
    }
}
