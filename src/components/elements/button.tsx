import { classNames } from "@/lib/utils.ts";
import { Button as HeadlessUiButton, ButtonProps } from "@headlessui/react";

export const Button = (props: ButtonProps) => {
  return (
    <HeadlessUiButton
      {...props}
      className={classNames(
        "rounded bg-slate-500 px-4 py-2 text-sm",
        props.className,
        props.disabled
          ? "cursor-not-allowed bg-slate-600 text-slate-500"
          : "text-white hover:bg-slate-400 hover:text-slate-800 active:bg-slate-300",
      )}
    >
      {props.children}
    </HeadlessUiButton>
  );
};
