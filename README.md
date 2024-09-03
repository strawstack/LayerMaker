# Layer Maker


# Todo

- [x] Children with the same name should look like `key => array`

# How to Use

1. Run `node make.js example.json` where `example.json` is exported layers from Figma. See the `Export Figma Layer` section below.

2. Observe that a `site` directory is created with `index.html`, `style.css`, `script.js`, and `helper.js`.

# Export Figma Layer

1. Run the following in the developer console in Figma:

js```
await figma.loadAllPagesAsync();
const root = figma.root.children[0];
const json = layer => {
    return ("children" in layer) ? layer.children.reduce((arr, child) => {
        arr.push({ name: child["name"], children: json(child) });
        return arr;
    }, []) : [];
};
console.log(
    JSON.stringify({name: root["name"], children: json(root)}, null, 2)
);
```

2. Copy the output into a `.json` file. See `example.json` for reference.