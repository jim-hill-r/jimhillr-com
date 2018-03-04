using Microsoft.VisualStudio.TestTools.UnitTesting;

using Microsoft.EntityFrameworkCore;
using JimHill.Gumby.API.Controllers;
using JimHill.Gumby.Persistance.Model.Entities;
using System.Collections.Generic;
using JimHill.Gumby.Persistance;

namespace JimHill.Tests.Gumby.API
{
    [TestClass]
    public class TestClimberController
    {
        [TestMethod]
        public void TestGet()
        {
            Assert.AreEqual(1, 1);
        }
    }
}
