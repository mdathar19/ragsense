import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const sectionVariants = cva(
  'w-full',
  {
    variants: {
      size: {
        default: 'py-16 md:py-20 lg:py-24',
        sm: 'py-8 md:py-10 lg:py-12',
        lg: 'py-20 md:py-28 lg:py-32',
        xl: 'py-24 md:py-32 lg:py-40',
      },
      background: {
        default: 'bg-background',
        muted: 'bg-gray-50 dark:bg-gray-900/50',
        gradient: 'bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-background',
        dark: 'bg-black text-white',
        dots: 'bg-white dark:bg-black',
      }
    },
    defaultVariants: {
      size: 'default',
      background: 'default',
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size, background, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ size, background }), className)}
        {...props}
      />
    )
  }
)
Section.displayName = 'Section'

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', className)}
    {...props}
  />
))
Container.displayName = 'Container'

export { Section, Container, sectionVariants }