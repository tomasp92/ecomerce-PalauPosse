import Toast from 'react-bootstrap/Toast'

const ToastMessege = ({title, text, setToast})=>
<Toast onClose={()=>setToast(false)}>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">{title}</strong>
  </Toast.Header>
  <Toast.Body>{text}</Toast.Body>
</Toast>

export default ToastMessege