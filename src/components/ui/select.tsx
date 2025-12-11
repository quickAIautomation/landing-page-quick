import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface SelectContextValue {
  value: string
  onValueChange: (value: string) => void
  disabled?: boolean
  open: boolean
  setOpen: (open: boolean) => void
  items: Map<string, string>
  registerItem: (value: string, label: string) => void
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
}

const SelectContext = React.createContext<SelectContextValue | undefined>(undefined)

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  children: React.ReactNode
}

const Select = ({ value = "", onValueChange = () => {}, disabled = false, children }: SelectProps) => {
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLButtonElement | null>(null)
  const itemsMapRef = React.useRef<Map<string, string>>(new Map())

  const registerItem = React.useCallback((value: string, label: string) => {
    itemsMapRef.current.set(value, label)
  }, [])

  // Fechar quando clica fora
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  // Fechar ao pressionar Escape
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open])

  return (
    <SelectContext.Provider value={{ 
      value, 
      onValueChange, 
      disabled, 
      open, 
      setOpen, 
      items: itemsMapRef.current,
      registerItem,
      triggerRef
    }}>
      <div ref={containerRef} className={cn("relative", open ? "z-[200]" : "z-[100]")}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error("SelectTrigger must be used within Select")

  // Combinar refs: usar o ref externo se fornecido, senão usar o do contexto
  const combinedRef = React.useCallback((node: HTMLButtonElement | null) => {
    // Atualizar ref do contexto
    context.triggerRef.current = node
    // Atualizar ref externo se fornecido
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref && 'current' in ref) {
      (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
    }
  }, [ref, context])

  return (
    <button
      type="button"
      ref={combinedRef}
      disabled={context.disabled || props.disabled}
      onClick={() => !context.disabled && context.setOpen(!context.open)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 opacity-50 transition-transform duration-200",
        context.open && "rotate-180"
      )} />
    </button>
  )
})
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error("SelectValue must be used within Select")

  const displayText = context.value 
    ? (context.items.get(context.value) || context.value)
    : (placeholder || "Selecione...")

  return <span>{displayText}</span>
}

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, _ref) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error("SelectContent must be used within Select")

  if (!context.open) return null

  return (
    <div
      ref={_ref}
      className={cn(
        "absolute z-[200] mt-1 w-full min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg",
        className
      )}
      {...props}
    >
      <div className="max-h-[300px] overflow-y-auto p-1">
        {children}
      </div>
    </div>
  )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error("SelectItem must be used within Select")

  const isSelected = context.value === value

  // Registrar o item quando renderizar
  React.useEffect(() => {
    const getTextFromChildren = (children: React.ReactNode): string => {
      if (typeof children === 'string') return children
      if (typeof children === 'number') return String(children)
      if (Array.isArray(children)) {
        return children.map(getTextFromChildren).join('')
      }
      if (React.isValidElement(children)) {
        return getTextFromChildren(children.props.children)
      }
      return value
    }
    const label = getTextFromChildren(children) || value
    context.registerItem(value, label)
  }, [value, children, context])

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
      onClick={() => {
        if (!context.disabled) {
          context.onValueChange(value)
          context.setOpen(false)
        }
      }}
      {...props}
    >
      {children}
    </div>
  )
})
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
