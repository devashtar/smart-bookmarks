import { ItemType } from '../data';

const LINKS_KEY = 'links';

/**
 * Helps get list of links which store in following format: "1 23 54 3 42 124"
 * where every number splitted by space and mean id of `ItemType`.
 * @see `ItemType`
 */
export const getHotLinks = () => localStorage.getItem(LINKS_KEY);

export const hasHotLink = (id: ItemType['id']) => {
    const links = getHotLinks();
    if (links === null || links.length === 0) return false;
    return links.split(' ').includes(id.toString());
};

export const addHotLink = (id: ItemType['id']) => {
    const links = getHotLinks();
    if (links === null || links.length === 0) {
        localStorage.setItem(LINKS_KEY, `${id}`);
    } else {
        localStorage.setItem(LINKS_KEY, links + ` ${id}`);
    }
};

export const removeHotLink = (id: ItemType['id']) => {
    const links = getHotLinks();
    if (links === null || links.length === 0) return;
    const curId = id.toString();
    localStorage.setItem(
        LINKS_KEY,
        links
            .split(' ')
            .filter((id) => id !== curId)
            .join(' ')
    );
};
