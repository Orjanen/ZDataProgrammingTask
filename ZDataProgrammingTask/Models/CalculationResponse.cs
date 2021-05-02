namespace ZDataProgrammingTask.Models
{
    public class CalculationResponse
    {
        public int Month { get; set; }
        public double Principal { get; set; }
        public double Payment { get; set; }
        public double Interest { get; set; }
        public double TotalInterestPaid { get; set; }
        public double Balance { get; set; }
    }
}