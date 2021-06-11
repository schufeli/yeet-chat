using System;
using System.Threading.Tasks;

namespace YeetChatApi.Services
{
    public class MessageService : IMessageService
    {
        public MessageService()
        {
            Console.WriteLine("Fuck this shit");
        }

        public async Task SaveMessage(string channelId, string author, string content)
        {
            Console.WriteLine($"{channelId} {author} {content}");
        }
    }
}
