"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#fff";
    DesignColors["black"] = "#000";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPORT"] = 0] = "SUPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPORT);
