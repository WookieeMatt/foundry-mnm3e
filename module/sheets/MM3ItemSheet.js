export default class MM3ItemSheet extends ItemSheet {

    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["mnm3e", "sheet", "item"]
        });
    }

    get  template() {
        return `systems/mnm3e/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.mnm3e;

        return data;
    }
}