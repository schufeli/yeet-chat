using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Channel
            builder.Entity<Channel>()
                .ToTable("Channels");

            builder.Entity<Channel>()
                .HasMany(c => c.Messages)
                .WithOne(m => m.Channel);

            // Message
            builder.Entity<Message>()
                .ToTable("Messages");
        }
    }
}
