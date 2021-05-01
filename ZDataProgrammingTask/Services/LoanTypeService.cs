using System;
using System.Collections.Generic;
using ZDataProgrammingTask.Data;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Services
{
    public class LoanTypeService : ILoanTypeService
    {
        private readonly ILoanTypeRepository _loanRepo;

        public LoanTypeService(ILoanTypeRepository loanRepo)
        {
            _loanRepo = loanRepo;
        }

        public List<LoanType> GetLoanTypes()
        {
            return _loanRepo.FindAllLoanTypes();
        }

        public CalculationResponse CalculatePaymentPlan(CalculationRequest data)
        {
            var loanAmount = data.Loan;
            var interestRatePerPeriod = data.InterestRate;
            var numbersOfPaymentPeriod = data.Years * 12;

            

            return null;
        }
    }
}