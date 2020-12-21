export default class MM3ActorSheet extends ActorSheet {
    get  template() {
        return `systems/mnm3e/templates/sheets/${this.actor.data.type}-sheet.hbs`;
    }

    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            width: 750,
            height: 600,
            classes: ["mnm3e", "sheet", "hero"]
        });
    }
    getData() {
        const data = super.getData();

        data.config = CONFIG.mnm3e;

        return data;
    }
}