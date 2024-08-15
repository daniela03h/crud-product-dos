import Swal from 'sweetalert2';


export function successAlert(text: string) {
    Swal.fire({
        title: 'Exito!',
        text: text,
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}

export function errorAlert(text: string) {
    Swal.fire({
        title: 'Error!',
        text: text,
        icon: 'error',
        confirmButtonText: 'Ok'
    })
}