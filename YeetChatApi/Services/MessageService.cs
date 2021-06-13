using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;
using YeetChatApi.Data;
using YeetChatApi.Models;

namespace YeetChatApi.Services
{
    public class MessageService : IMessageService
    {
        public async Task<Message> SaveMessage(string channelId, string author, string content, ApplicationDbContext context)
        {
            var message = new Message
            {
                Id = Guid.NewGuid(),
                ChannelId = Guid.Parse(channelId),
                Author = author,
                Content = content,
                Time = DateTime.Now
            };

            await context.Messages.AddAsync(message);
            await context.SaveChangesAsync();

            return message;
        }
    }
}
