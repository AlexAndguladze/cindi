using Cindi.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Persistence.Configurations
{
    public class CardCardActivityConfiguration : IEntityTypeConfiguration<CardCardActivity>
    {
        public void Configure(EntityTypeBuilder<CardCardActivity> builder)
        {
            builder.HasOne(cc => cc.Card)
                .WithMany(c => c.CardCardActivities)
                .HasForeignKey(cc => cc.CardId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(cc => cc.CardActivity)
                .WithMany(c => c.CardCardActivities)
                .HasForeignKey(cc => cc.CardActivityId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasKey(cc => new {cc.CardId, cc.CardActivityId});
        }
    }
}
