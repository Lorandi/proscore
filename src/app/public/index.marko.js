// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/y$1.0.0/src/app/public/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pr-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>ProScore</title></head><body>");

  component_globals_tag({}, out);

  out.w("<form action=\"/\" method=\"post\"><div class=\"formBox\"><label for=\"age\">Age</label><input type=\"number\" id=\"age\" name=\"age\" placeholder=\"age\" required></div><br><div class=\"formBox\"><label for=\"educationLevel\">Education Level</label><select id=\"educationLevel\" name=\"educationLevel\" required><option value=\"no_education\">No education</option><option value=\"primary_scholl\">Primary scholl</option><option value=\"high_school\">High school</option><option value=\"bachelors\">Bachelors</option><option value=\"masters\">Masters</option><option value=\"doctorals\">Doctorals</option></select></div><br><div class=\"formBox\"><label for=\"past_experiences\"> Past Expirience</label><br><div name=\"past_experiences\" id=\"past_experiences\"><input id=\"sales\" type=\"checkbox\" name=\"sales\"><label for=\"sales\"> Sales</label><input id=\"support\" type=\"checkbox\" name=\"support\"><label for=\"support\"> Support</label></div></div><br><div class=\"formBox\"><label for=\"internet\"> Internet</label><br><label for=\"download_speed\">Download Speed</label><input type=\"number\" id=\"download_speed\" name=\"download_speed\" placeholder=\"Download Speed\" required><label for=\"upload_speed\">Upload Speed</label><input type=\"number\" id=\"upload_speed\" name=\"upload_speed\" placeholder=\"Upload Speed\" required></div><br><div class=\"formBox\"><label for=\"writing_score\">Writing score</label><input type=\"number\" id=\"writing_score\" name=\"writing_score\" placeholder=\"from 0 to 1\" required></div><br><div class=\"formBox\"><label for=\"referral_code\">Referral Code</label><input type=\"text\" id=\"referral_code\" name=\"referral_code\" placeholder=\"\"></div><br><div class=\"formBox\"><button type=\"submit\" id=\"btn\">Click to Add</button></div><div id=\"msg\"><pre></pre></div></form><script> \r\n      const addPro = (ev) => {\r\n        //ev.preventDefault(); //to stop the form submitting\r\n        let pro = {\r\n          //id: Date.now(),\r\n          age: Number(document.getElementById(\"age\").value),\r\n          education_level: document.getElementById(\"educationLevel\").value,\r\n          past_experiences: {\r\n            sales: document.getElementById(\"sales\").checked,\r\n            support: document.getElementById(\"support\").checked,\r\n          },\r\n          internet_test: {\r\n            download_speed:Number(document.getElementById(\"download_speed\").value) ,\r\n            upload_speed: Number(document.getElementById(\"upload_speed\").value),\r\n          },\r\n          writing_score:Number(document.getElementById(\"writing_score\").value) ,\r\n          referral_code: document.getElementById(\"referral_code\").value,\r\n        };\r\n        //document.forms[0].reset(); // to clear the form for the next entries\r\n        //document.querySelector('form').reset();\r\n\r\n        //for display purposes only\r\n        //console.warn(\"added\", { pro });\r\n        let pre = document.querySelector(\"#msg pre\");\r\n        pre.textContent = \"\\n\" + JSON.stringify(pro, \"\\t\", 2);\r\n\r\n        //saving to localStorage\r\n        // localStorage.setItem(\"MyMovieList\", JSON.stringify(pros));\r\n        //console.log({pro});       \r\n      };\r\n      document.addEventListener(\"DOMContentLoaded\", () => {\r\n        document.getElementById(\"btn\").addEventListener(\"click\", addPro);\r\n      });\r\n    </script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "51");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/y$1.0.0/src/app/public/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
