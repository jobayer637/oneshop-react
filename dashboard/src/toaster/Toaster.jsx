// import toaster from react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

// toaster style
const toastStyle = {
    style: {
        border: '1px solid #713200',
        padding: '16px',
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        // marginBottom: '15px'
    },
    iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE'
    },
}

// error toaster
export const errorToast = (message) => {
    toast.error(message, {
        style: toastStyle.style,
        iconTheme: toastStyle.iconTheme
    });
}

// success toaster
export const successToast = (message) => {
    toast.success(message, {
        style: toastStyle.style,
        iconTheme: toastStyle.iconTheme
    });
}


// top-center toaster 
export const TCToaster = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    )
}

// bottom-center toaster
export const BCToaster = () => {
    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
        />
    )
}

// top-right toaster
export const TRToaster = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
    )
}




