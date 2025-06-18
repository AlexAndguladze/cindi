using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cindi.Domain.Entities
{
    public class CardCardActivity
    {
        public int CardId { get; set; }
        public int CardActivityId { get; set; }
        public Card Card { get; set; }
        public CardActivity CardActivity { get; set; }
    }
}
