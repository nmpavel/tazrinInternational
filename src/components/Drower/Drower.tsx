import { useEffect, memo } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Drower = (props: DrowerProps) => {
  const { open, children, handleClose, clses, ancor, w } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.classList.contains('modal')) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        open ? 'w-screen' : 'w-0'
      } modal fixed inset-0 overflow-hidden z-50 bg-[rgba(0,0,0,0.5)]`}
    >
      <div
        style={props.style}
        className={`bg-white absolute flex flex-col ${
          ancor === 'left' ? 'left-0' : 'right-0'
        } ${open ? 'translate-x-0' : '-translate-x-full'} ${
          w ? w : 'sm:w-96 w-[320px]'
        } top-0 bottom-0 px-4 transition-all duration-150 text-sc ${clses}`}
      >
        <div className="py-6 flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900 mb-0">Hyman Life</h2>
          <div className="ml-3 h-7 flex items-center">
            <AiOutlineClose
              size={25}
              className="text-gray-500 cursor-pointer border border-dotted border-gray-400"
              onClick={handleClose}
            />
          </div>
        </div>
        <div className="border p-2 border-dashed rounded-lg overflow-y-auto sb">
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(Drower);

interface DrowerProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  clses?: string;
  ancor?: 'left' | 'right';
  w?: string;
  style?: React.CSSProperties;
}
