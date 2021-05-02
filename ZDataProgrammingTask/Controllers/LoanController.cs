using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ZDataProgrammingTask.Models;
using ZDataProgrammingTask.Services;

namespace ZDataProgrammingTask.Controllers
{
    public class LoanController : BaseApiController
    {
        private readonly ILoanTypeService _loanTypeService;

        public LoanController(ILoanTypeService loanTypeService)
        {
            _loanTypeService = loanTypeService;
        }

        [HttpGet]
        public ActionResult<List<LoanType>> GetLoanTypes()
        {
            return _loanTypeService.GetLoanTypes();
        }

        [HttpPost]
        public ActionResult<List<CalculationResponse>> CalculatePaymentPlan([FromBody] CalculationRequest data)
        {
            var response = _loanTypeService.CalculatePaymentPlan(data);

            if (response == null)
            {
                return BadRequest(new {message = "Can't calculate the values"});
            }

            return response;
        }
    }
}