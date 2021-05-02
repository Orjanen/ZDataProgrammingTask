using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
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

        public List<CalculationResponse> CalculatePaymentPlan(CalculationRequest data)
        {
            //process the data and calculate the monthly payment
            double amount = data.Loan;
            var interestRatePerPeriod = (data.InterestRate / 100) / 12;
            var numbersOfPaymentPeriod = data.Years * 12;

            var numerator = interestRatePerPeriod * Math.Pow((1 + interestRatePerPeriod), numbersOfPaymentPeriod);
            var denominator = Math.Pow((1 + interestRatePerPeriod), numbersOfPaymentPeriod) - 1;

            var monthlyPayment = amount * (numerator / denominator);
            
            //Create payment plan
            List<CalculationResponse> paymentPlan = new List<CalculationResponse>();
            var totalInterestPayed = 0.0;
            
            for (int i = 0; i < numbersOfPaymentPeriod; i++)
            {
                var interestAmount = amount * interestRatePerPeriod;
                totalInterestPayed += interestAmount;
                var downPayment = monthlyPayment - interestAmount;
                amount = amount - downPayment;
                
                CalculationResponse response = new CalculationResponse()
                {
                    Month = i + 1,
                    Interest = interestAmount,
                    Payment = monthlyPayment,
                    Principal = downPayment,
                    Balance = amount,
                    TotalInterestPayed = totalInterestPayed
                };
                
                paymentPlan.Add(response);
            }
            return paymentPlan;
        }
    }
}