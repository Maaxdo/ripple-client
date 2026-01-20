import {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { SelectOption } from "@/types/common";
import { Checkbox, CheckboxProps } from "./checkbox";
import { ErrorText } from "./error-text";
import { Input, InputProps } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Textarea, TextareaProps } from "./textarea";

type FormFieldProps<T> = T &
  PropsWithChildren<{
    label?: string;
    error?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
  }>;

type SelectProps = {
  options: SelectOption[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
} & ComponentProps<"select">;

export const FormField = forwardRef<null, FormFieldProps<InputProps>>(
  (
    {
      label,
      error,
      className,
      required,
      iconLeft,
      iconRight,
      children,
      ...restProps
    },
    ref,
  ) => {
    const c = cn("space-y-2 w-full relative", className);
    const inputC = cn(
      "border-[#D5D7DA] h-11 focus-visible:border-pink-ring focus-visible:ring-pink-ring/50 focus-visible:pink-ring-[3px]",
      iconLeft ? "pl-10" : null,
      iconRight ? "pr-10" : null,
    );

    return (
      <div className={c}>
        {iconLeft && (
          <span className={"absolute left-3 top-[52%] text-[#717680]"}>
            {iconLeft}
          </span>
        )}
        {iconRight && (
          <span className={"absolute right-3 top-[52%] text-[#717680]"}>
            {iconRight}
          </span>
        )}
        {label && (
          <Label>
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
        )}
        <Input
          className={inputC}
          {...restProps}
          required={required}
          ref={ref}
        />
        {error && <ErrorText>{error}</ErrorText>}
        {children}
      </div>
    );
  },
);

FormField.displayName = "FormField";

export const FormTextareaField = forwardRef<
  null,
  FormFieldProps<TextareaProps>
>(({ label, error, className, required, ...restProps }, ref) => {
  const c = cn("space-y-2 w-full", className);

  return (
    <div className={c}>
      {label && (
        <Label>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <Textarea
        className="min-h-60 max-h-60"
        {...restProps}
        required={required}
        ref={ref}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
});

FormTextareaField.displayName = "FormTextareaField";

export const FormSelectField = forwardRef<null, FormFieldProps<SelectProps>>(
  (
    {
      label,
      error,
      className,
      value,
      required,
      options,
      onValueChange,
      disabled,
      defaultValue,
      ...restProps
    },
    ref,
  ) => {
    const c = cn("space-y-2 w-full", className);

    return (
      <div className={c}>
        {label && (
          <Label>
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
        )}
        <Select
          disabled={disabled}
          defaultValue={defaultValue}
          value={typeof value === "string" ? value : undefined}
          onValueChange={onValueChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              ref={ref}
              {...restProps}
              placeholder="Select an option"
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel>Items</SelectLabel>
              {options.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {error && <ErrorText>{error}</ErrorText>}
      </div>
    );
  },
);

FormSelectField.displayName = "FormSelectField";

export const FormCheckBoxField = forwardRef<
  null,
  FormFieldProps<CheckboxProps>
>(({ label, error, className, required, children, ...restProps }, ref) => {
  return (
    <>
      <Label className="flex items-center">
        <Checkbox {...restProps} ref={ref} />
        <span className={"text-xs"}>
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        {error && <ErrorText>{error}</ErrorText>}
      </Label>
      {children}
    </>
  );
});

FormCheckBoxField.displayName = "FormCheckBoxField";
