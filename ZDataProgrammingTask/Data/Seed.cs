using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Data
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.LoanTypes.Any()) return;

            var loanTypes = new List<LoanType>
            {
                new LoanType
                {
                    LoanName = "Mortgage",
                    InterestRate = 3.5
                },
                new LoanType
                {
                    LoanName = "Car loan",
                    InterestRate = 3.5
                },
                new LoanType
                {
                    LoanName = "Study loans",
                    InterestRate = 3.5
                },
            };
            await context.LoanTypes.AddRangeAsync(loanTypes);
            await context.SaveChangesAsync();
        }
    }
}