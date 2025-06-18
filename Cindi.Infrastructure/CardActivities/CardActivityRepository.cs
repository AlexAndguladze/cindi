using Cindi.Application.CardActivities.Repositories;
using Cindi.Domain.Entities;
using Cindi.Persistence.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Infrastructure.CardActivities
{
    public class CardActivityRepository : ICardActivityRepository
    {
        private CindiDbContext _context;
        public async Task<int> AddAsync(CardActivity cardActivity, CancellationToken cancellationToken)
        {
            await _context.CardActivities.AddAsync(cardActivity, cancellationToken);
            await _context.SaveChangesAsync();
            return cardActivity.Id;
        }
    }
}
