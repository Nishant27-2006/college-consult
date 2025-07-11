"use client"

import { useState, useEffect } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { stripePromise, getPackagePrice } from '@/lib/stripe'
import { ArrowRight, CreditCard } from 'lucide-react'

interface PaymentFormProps {
  formData: any
  onPaymentSuccess: () => void
  onPaymentError: (error: string) => void
}

function CheckoutForm({ formData, onPaymentSuccess, onPaymentError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageType: 'starter'
  })

  const packagePrice = getPackagePrice(customerInfo.packageType)

  useEffect(() => {
    if (customerInfo.packageType && customerInfo.fullName && customerInfo.email) {
      // Create payment intent
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: packagePrice,
          packageType: customerInfo.packageType,
          customerInfo: customerInfo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret)
          }
        })
        .catch((error) => {
          console.error('Error creating payment intent:', error)
          onPaymentError('Failed to initialize payment')
        })
    }
  }, [customerInfo, packagePrice, onPaymentError])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements || !clientSecret) {
      return
    }

    setIsLoading(true)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setIsLoading(false)
      return
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: customerInfo.fullName,
          email: customerInfo.email,
          phone: customerInfo.phone,
        },
      },
    })

    if (error) {
      console.error('Payment error:', error)
      onPaymentError(error.message || 'Payment failed')
      setIsLoading(false)
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Confirm payment on backend
      try {
        const response = await fetch('/api/confirm-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            formData: customerInfo,
          }),
        })

        if (response.ok) {
          onPaymentSuccess()
        } else {
          throw new Error('Failed to confirm payment')
        }
      } catch (error) {
        console.error('Error confirming payment:', error)
        onPaymentError('Payment succeeded but confirmation failed. Please contact support.')
      }
      setIsLoading(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }

  return (
    <Card className="border-2 border-amber-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
          <CreditCard className="h-6 w-6" />
          Complete Your Payment
        </CardTitle>
        <div className="text-lg font-semibold text-amber-600">
          {customerInfo.packageType === 'starter' ? 'Starter Package - $300' : 
           customerInfo.packageType === 'premium' ? 'Premium Package - $450' :
           customerInfo.packageType === 'ram-test' ? 'Ram Test - $1' : 'Premium Package - $450'}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customerInfo.fullName}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Package Selection *
              </label>
              <select
                value={customerInfo.packageType}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, packageType: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="starter">Starter Package - $300 (5 hours)</option>
                <option value="premium">Premium Package - $450 (10 hours)</option>
                <option value="ram-test">Ram Test - $1</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Card Details *
            </label>
            <div className="p-4 border border-slate-300 rounded-lg">
              <CardElement options={cardElementOptions} />
            </div>
          </div>
          
          <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">Payment includes:</p>
            <ul className="space-y-1">
              <li>• {customerInfo.packageType === 'starter' ? '5 hours' : 
                   customerInfo.packageType === 'premium' ? '10 hours' : 
                   customerInfo.packageType === 'ram-test' ? 'Test package' : '10 hours'} of personalized consulting</li>
              <li>• Free 1-hour initial consultation</li>
              <li>• Exclusive extracurricular network access</li>
              <li>• {customerInfo.packageType === 'premium' ? 'Priority support' : 'Standard support'}</li>
            </ul>
          </div>

          <Button
            type="submit"
            disabled={!stripe || isLoading}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-3 text-lg rounded-lg"
          >
            {isLoading ? 'Processing...' : `Pay $${packagePrice}`}
            {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function PaymentForm(props: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  )
}