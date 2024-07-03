import * as MenubarPrimitive from "@radix-ui/react-Menubar";
import { cls } from "../util";
import { CheckIcon, ChevronRightIcon } from "../icons";

export function Menubar({
                            children,
                            className
                        }: { children: React.ReactNode, className?: string }) {
    return (
        <MenubarPrimitive.Root
            className={cls("z-10 flex bg-white dark:bg-gray-950 p-[3px] rounded-sm shadow-sm", className)}>
            {children}
        </MenubarPrimitive.Root>
    )
}

export function MenubarMenu({
                                children,
                            }: { children: React.ReactNode }) {
    return (
        <MenubarPrimitive.Menu>
            {children}
        </MenubarPrimitive.Menu>
    )
}

export function MenubarTrigger({
                                   children,
                                   className
                               }: { children: React.ReactNode, className?: string }) {
    return (
        <MenubarPrimitive.Trigger
            className={cls("py-2 px-3 outline-none select-none font-medium leading-none rounded text-text-primary dark:text-text-primary-dark text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-slate-100 data-[highlighted]:dark:bg-gray-800 data-[state=open]:bg-slate-100 data-[state=open]:dark:bg-gray-800 hover:bg-slate-200 hover:bg-opacity-75 dark:hover:bg-gray-700 dark:hover:bg-opacity-50",
                className)}>
            {children}
        </MenubarPrimitive.Trigger>
    )
}

export function MenubarPortal({
                                  children,
                              }: { children: React.ReactNode }) {
    return (
        <MenubarPrimitive.Portal>
            {children}
        </MenubarPrimitive.Portal>
    )
}

export function MenubarContent({
                                   children,
                                   className,
                                   align,
                                   sideOffset,
                                   alignOffset,
                                   ...rest
                               }: {
    children: React.ReactNode,
    className?: string,
    align?: "start" | "center" | "end",
    sideOffset?: number,
    alignOffset?: number
}) {
    return (
        <MenubarPrimitive.Content
            className={cls("min-w-[220px] bg-white dark:bg-gray-950 rounded-md p-[6px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]", className)}
            align={align ?? "start"}
            sideOffset={sideOffset ?? 5}
            alignOffset={alignOffset ?? -3}
            {...rest}
        >
            {children}
        </MenubarPrimitive.Content>
    )
}

export function MenubarItem({
                                children,
                                leftPadding,
                                className,
                                disabled,
                                ...rest
                            }: {
    children: React.ReactNode,
    leftPadding?: boolean,
    className?: string,
    disabled?: boolean
}) {
    return (
        <MenubarPrimitive.Item
            className={cls("group text-[13px] leading-none rounded flex items-center h-[32px] px-[10px] py-[2px] relative select-none outline-none data-[state=open]:bg-slate-100 data-[state=open]:dark:bg-gray-800 data-[state=open]:text-text-primary data-[state=open]:dark:text-text-primary-dark data-[highlighted]:bg-slate-100 data-[highlighted]:dark:bg-gray-800  data-[disabled]:text-disabled data-[disabled]:dark:text-disabled-dark data-[disabled]:pointer-events-none",
                leftPadding ? "pl-5" : "",
                disabled ? "pointer-events-none text-text-secondary dark:text-text-secondary-dark" : "text-text-primary dark:text-text-primary-dark",
                className)}
            disabled={disabled}
            {...rest}
        >
            {children}
        </MenubarPrimitive.Item>
    )
}

export function MenubarSeparator({
                                     children,
                                     className,
                                     ...rest
                                 }: {
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <MenubarPrimitive.Separator
            className={cls("h-[1px] bg-slate-100 dark:bg-gray-800 m-[5px]", className)}
            {...rest}
        >
            {children}
        </MenubarPrimitive.Separator>
    )
}

export function MenubarSub({
                               children,
                               ...rest
                           }: {
    children?: React.ReactNode,
}) {
    return (
        <MenubarPrimitive.Sub
            {...rest}
        >
            {children}
        </MenubarPrimitive.Sub>
    )
}

export function MenubarSubTrigger({
                                      children,
                                      className,
                                      ...rest
                                  }: {
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <MenubarPrimitive.SubTrigger
            className={cls("group text-[13px] leading-none text-text-primary dark:text-text-primary-dark rounded flex items-center h-[32px] px-[10px] py-[2px] relative select-none outline-none data-[state=open]:bg-slate-100 data-[state=open]:dark:bg-gray-800 data-[state=open]:text-text-primary data-[state=open]:dark:text-text-primary-dark data-[highlighted]:bg-slate-100 data-[highlighted]:dark:bg-gray-800  data-[disabled]:text-disabled data-[disabled]:dark:text-disabled-dark data-[disabled]:pointer-events-none",
                className)}
            {...rest}
        >
            {children}
        </MenubarPrimitive.SubTrigger>
    )
}

export function MenubarSubContent({
                                      children,
                                      alignOffset,
                                      className,
                                      ...rest
                                  }: {
    children?: React.ReactNode,
    alignOffset?: number,
    className?: string,
}) {
    return (
        <MenubarPrimitive.SubContent
            alignOffset={alignOffset ?? -5}
            className={cls("min-w-[220px] bg-white dark:bg-gray-950 rounded-md p-[6px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                className)}
            {...rest}
        >
            {children}
        </MenubarPrimitive.SubContent>
    )
}

export function MenubarCheckboxItem({
                                        children,
                                        checked,
                                        onCheckedChange,
                                        className,
                                        ...rest
                                    }: {
    children?: React.ReactNode,
    checked?: boolean,
    onCheckedChange?: () => void,
    className?: string,
}) {
    return (
        <MenubarPrimitive.CheckboxItem
            className={cls("text-[13px] leading-none text-text-primary dark:text-text-primary-dark rounded flex items-center h-[32px] px-[10px] py-[2px] relative select-none pl-5 outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:dark:bg-gray-800 data-[disabled]:text-disabled data-[disabled]:dark:text-disabled-dark data-[disabled]:pointer-events-none",
                className)}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...rest}
        >
            {children}
        </MenubarPrimitive.CheckboxItem>
    )
}

export function MenubarItemIndicator({
                                         children,
                                         className,
                                         ...rest
                                     }: {
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <MenubarPrimitive.ItemIndicator
            className={cls("absolute left-0 w-4 inline-flex items-center justify-center", className)}
            {...rest}>
            {children ?? <CheckIcon size={"smallest"}/>}
        </MenubarPrimitive.ItemIndicator>
    )
}

export function MenubarRadioGroup({
                                      children,
                                      className,
                                      value,
                                      onValueChange,
                                      ...rest
                                  }: {
    children?: React.ReactNode,
    value?: string,
    onValueChange?: (value: string) => void,
    className?: string,
}) {
    return (
        <MenubarPrimitive.RadioGroup
            className={cls(className)}
            value={value}
            onValueChange={onValueChange}
            {...rest}>
            {children ?? <CheckIcon size={"small"}/>}
        </MenubarPrimitive.RadioGroup>
    )
}

export function MenubarRadioItem({
                                     children,
                                     className,
                                     value,
                                     ...rest
                                 }: {
    children?: React.ReactNode,
    value: string,
    className?: string,
}) {
    return (
        <MenubarPrimitive.RadioItem
            className={cls("text-[13px] leading-none text-text-primary dark:text-text-primary-dark rounded flex items-center h-[32px] px-[10px] py-[2px] relative select-none pl-5 outline-none data-[highlighted]:bg-slate-100 data-[highlighted]:dark:bg-gray-800 data-[disabled]:text-disabled data-[disabled]:dark:text-disabled-dark data-[disabled]:pointer-events-none",
                className)}
            value={value}
            {...rest}>
            {children ?? <CheckIcon size={"small"}/>}
        </MenubarPrimitive.RadioItem>
    )
}

export function MenubarShortcut({
                                    children,
                                    className,
                                    ...rest
                                }: {
    children?: React.ReactNode,
    className?: string,
}) {
    return (
        <div
            className={cls("ml-auto pl-5 group-data-[disabled]:text-disabled data-[disabled]:dark:text-disabled-dark",
                className)}
            {...rest}>
            {children}
        </div>
    )
}

export function MenubarSubTriggerIndicator() {
    return (
        <div className="ml-auto pl-5 ">
            <ChevronRightIcon size={"small"}/>
        </div>
    )
}
