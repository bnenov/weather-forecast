export const getCurrentTime = () => {
    const today = new Date();
    return today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}