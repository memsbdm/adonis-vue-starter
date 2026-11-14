import vine from '@vinejs/vine';

export const email = () => vine.string().email().normalizeEmail().maxLength(254);
export const password = () => vine.string().minLength(8).maxLength(72);
