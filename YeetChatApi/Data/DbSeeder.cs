using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YeetChatApi.Models;

namespace YeetChatApi.Data
{
    public class DbSeeder
    {
        public static void Seed(ApplicationDbContext dbContext)
        {
            if (!dbContext.Channels.Any()) CreateInitialChannels(dbContext)
                    .GetAwaiter()
                    .GetResult();
        }

        public static async Task CreateInitialChannels(ApplicationDbContext dbContext)
        {
            var list = new List<Channel>
            {
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "Channel 1"
                },
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "Channel 2"
                },
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "MEMES"
                },
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "Yeet"
                }
            };

            await dbContext.Channels.AddRangeAsync(list);
            await dbContext.SaveChangesAsync();
        }
    }
}
