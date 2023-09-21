export const Editor = () =>
    <app class="hbox(fill) flex-wrap p(20) gap(20) monospace font(20) h(100%)">
        <m:importMap src="./import_map.json"/>
        <m:use raw src="./src/cmInit.js"/>
        <editor class="squircle-clip w(400~) scroll flex(1) bg(#0b0e14)">
            {/* Inject CodeMirror */}
        </editor>
        <preview class="clip w(400~) flex(1) p(10) squircle">
            Hello
        </preview>
        <m:use raw src="./src/global.css"/>
        <m:use raw src="./src/useSquircle.js"/>
    </app>
