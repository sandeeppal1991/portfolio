using System.Web;
using System.Web.Optimization;

namespace Portfolio
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));
            bundles.Add(new ScriptBundle("~/bundles/site").Include(
                        "~/Scripts/site.js",
                        "~/Scripts/chart/jquery.hexagonprogress.js",
                         "~/Scripts/work/jquery.homeycombs.js",
                         "~/Scripts/parallax.js",
                         "~/Scripts/header/modernizr.custom.js",
                         "~/Scripts/header/waypoints.min.js",
                         "~/Scripts/SmoothScroll.js",
                         "~/Scripts/scroll/jquery.mCustomScrollbar.js",
                         "~/Scripts/scroll/jquery.mousewheel.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/homeycombs.css",
                      "~/Content/component.css",
                       "~/Content/normalize.css",
                       "~/Content/jquery.mCustomScrollbar.css"));
        }
    }
}
