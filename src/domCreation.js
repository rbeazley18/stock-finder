// factory function to create data point variables for stocks (high, low, etc.)
export function stockComponentFactory(type, attributes, content) {
    const component = document.createElement(type);
    for (Object.key in attributes) {
        component.setAttribute(Object.key, attributes[Object.key]);
    }
    component.textContent = content;
    return component;
}