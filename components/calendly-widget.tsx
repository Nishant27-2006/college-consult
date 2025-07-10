"use client"

import { useEffect, useRef, useState } from 'react'

interface CalendlyWidgetProps {
  url: string
  height?: number
  minWidth?: number
}

export default function CalendlyWidget({ 
  url, 
  height = 700, 
  minWidth = 320 
}: CalendlyWidgetProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [widgetId, setWidgetId] = useState<string>('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate widget ID only on client side
  useEffect(() => {
    setWidgetId(`calendly-widget-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  useEffect(() => {
    if (!widgetId) return // Wait for widget ID to be set
    
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    const initCalendly = () => {
      if (typeof window !== 'undefined' && window.Calendly && containerRef.current) {
        try {
          // Clear any existing content
          containerRef.current.innerHTML = ''
          
          // Initialize the widget using the element directly
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: containerRef.current,
            prefill: {},
            utm: {}
          })
          
          setIsLoading(false)
          setError(false)
        } catch (err) {
          console.error('Error initializing Calendly:', err)
          setError(true)
          setIsLoading(false)
        }
      }
    }

    const loadCalendlyScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script is already loaded
        if (document.querySelector('script[src*="calendly.com"]') || window.Calendly) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Failed to load Calendly script'))
        document.head.appendChild(script)
      })
    }

    const setup = async () => {
      try {
        // Load script first
        await loadCalendlyScript()
        
        // Wait a bit for Calendly to be available
        if (window.Calendly) {
          initCalendly()
        } else {
          // Fallback polling
          intervalId = setInterval(() => {
            if (window.Calendly) {
              clearInterval(intervalId)
              initCalendly()
            }
          }, 100)
        }
      } catch (err) {
        console.error('Error setting up Calendly:', err)
        setError(true)
        setIsLoading(false)
      }
    }

    // Small delay to ensure DOM is ready
    const setupTimeout = setTimeout(() => {
      setup()
    }, 100)

    // Overall timeout
    timeoutId = setTimeout(() => {
      if (intervalId) clearInterval(intervalId)
      if (isLoading) {
        setError(true)
        setIsLoading(false)
      }
    }, 10000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
      if (setupTimeout) clearTimeout(setupTimeout)
    }
  }, [url, widgetId])

  if (error) {
    return (
      <div 
        className="flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"
        style={{ 
          minWidth: `${minWidth}px`, 
          height: `${height}px`
        }}
      >
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">Unable to load calendar widget</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Open Calendar in New Tab
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg z-10"
          style={{ 
            minWidth: `${minWidth}px`, 
            height: `${height}px`
          }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading calendar...</p>
          </div>
        </div>
      )}
      <div 
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ 
          minWidth: `${minWidth}px`, 
          height: `${height}px`,
          border: 'none'
        }}
      />
    </div>
  )
}

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any
  }
}