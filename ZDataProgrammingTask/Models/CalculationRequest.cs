namespace ZDataProgrammingTask.Models
{
    public class CalculationRequest
    {
        public int Years { get; set; }
        
        public int Loan {get; set; }

        public string SelectedLoan { get; set; }
        
        public double InterestRate { get; set; }
    }
}