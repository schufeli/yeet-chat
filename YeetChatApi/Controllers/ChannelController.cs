using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using YeetChatApi.Data;
using YeetChatApi.Models;
using YeetChatApi.ViewModels;

namespace YeetChatApi.Controllers
{
    public class ChannelController : BaseApiController
    {
        public ChannelController(ApplicationDbContext context) : base(context) { }

        /// <summary>
        /// Fetch specific Channel by Id
        /// </summary>
        /// <param name="id"> Channel Id </param>
        /// <returns> ChannelViewModel </returns>
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var channel = DbContext.Channels
                .Where(c => c.Id == id)
                    .Include(c => c.Messages)
                    .FirstOrDefault();

            return new JsonResult(channel.Adapt<ChannelViewModel>());
        }

        /// <summary>
        /// Fetch all Channels
        /// </summary>
        /// <returns> ChannelViewModel List </returns>
        [HttpGet]
        public IActionResult Get()
        {
            var channels = DbContext.Channels
                .ToList();

            return new JsonResult(channels.Adapt<ChannelViewModel[]>().ToList());
        }

        /// <summary>
        /// Create new Channel
        /// </summary>
        /// <param name="viewModel"> ChannelViewModel </param>
        /// <returns> HTTP 201 Created </returns>
        [HttpPost]
        public IActionResult Post([FromBody] ChannelViewModel viewModel)
        {
            // Validate client payload
            if (viewModel == null) return new StatusCodeResult(500);

            viewModel.Id = Guid.NewGuid();

            DbContext.Channels
                .Add(viewModel.Adapt<Channel>());

            DbContext.SaveChanges();

            return new StatusCodeResult(201);
        }
    }
}
