using System.Threading.Tasks;
using YeetChatApi.Data;
using YeetChatApi.Models;

namespace YeetChatApi.Services
{
    public interface IMessageService
    {
        Task<Message> SaveMessage(string channelId, string author, string content, ApplicationDbContext context);
    }
}
