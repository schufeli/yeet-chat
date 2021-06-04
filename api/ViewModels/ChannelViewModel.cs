using System;
using System.Collections.Generic;

namespace api.ViewModels
{
    public class ChannelViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<MessageViewModel> Messages { get; set; }
    }
}
