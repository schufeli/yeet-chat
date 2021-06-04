using System;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime Time { get; set; }

        public virtual Channel Channel { get; set; }
    }
}
