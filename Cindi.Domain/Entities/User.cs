using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Provider { get; set; }
        public string ProviderUserId{ get; set; }
        public string Email { get; set; }
        public string Name{ get; set; }

        public virtual ICollection<Card> Cards { get; set; }
        public virtual ICollection<CardActivity> CardActivities { get; set; }
    }
}
