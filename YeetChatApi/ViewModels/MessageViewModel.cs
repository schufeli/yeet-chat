using System;

namespace YeetChatApi.ViewModels
{
    public class MessageViewModel
    {
        public Guid Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }
    }
}