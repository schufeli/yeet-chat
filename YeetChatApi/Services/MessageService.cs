using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using YeetChatApi.Data;
using YeetChatApi.Models;

namespace YeetChatApi.Services
{
    public class MessageService
    {
        private ApplicationDbContext DbContext { get; }
        public MessageService(IServiceProvider services)
        {
            DbContext = services.GetRequiredService<ApplicationDbContext>();

            Console.WriteLine(DbContext);
        }

        public static async Task SaveMessage(string channelId, string author, string content)
        {
            var message = new Message
            {
                Id = Guid.NewGuid(),
                Author = author,
                Content = content,
                Time = DateTime.Now,
                ChannelId = channelId
            };

            //await DbContext.Messages.AddAsync(message);
            //await DbContext.SaveChangesAsync();
        }
    }
}
