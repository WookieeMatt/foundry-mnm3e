export default class MM3ItemSheet extends ItemSheet {
    get  template() {
        return `systems/mnm3e/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.mnm3e;

        return data;
    }
}