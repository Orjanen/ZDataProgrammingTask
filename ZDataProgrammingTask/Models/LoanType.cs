using System;

namespace ZDataProgrammingTask.Models
{
    public class LoanType
    {
        public Guid Id { get; set; }

        public string LoanName { get; set; }

        public double InterestRate { get; set; }
    }
}