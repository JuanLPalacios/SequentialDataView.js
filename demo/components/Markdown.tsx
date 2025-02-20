import { app, VNode } from 'apprun';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import slugify from '@sindresorhus/slugify';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
  .use(require('markdown-it-codetabs'))
  .use(MarkdownItAnchor, { slugify: s => slugify(s) });

export const Markdown = (props, children:Array<VNode | string>) =>{
    return <>
        {children.map((child)=>{
            switch (typeof child) {
                case 'string':
                    return app.safeHTML(md.render(child));
                default:
                    return child;
            }
        }).flat()}
    </>;
}