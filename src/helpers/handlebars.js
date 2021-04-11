const Handlebars = require("handlebars");

module.exports = {
    sumIndex: (a, b) => a + b,
    sortable: (field, sort) => {
        const typeIcon = field === sort.column ? sort.type : "default";

        const icons = {
            default: "fas fa-sort",
            asc: "fas fa-sort-amount-down-alt",
            desc: "fas fa-sort-amount-down",
        };

        const types = {
            default: "desc",
            asc: "desc",
            desc: "asc",
        };

        const icon = icons[typeIcon];
        const type = types[typeIcon];

        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`
        );

        const output = `<a href="${href}">
                <i class="${icon}"></i>
            </a>`;
            
        return new Handlebars.SafeString(output);
    },
};
