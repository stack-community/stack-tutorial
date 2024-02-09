import { error } from '@sveltejs/kit';
import { articles } from '../data.js';
import fs from 'fs';

export function load({ params }) {
    const filePath = `contents/article/${params.slug}`;

    const markdownFileName = fs.readdirSync(filePath).find(fileName => fileName.endsWith('.md'));
    const codeFileName = fs.readdirSync(filePath).find(fileName => fileName.endsWith('.stk'));
    if (!markdownFileName || !codeFileName) throw error(404);

    const markdown = fs.readFileSync(`${filePath}/${markdownFileName}`);
    const code = fs.readFileSync(`${filePath}/${codeFileName}`);
    if (!markdown || !code) throw error(404);

    let a = articles.find((a) => a.slug === params.slug);
    if (!a) throw error(404);

    const article = {
        slug: a.slug,
        title: a.title,
        content: markdown.toString(),
        code: code.toString(),
        next: a.next
    };

    return {
        article
    };
}
