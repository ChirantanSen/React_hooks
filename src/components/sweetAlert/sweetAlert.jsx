import SweetAlert, { SweetAlertType } from "react-bootstrap-sweetalert";

const SweetAlertComponent = ({ confirm, cancel, title, subtitle, type }) => {
  return (
    <SweetAlert
      style={{ zIndex: 1 }}
      title={title}
      onConfirm={confirm}
      type={type ?? "danger"}
      showCancel={true}
      confirmBtnStyle={{
        backgroundColor: "#024b98",
        color: "white",
        width: "30px",
        textDecoration: "none",
      }}
      onCancel={cancel}
    >
      <h5>{subtitle}</h5>
    </SweetAlert>
  );
};

export default SweetAlertComponent;