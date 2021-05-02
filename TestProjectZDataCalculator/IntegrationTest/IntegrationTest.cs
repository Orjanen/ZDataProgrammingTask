using System.Net.Http;
using Microsoft.AspNetCore.Mvc.Testing;
using ZDataProgrammingTask;

namespace TestProjectZDataCalculator.IntegrationTest
{
    public class IntegrationTest
    {
        protected readonly HttpClient TestClient;

        protected IntegrationTest()
        {
            var appFactory = new WebApplicationFactory<Startup>();
            TestClient = appFactory.CreateClient();
        }
    }
}