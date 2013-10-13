define("app/app", [ "./view/sub", "./view", "./view/sub2", "./view/view/sub3", "./view/view" ], function(require) {
    var s = require("./view/sub");
});

define("app/view/sub", [ "app/view", "app/view/sub2", "app/view/view/sub3", "app/view/view" ], function(require) {
    var v = require("app/view");
    var s2 = require("app/view/sub2");
    var s3 = require("app/view/view/sub3");
});

define("app/view", [], function(require) {});

define("app/view/sub2", [ "app/view" ], function(require) {
    var v = require("app/view");
});

define("app/view/view/sub3", [ "app/view/view", "app/view" ], function(require) {
    var v = require("app/view/view");
    var v = require("app/view");
});

define("app/view/view", [], function(require) {});
