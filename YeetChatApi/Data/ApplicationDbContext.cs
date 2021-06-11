using Microsoft.EntityFrameworkCore;
using YeetChatApi.Models;

namespace YeetChatApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Channels
            modelBuilder.Entity<Channel>()
                .ToTable("Channels");

            modelBuilder.Entity<Channel>()
                .HasMany(c => c.Messages)
                .WithOne(m => m.Channel);

            // Messages
            modelBuilder.Entity<Message>()
                .ToTable("Messages");
        }

        public DbSet<Channel> Channels { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}
