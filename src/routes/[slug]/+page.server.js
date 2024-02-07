import { error } from '@sveltejs/kit';
import { articles } from '../data.js';

export function load({ params }) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) throw error(404);

    return {
        article
    };
}
