using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace YeetChatApi.Data
{
    public class ChannelHub : Hub
    {
        public Task Join(string channelId)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, channelId);
        }

        public Task Leave(string channelId)
        {
            return Groups.RemoveFromGroupAsync(Context.ConnectionId, channelId);
        }

        public async Task Send(string channelId, string author, string content)
        {
            await Clients.Group(channelId).SendAsync("receive", author, content);
        }
    }
}
