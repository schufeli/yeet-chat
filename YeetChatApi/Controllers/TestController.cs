using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YeetChatApi.Data;
using YeetChatApi.Services;

namespace YeetChatApi.Controllers
{
    public class TestController : BaseApiController
    {
        private IMessageService MessageService { get; }
        public TestController( 
            ApplicationDbContext context,
            IMessageService messageService) : base(context) 
        {
            MessageService = messageService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            // MessageService.SaveMessage("penis", "penis", "penis");

            return new OkResult();
        }
    }
}
