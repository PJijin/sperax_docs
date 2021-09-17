export const dateFormat = (date: string): string => {
    if (date) {
        return new Intl.DateTimeFormat('en-US').format(new Date(date));
    }
    return date
};
