let alertClasses = `rounded-md px-4 py-2 shadow-md w-[300px] h-auto `; // Base styles with padding, width, height

export const getAlertTypeStyle = (type) => {
    switch (type) {
        case 'info':
            alertClasses += 'bg-blue-100 text-black ';
            break;
        case 'success':
            alertClasses += 'bg-green-100 text-black';
            break;
        case 'error':
            alertClasses += 'bg-red-100 text-black';
            break;
        case 'warning':
            alertClasses += 'bg-yellow-100 text-black';
            break;
        default:
            alertClasses += 'bg-white border-1 border-[#61DAFB]';
            break;
    }
    return alertClasses
}


export const getPositionClasses = (position) => {
    switch (position) {
        case 'top-left':
            return 'top-2 left-2';
        case 'top-right':
            return 'top-2 right-2';
        case 'bottom-left':
            return 'bottom-2 left-2';
        case 'bottom-right':
            return 'bottom-2 right-2';
        case 'top-center':
            return 'top-4 transform -translate-y-2'; // Center vertically
        case 'bottom-center':
            return 'bottom-4 transform -translate-y-2'; // Center vertically
        default:
            return 'top-left'; // Fallback to default
    }
};