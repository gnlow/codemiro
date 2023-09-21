import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts"

const app = new Application()

app.use(async ctx => {
    console.log(ctx.request.url.pathname)
    const { Editor } = await import("./Editor.tsx?"+Math.random())
    ctx.response.headers.set("Content-Type", "text/html")
    ctx.response.body = Editor()
})

console.log("http://localhost:8000")
await app.listen({ port: 8000 })