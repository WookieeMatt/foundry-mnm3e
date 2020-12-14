export default class MM3ActorSheet extends ActorSheet {
    get  template() {
        return `systems/mnm3e/templates/sheets/${this.actor.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.mnm3e;

        return data;
    }
}