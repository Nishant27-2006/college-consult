import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export const getPackagePrice = (packageType: string): number => {
  switch (packageType) {
    case 'starter':
      return 300
    case 'premium':
      return 450
    case 'ram-test':
      return 1
    default:
      return 0
  }
}