// Tabla de verdad para AND (&&)
console.log("Tabla de verdad para AND:");
console.log("A\tB\tA AND B");
console.log("false\tfalse\t" + (false && false));
console.log("false\ttrue\t" + (false && true));
console.log("true\tfalse\t" + (true && false));
console.log("true\ttrue\t" + (true && true));

// Tabla de verdad para OR (||)
console.log("\nTabla de verdad para OR:");
console.log("A\tB\tA OR B");
console.log("false\tfalse\t" + (false || false));
console.log("false\ttrue\t" + (false || true));
console.log("true\tfalse\t" + (true || false));
console.log("true\ttrue\t" + (true || true));

// Tabla de verdad para NOT (!)
console.log("\nTabla de verdad para NOT:");
console.log("A\tNOT A");
console.log("false\t" + (!false));
console.log("true\t" + (!true));

// Tabla de verdad para XOR (^)
console.log("\nTabla de verdad para XOR:");
console.log("A\tB\tA XOR B");
console.log("false\tfalse\t" + (false ^ false));
console.log("false\ttrue\t" + (false ^ true));
console.log("true\tfalse\t" + (true ^ false));
console.log("true\ttrue\t" + (true ^ true));

// Tabla de verdad para la implicación (->)
console.log("\nTabla de verdad para la implicación (->):");
console.log("A\tB\tA -> B");
console.log("false\tfalse\t" + (!false || false));
console.log("false\ttrue\t" + (!false || true));
console.log("true\tfalse\t" + (!true || false));
console.log("true\ttrue\t" + (!true || true));