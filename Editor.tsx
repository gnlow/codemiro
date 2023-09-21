export const Editor = () =>
    <app class="hbox(fill) flex-wrap p(20) gap(20) monospace font(20) h(100%)">
        <m:importMap src="./import_map.json"/>
        <script type="module">
            import init from "./src/cmInit.js";
            init();
        </script>
        <editor class="squircle-clip w(400~) scroll flex(1) bg(#0b0e14)">
            {/* Inject CodeMirror */}
        </editor>
        <preview class="clip w(400~) flex(1) p(10) squircle">
            Hello
        </preview>
        <m:use src="./src/global.css"/>
        <m:use src="./src/useSquircle.js"/>
    </app>
