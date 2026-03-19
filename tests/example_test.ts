Deno.test("simple check", () => {
  if (2 + 2 !== 4) throw new Error("Math error!");
});
