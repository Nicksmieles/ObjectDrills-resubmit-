const object = {
    foo: "foo",
    bar: "bar",
    fum: "fum",
    quux: "quux",
    spam: "spam"
}
for (const property in object) {console.log(`${property}: ${object[property]}`); }