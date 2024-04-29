import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options: any = {
  position: "top-left",
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const useToast = () => {
  const warn = (msg: string) => toast.warn(msg, options);
  const error = (msg: string) => toast.error(msg, options);
  const success = (msg: string) => toast.success(msg, options);
  const info = (msg: string) => toast.info(msg, options);

  return { warn, error, success, info };
};

export default useToast;

export const ToastProvider = () => (
  <ToastContainer
    position="top-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    // filled
    theme="colored"
    className="text-lg font-base tracking-wider"
    style={{ letterSpacing: "2px", fontFamily: "Josefin Sans !important" }}
  />
);
