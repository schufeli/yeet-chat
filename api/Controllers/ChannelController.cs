using api.Data;
using api.Models;
using api.ViewModels;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace api.Controllers
{
    public class ChannelController : BaseApiController
    {
        #region Constructor
        public ChannelController(
            ApplicationDbContext context
        ) : base(context) { }
        #endregion

        /// <summary>
        /// Fetch Channel with Messages by Id
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

            // Check if channel exists
            if (channel == null) return new StatusCodeResult(404);

            return new JsonResult(
                channel.Adapt<ChannelViewModel>(),
                JsonSettings);
        }

        /// <summary>
        /// Fetch all Channels
        /// </summary>
        /// <returns> List of ChannelViewModels </returns>
        [HttpGet]
        public IActionResult Get()
        {
            var channels = DbContext.Channels
                .ToList();

            return new JsonResult(
                channels.Adapt<ChannelViewModel[]>().ToList(),
                JsonSettings
            );
        }

        /// <summary>
        /// Create new Channel
        /// </summary>
        /// <param name="model"> ChannelViewModel </param>
        /// <returns> HTTP 201 Created </returns>
        [HttpPost]
        public IActionResult Post([FromBody] ChannelViewModel model)
        {
            // Validate client payload
            if (model == null) return new StatusCodeResult(500);

            model.Id = Guid.NewGuid();

            DbContext.Channels
                .Add(model.Adapt<Channel>());

            DbContext.SaveChanges();

            return new StatusCodeResult(201);
        }
    }
}
