using Cindi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Application.CardActivities.Repositories
{
    public interface ICardActivityRepository
    {
        Task<int> AddAsync(CardActivity cardActivity, CancellationToken cancellationToken);
    }
}
