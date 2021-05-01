using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZDataProgrammingTask.Data;
using ZDataProgrammingTask.Models;

namespace ZDataProgrammingTask.Controllers
{
  
    public class LoanController : BaseApiController
    {
        private readonly DataContext _context;

        public LoanController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<LoanType>>> GetLoanTypes()
        {
            return await _context.LoanTypes.ToListAsync();
        }
    }
}