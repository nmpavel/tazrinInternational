import React from 'react';
import Link from 'next/link';

type Props = {
  onClick?: (e: any) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  tw?: string; // tailwind
  path?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  primary?: boolean;
};

const ButtonPrimary = (p: Props) =>
  p.path ? (
    <Link href={p.path}>
      <Btn {...p}>{p.children}</Btn>
    </Link>
  ) : (
    <Btn {...p}>{p.children}</Btn>
  );

export default ButtonPrimary;

const Btn = (p: Props) => {
  const primary = p.primary
    ? ' bg-pc hover:bg-yellow-600 hover:text-white py-3 px-8'
    : 'bg-white hover:bg-pc hover:text-white py-3 px-8 border ';

  return (
    <button
      style={p.style}
      onClick={p.onClick}
      className={`flex items-center justify-center gap-x-1 hover:shadow-lg active:shadow-none transition-colors duration-300 rounded tracking-[1.4px] font-medium text-sc group ${primary} ${p.tw}`}
      disabled={p.disabled}
    >
      {p.iconLeft && p.iconLeft}
      {p.children}
      {p.iconRight && p.iconRight}
    </button>
  );
};
