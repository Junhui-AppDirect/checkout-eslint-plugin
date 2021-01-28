/**
 * @fileoverview constant-naming
 * @author Junhui
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/constant-naming-convention"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("constant-naming-convention", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "const a = abc;",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
