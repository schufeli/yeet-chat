using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using YeetChatApi.Services;

namespace YeetChatApi.Data
{   
    public class ChannelHub : Hub
    {
        private IMessageService MessageService { get; }
        private ApplicationDbContext DbContext { get; set; }
        public ChannelHub(IMessageService messageService, ApplicationDbContext context) 
        {
            MessageService = messageService;
            DbContext = context;
        }

        public Task Join(string channelId)
        {
            Console.WriteLine($"{Context.ConnectionId} joined Channel: {channelId}");
            return Groups.AddToGroupAsync(Context.ConnectionId, channelId);
        }

        public Task Leave(string channelId)
        {
            Console.WriteLine($"{Context.ConnectionId} left Channel: {channelId}");
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, channelId);
        }

        public async Task Send(string channelId, string author, string content)
        {
            var message = await MessageService.SaveMessage(channelId, author, content, DbContext);
            await Clients.Group(channelId).SendAsync("receive", message);
        }
    }
}
