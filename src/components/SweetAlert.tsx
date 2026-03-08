
import Swal from 'sweetalert2'
const swal = Swal;
const SweetAlert = () => {
  swal.fire({
    title: "We Got your Request!",
    text: "You will recieve a discovery call from an AVATA within the next 24hrs. Thank you!", 
    timer: 10000,
    color: 'white',
    background: "#0575bb",
    position: 'top',
    timerProgressBar: true,
    showConfirmButton: false,
    icon: 'success',
  });
}

export default SweetAlert;