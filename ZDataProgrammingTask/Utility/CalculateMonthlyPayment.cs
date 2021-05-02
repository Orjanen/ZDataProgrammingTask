using System;

namespace ZDataProgrammingTask.Utility
{
    public class CalculateMonhlyPayment
    {
        public static double calculateMonhlyPayment(double interestRatePerPeriod,
            double numbersOfPaymentPeriod, double amount)
        {
            var numerator = interestRatePerPeriod * Math.Pow((1 + interestRatePerPeriod), numbersOfPaymentPeriod);
            var denominator = Math.Pow((1 + interestRatePerPeriod), numbersOfPaymentPeriod) - 1;
            
            var monthlyPayment = amount * (numerator / denominator);

            return monthlyPayment;
        }
    }
}