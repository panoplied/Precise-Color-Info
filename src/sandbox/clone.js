// Helper function for cloning properties.
// Needed because of the restrictions of Figma Plugin API:
// https://www.figma.com/plugin-docs/editing-properties/

function clone(val) {
    return JSON.parse(JSON.stringify(val))
}

export default clone;