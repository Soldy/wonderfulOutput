'use strict'

exports.json = function () {
    this.json = function (json) {
        return JSON.stringify(
            json,
            null,
            4
        );
    }
}

