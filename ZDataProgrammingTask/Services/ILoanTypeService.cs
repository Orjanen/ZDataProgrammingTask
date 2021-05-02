using System.Collections.Generic;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Services
{
    public interface ILoanTypeService
    {
        List<LoanType> GetLoanTypes();

        List<CalculationResponse> CalculatePaymentPlan(CalculationRequest data);
    }
}