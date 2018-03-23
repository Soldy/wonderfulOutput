
"use strict"

exports.json = function () {
    this.config = {
        tab: "    "
    };
    this.linesep = function (level) {
        var out = "";
        for (var i = 0; parseInt(level) > i; i++)
            out += this.config.tab;
        return out;
    };
    this.json = function (json) {
        return JSON.stringify(JSON.parse(that.formater(json, 1)));
    }
    this.formater = function (json, level) {
        var out = "";
        let partType = "object";
        if (Array.isArray(json)) {
            out += "[\n";
            partType = "array";
        } else if (typeof json === 'object') {
            out += "{\n";
        }
        var turn = 0;
        for (var ni in json) {
            if (turn > 0)
                out += ",\n";
            turn++;
            if (partType === "object")
                out += "" + that.linesep(level) + ni.toString() + " : ";
            if (typeof json[ni] === 'string') {
                out += '"' + json[ni].toString() + '"';
            } else if (typeof json[ni] === 'number') {
                out += json[ni].toString();
            } else if (typeof json[ni] === 'function') {
                out += "function(){}";
            } else if (typeof json[ni] === 'boolean') {
                if (json[ni] === true) {
                    out += "true";
                } else {
                    out += "false";
                }
            } else if ((typeof json[ni] === 'object') || (Array.isArray(json[ni]))) {
                out += that.formater(json[ni], level + 1)
            }

        }

        if (Array.isArray(json)) {
            out += "\n" + that.linesep(level - 1) + "]";
        } else if (typeof json === 'object') {
            out += "\n" + that.linesep(level - 1) + "}";
        }
        return out;
    };
    var that = this;
}

