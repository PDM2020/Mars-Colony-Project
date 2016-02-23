angular.module("red").run(["$templateCache", function($templateCache) {$templateCache.put("app/encounters/encounters.html","<h1>encounters page</h1>");
$templateCache.put("app/main/main.html","<div class=\"main-page\"><h1>{{ description }}</h1></div>");
$templateCache.put("app/reports/reports-filed.html","<div class=\"main-page\"><h1>{{ description }}</h1></div>");
$templateCache.put("app/reports/reports.html","<div class=\"main-page\"><h1>{{ description }}</h1></div>");}]);