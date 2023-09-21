const watcher = Deno.watchFs("Editor.tsx")
for await (const event of watcher) {
    console.log(">", event.kind)
    const { Editor } = await import("./Editor.tsx?"+Math.random())
    Deno.writeTextFile(
        "index.html",
        "<!doctype html>\n" +
        <html lang="en">
            <Editor/>
        </html>
    ).then(() => {
        console.log("built complete.")
    })
}