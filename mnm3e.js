import { mnm3e } from "./module/config.js"
import MM3ActorSheet from "./module/sheets/MM3ActorSheet.js"
import MM3ItemSheet from "./module/sheets/MM3ItemSheet.js"

Hooks.once("init", function() {
    console.log("mnm3e | Initializing Mutants & Masterminds 3e System");

    CONFIG.mnm3e = mnm3e;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mnm3e", MM3ActorSheet, { makeDefault: true });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mnm3e", MM3ItemSheet, { makeDefault: true });

    preloadHandlebar("hero-ability", "systems/mnm3e/templates/partials/hero-ability-block.hbs");
    preloadHandlebar("hero-skill", "systems/mnm3e/templates/partials/hero-skill-block.hbs");
});

function preloadHandlebar(name, path) {
    preloadTemplate(path)
        .then(function (templates) {
            Handlebars.registerPartial(name, templates[0]);
        });
}

async function preloadTemplate(path){
    return loadTemplates([path]);
}