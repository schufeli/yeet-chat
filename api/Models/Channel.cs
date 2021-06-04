using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Channel
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<Message> Messages { get; set; }
    }
}
