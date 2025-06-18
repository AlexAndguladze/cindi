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
    public class CardActivityConfiguration : IEntityTypeConfiguration<CardActivity>
    {
        public void Configure(EntityTypeBuilder<CardActivity> builder)
        {
            builder.Property(x=>x.ActivityName).HasMaxLength(256).IsRequired();
        }
    }
}
