using System;
using System.ComponentModel.DataAnnotations;

namespace YeetChatApi.Models
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime Time { get; set; }
        public virtual string ChannelId { get; set; }
        public virtual Channel Channel { get; set; }
    }
}
