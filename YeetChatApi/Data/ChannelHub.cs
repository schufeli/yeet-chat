using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using YeetChatApi.Services;

namespace YeetChatApi.Data
{   
    public class ChannelHub : Hub
    {
        private IMessageService MessageService { get; }
        public ChannelHub(IMessageService messageService) 
        {
            MessageService = messageService;
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
            await MessageService.SaveMessage(channelId, author, content);
            await Clients.Group(channelId).SendAsync("receive", author, content);
        }
    }
}
