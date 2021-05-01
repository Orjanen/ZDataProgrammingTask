using System.Collections.Generic;
using System.Linq;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Data
{
    public class LoanTypeRepository : ILoanTypeRepository
    {
        private readonly DataContext _context;

        public LoanTypeRepository(DataContext context)
        {
            _context = context;
        }

        public List<LoanType> FindAllLoanTypes()
        {
            return _context.LoanTypes.ToList();
        }
    }
}