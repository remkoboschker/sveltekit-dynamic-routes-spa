
export async function load({fetch}) {
    const response = await fetch('/items.json');
    const items = await response.json();
    return { items }
}