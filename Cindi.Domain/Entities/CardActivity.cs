using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Domain.Entities
{
    public class CardActivity : BaseEntity
    {
        public int UserId { get; set; }
        public string ActivityName { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<CardCardActivity> CardCardActivities { get; set; }
    }
}
