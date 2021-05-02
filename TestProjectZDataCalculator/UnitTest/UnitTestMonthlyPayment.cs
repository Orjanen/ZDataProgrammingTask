using Microsoft.VisualStudio.TestTools.UnitTesting;
using ZDataProgrammingTask.Utility;

namespace TestProjectZDataCalculator
{
    [TestClass]
    public class UnitTestMonthlyPayment
    {
        [TestMethod]
        public void TestIfMonthlyPaymentGivesCorrectOutput()
        {
            double amount = 10000.0;
            double interestRatePerPeriod = (3.5 / 100) / 12;
            double numbersOfPaymentPeriod = 5 * 12;
            double outPutExpected = 181.92;

            double outPutActual = CalculateMonhlyPayment.calculateMonhlyPayment(interestRatePerPeriod,
                numbersOfPaymentPeriod, amount);
            
            Assert.AreEqual(outPutExpected, outPutActual, 0.1, "Output is incorrect");

        }
    }
}