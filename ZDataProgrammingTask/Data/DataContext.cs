using Microsoft.EntityFrameworkCore;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Data
{
    public class DataContext: DbContext
    {

        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        
        public DbSet<LoanType> LoanTypes { get; set; }
    }
}