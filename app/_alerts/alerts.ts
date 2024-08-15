import Swal from 'sweetalert2';


export function successAlert(text: string) {
    Swal.fire({
        title: 'Exito!',
        text: text,
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}