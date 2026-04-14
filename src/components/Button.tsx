import Link from "next/link";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  glow?: "white" | "black" | "none";
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 hover:-translate-y-0.5 active:translate-y-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white border-0 hover:bg-primary-700 shadow-md hover:shadow-lg",
  secondary:
    "bg-white text-primary-600 border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300",
  ghost:
    "bg-transparent text-accent-black border-2 border-primary-200 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-300",
};

const glowClasses: Record<NonNullable<ButtonProps["glow"]>, string> = {
  white: "hover:shadow-[0_0_18px_rgba(0,0,0,0.18)]",
  black: "hover:shadow-[0_0_22px_rgba(0,0,0,0.25)]",
  none: "hover:shadow-none",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    glow = "white",
    ...rest
  } = props as ButtonProps & Record<string, unknown>;

  const combined = clsx(baseClasses, variantClasses[variant], glowClasses[glow], className);

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props as ButtonAsLink;
    return (
      <Link href={href} className={combined} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type} className={combined} {...buttonProps}>
      {children}
    </button>
  );
}

