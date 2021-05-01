using System.Collections.Generic;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Data
{
    public interface ILoanTypeRepository
    {
        List<LoanType> FindAllLoanTypes();
    }
}