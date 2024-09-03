# Layer Maker


# Todo

- [ ] Children with the same name should look like `key => array`
    - Each element of the array is the children of the given element\
    - Note: Same named children might be out or order
    - Must be collected in one pass and used to generate a single array
    - Same named children might have different children of their own

            row: {
                e: qsa(".designs .calculator .row")[0],
                btn: [
                  {
                    e: qsa(".designs .calculator .row .btn")[0],
                    child: {
                      e: qs(".designs .calculator .row .btn")
                    }
                  },
                  {
                    e: qsa(".designs .calculator .row .btn")[0],
                  },
                  {
                    e: qsa(".designs .calculator .row .btn")[0],
                  },
                  {
                    e: qsa(".designs .calculator .row .btn")[0],
                  }
                ],
            }

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
        arr.push({ name: [child["name"]], children: json(child) });
        return arr;
    }, []) : [];
};
console.log(
    JSON.stringify({name: [root["name"]], children: json(root)}, null, 2)
);
```

2. Copy the output into a `.json` file. See `example.json` for reference.