import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-orange-100 text-orange-900 dark:bg-orange-900 dark:text-orange-100',
        secondary:
          'border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
        destructive:
          'border-transparent bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
        outline: 'text-foreground border',
        success:
          'border-transparent bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
        warning:
          'border-transparent bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
        gradient:
          'border-transparent bg-gradient-to-r from-orange-500 to-orange-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }