export const formattedText = (text: string) => text.replace(/&#39;/g, " ");
export const getInitials = (firstName: string, lastName: string) => {
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    return initials;
}