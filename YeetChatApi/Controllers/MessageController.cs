using System;
using System.Threading.Tasks;
using YeetChatApi.Data;
using YeetChatApi.Models;

namespace YeetChatApi.Controllers
{
    public class MessageController : BaseApiController
    {
        public MessageController(ApplicationDbContext context) : base(context) { }

        public async Task SaveMessage(string channelId, string author, string content)
        {
            var message = new Message
            {
                Id = Guid.NewGuid(),
                Author = author,
                Content = content,
                Time = DateTime.Now,
                ChannelId = channelId
            };

            await DbContext.Messages.AddAsync(message);
            await DbContext.SaveChangesAsync();
        }
    }
}
