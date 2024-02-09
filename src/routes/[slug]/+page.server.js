import { error } from '@sveltejs/kit';
import fs from 'fs';
import fm from 'front-matter';

export function load({ params }) {
    const filePath = `contents/article/${params.slug}`;

    const markdownFileName = fs.readdirSync(filePath).find(fileName => fileName.endsWith('.md'));
    const codeFileName = fs.readdirSync(filePath).find(fileName => fileName.endsWith('.stk'));
    if (!markdownFileName || !codeFileName) throw error(404);

    const markdown = fs.readFileSync(`${filePath}/${markdownFileName}`);
    const code = fs.readFileSync(`${filePath}/${codeFileName}`);
    if (!markdown || !code) throw error(404);

    const parsedMarkdown = fm(markdown.toString());

    const article = {
        title: parsedMarkdown.attributes.title,
        content: parsedMarkdown.body,
        code: code.toString(),
        next: parsedMarkdown.attributes.next
    };

    return {
        article
    };
}
