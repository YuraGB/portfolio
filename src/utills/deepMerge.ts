
export const isObject = <T extends Object | undefined>(item:T):Boolean =>{
    return (item && typeof item === 'object' && !Array.isArray(item));
};

/**
 *
 * @param target
 * @param sources
 */
export const mergeDeep = <T extends {[key: string]: any}>(target: T, ...sources:T[]):T => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
};