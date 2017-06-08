using System.Collections;
using System.Collections.Generic;
using Dashboard.Models;
using Microsoft.AspNetCore.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        private IList<Comment> _comments;
        public HomeController()
        {
            _comments = new List<Comment>
            {
                new Comment
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new Comment
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new Comment
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                }
            };
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
