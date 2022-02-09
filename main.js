"use strict";
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.prototype.bio = function () {
            return this.name + " (" + this.team + ")";
        };
        ;
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'capitan', 'Scott');
})();
//# sourceMappingURL=main.js.map