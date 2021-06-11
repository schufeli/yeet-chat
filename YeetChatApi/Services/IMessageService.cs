using System.Threading.Tasks;

namespace YeetChatApi.Services
{
    public interface IMessageService
    {
        Task SaveMessage(string channelId, string author, string content);
    }
}
