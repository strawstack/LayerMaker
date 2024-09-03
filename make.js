import { 
    readFileSync, 
    writeFileSync, 
    existsSync, 
    mkdirSync 
} from "fs";

function main() {
    const data = JSON.parse(readFileSync(process.argv[2], "utf-8"));

    // HTML
    const html = (() => {
        const lines = [];
        function getIndent(size) {
            return Array(size).fill(" ").join("");
        }
        function getHTML(root, indent) {
            if (root["children"].length === 0) {
                lines.push(`${getIndent(indent)}<div class="${root["name"]}"></div>`);
            } else {
                lines.push(`${getIndent(indent)}<div class="${root["name"]}">`);
                root["children"].forEach(child => getHTML(child, indent + 2));
                lines.push(`${getIndent(indent)}</div>`);
            }
        }
        getHTML(data, 4);
        return lines;
    })();

    // CSS
    const css = (() => {
        const lines = [];
        function getIndent(size) {
            return Array(size).fill(" ").join("");
        }
        function getCSS(root, indent) {
            lines.push(`${getIndent(indent)}.${root["name"]} {`);
            const seen = {};
            root["children"].forEach(child => {
                if (!(child["name"] in seen)) {
                    seen[child["name"]] = true;
                    getCSS(child, indent + 2)
                }
            });
            lines.push(`${getIndent(indent)}}`);
        }
        getCSS(data, 0);
        return lines;
    })();

    // JS
    const js = (() => {
        const lines = [];
        function getIndent(size) {
            return Array(size).fill(" ").join("");
        }
        function getJS(root, path, nth, indent) {
            
            if (nth !== null) {
                lines.push(`${getIndent(indent)}{`);
                indent += 4;
            }

            path.push(root["name"]);
            const q = (nth === null) ? ["qs", ""] : ["qsa", `[${nth}]`];
            lines.push(`${getIndent(indent)}e: ${q[0]}(".${path.join(" .")}")${q[1]},`);
            
            const seen = {};
            const fz = (() => {
                const fz = {};
                for (let { name } of root["children"]) {
                    if (!(name in fz)) fz[name] = 0;
                    fz[name] += 1;
                }
                return fz;
            })();

            let index = 0;
            const { children } = root;
            while (index < children.length) {
                const child = children[index];
                const count = fz[child["name"]];
                if (count === 1) {
                    lines.push(`${getIndent(indent)}${child["name"]}: {`);
                    getJS(child, path, null, indent + 4);
                    lines.push(`${getIndent(indent)}},`);

                } else {
                    if (!(child["name"] in seen)) {
                        seen[child["name"]] = true;
                        lines.push(`${getIndent(indent)}${child["name"]}: [`);
                        let nth = 0;
                        let j = index;
                        while (j < children.length) {
                            const peerchild = children[j];
                            if (peerchild["name"] === child["name"]) {
                                getJS(peerchild, path, nth, indent + 4);
                                nth += 1;
                            }
                            j += 1;
                        }
                        lines.push(`${getIndent(indent)}],`);
                    }
                }
                index += 1;
            }
            path.pop();

            if (nth !== null) {
                indent -= 4;
                lines.push(`${getIndent(indent)}},`);
            }
        }
        lines.push(`    const ${data["name"]} = {`);
        getJS(data, [], null, 8);
        lines.push(`    };`);
        return {name: data["name"], lines};
    })();

    // Create files
    if (!existsSync("site")) mkdirSync("site");

    const index_html = readFileSync("templates/index.html", "utf-8").replace("TEMPLATE", html.join("\n"));
    writeFileSync("site/index.html", index_html);

    const style_css = readFileSync("templates/style.css", "utf-8").replace("TEMPLATE", css.join("\n"));
    writeFileSync("site/style.css", style_css);

    const helper_js = readFileSync("templates/helper.js", "utf-8")
        .replace("TEMPLATE", js.lines.join("\n"))
        .replace("EXPORT", js.name);
    writeFileSync("site/helper.js", helper_js);

    const script_js = readFileSync("templates/script.js", "utf-8").replaceAll("IMPORT", js.name);
    writeFileSync("site/script.js", script_js);

}

main();