import { redirect } from '@sveltejs/kit';

export async function load({parent}) {
    const data = await parent();
    throw redirect(307, `/items/${data.items[0].id}`)
}