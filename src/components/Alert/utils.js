let alertClasses = ` `

export const getAlertTypeStyle = (type) => {
    switch (type) {
        case 'info':
            alertClasses = 'bg-blue-100 text-black ';
            return alertClasses
        case 'success':
            alertClasses = 'bg-green-100 text-black ';
            return alertClasses
        case 'error':
            alertClasses = 'bg-red-100 text-black ';
            return alertClasses
        case 'warning':
            alertClasses = 'bg-yellow-100 text-black ';
            return alertClasses
        default:
            alertClasses = 'bg-white border-1 border-[#61DAFB] ';
            return alertClasses
    }
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