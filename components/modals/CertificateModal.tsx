'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, Award, Eye, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificateUrl: string
  title: string
  category: string
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificateUrl,
  title,
  category,
}: CertificateModalProps) {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  // Zoom and Pan States
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const minScale = 0.5
  const maxScale = 3

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setImageLoaded(false)
      setImageError(false)
      setScale(1)
      setPosition({ x: 0, y: 0 })
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case '=':
        case '+':
          e.preventDefault()
          handleZoomIn()
          break
        case '-':
          e.preventDefault()
          handleZoomOut()
          break
        case '0':
          e.preventDefault()
          handleReset()
          break
        case 'ArrowLeft':
          e.preventDefault()
          setPosition(prev => ({ ...prev, x: prev.x + 50 }))
          break
        case 'ArrowRight':
          e.preventDefault()
          setPosition(prev => ({ ...prev, x: prev.x - 50 }))
          break
        case 'ArrowUp':
          e.preventDefault()
          setPosition(prev => ({ ...prev, y: prev.y + 50 }))
          break
        case 'ArrowDown':
          e.preventDefault()
          setPosition(prev => ({ ...prev, y: prev.y - 50 }))
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Enhanced Mouse Wheel with Ctrl detection for zoom vs scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen || !imageContainerRef.current?.contains(e.target as Node)) return
      
      // Only zoom if Ctrl is held down (pinch-to-zoom gesture) or it's a zoom-specific gesture
      const isZoomGesture = e.ctrlKey || Math.abs(e.deltaY) > Math.abs(e.deltaX)
      
      if (isZoomGesture && e.ctrlKey) {
        // Zoom functionality - only when Ctrl is held
        e.preventDefault()
        const delta = e.deltaY * -0.01
        const newScale = Math.min(Math.max(scale + delta, minScale), maxScale)
        setScale(newScale)
      } else if (scale > 1) {
        // Allow natural scrolling when zoomed in and not holding Ctrl
        // Let the browser handle normal scrolling
        return
      }
    }

    document.addEventListener('wheel', handleWheel, { passive: false })
    return () => document.removeEventListener('wheel', handleWheel)
  }, [isOpen, scale])

  // Mouse Drag with improved bounds
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return // Only allow dragging when zoomed in
    e.preventDefault()
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imageContainerRef.current) return
    
    const containerRect = imageContainerRef.current.getBoundingClientRect()
    const maxPanX = (scale - 1) * containerRect.width / 4
    const maxPanY = (scale - 1) * containerRect.height / 4
    
    const newX = Math.max(-maxPanX, Math.min(maxPanX, e.clientX - dragStart.x))
    const newY = Math.max(-maxPanY, Math.min(maxPanY, e.clientY - dragStart.y))
    
    setPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch Events for Mobile with pinch-to-zoom detection
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1) {
      // Single touch for panning when zoomed
      const touch = e.touches[0]
      setIsDragging(true)
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      })
    } else if (e.touches.length === 2) {
      // Two-finger touch for zoom (pinch gesture)
      setIsDragging(false)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging && scale > 1) {
      // Single finger pan
      e.preventDefault()
      const touch = e.touches[0]
      const containerRect = imageContainerRef.current?.getBoundingClientRect()
      if (!containerRect) return
      
      const maxPanX = (scale - 1) * containerRect.width / 4
      const maxPanY = (scale - 1) * containerRect.height / 4
      
      const newX = Math.max(-maxPanX, Math.min(maxPanX, touch.clientX - dragStart.x))
      const newY = Math.max(-maxPanY, Math.min(maxPanY, touch.clientY - dragStart.y))
      
      setPosition({ x: newX, y: newY })
    }
    // Let two-finger gestures be handled naturally by the browser for scrolling
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Control Functions
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, maxScale))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, minScale))
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Technical Excellence':
        return 'text-yellow-500'
      case 'Individual Recognition':
        return 'text-brand-blue'
      case 'Team Recognition':
        return 'text-purple-500'
      default:
        return 'text-brand-blue'
    }
  }

  if (!mounted) return null

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-[10000] flex flex-col bg-card-bg border-2 border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-background/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                  <Award size={20} className={getCategoryColor(category)} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-sm text-text-muted">{category}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-background border border-border">
                  <button
                    onClick={handleZoomOut}
                    disabled={scale <= minScale}
                    className="p-1.5 rounded-md hover:bg-card-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Zoom Out (-)"
                  >
                    <ZoomOut size={16} />
                  </button>
                  
                  <span className="text-sm font-medium text-text-secondary min-w-[3rem] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  
                  <button
                    onClick={handleZoomIn}
                    disabled={scale >= maxScale}
                    className="p-1.5 rounded-md hover:bg-card-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    title="Zoom In (+)"
                  >
                    <ZoomIn size={16} />
                  </button>
                </div>

                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="hidden md:flex p-2 rounded-lg bg-background border border-border hover:border-brand-blue/40 transition-colors"
                  title="Reset View (0)"
                >
                  <RotateCcw size={16} />
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-brand-blue/40 transition-all duration-200 hover:scale-105"
                  aria-label="Close certificate preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center overflow-auto bg-background/50">
              
              {/* Loading State */}
              {!imageLoaded && !imageError && (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                    <Eye size={24} className="text-brand-blue animate-pulse" />
                  </div>
                  <p className="text-text-muted">Loading certificate...</p>
                </div>
              )}

              {/* Error State */}
              {imageError && (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <X size={32} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      Certificate Unavailable
                    </h4>
                    <p className="text-text-muted">
                      The certificate image could not be loaded. Please try again later.
                    </p>
                  </div>
                </div>
              )}

              {/* Certificate Image Container */}
              {certificateUrl && (
                <div 
                  ref={imageContainerRef}
                  className={`
                    relative w-full h-full p-4
                    ${scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}
                    ${imageLoaded ? 'flex' : 'hidden'}
                    items-center justify-center
                  `}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div 
                    className="relative transition-transform duration-200 ease-out"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                      transformOrigin: 'center center',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  >
                    <Image
                      src={certificateUrl}
                      alt={`${title} Certificate`}
                      width={1000}
                      height={700}
                      className="max-w-full max-h-full object-contain select-none rounded-lg shadow-2xl"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        setImageError(true)
                        setImageLoaded(false)
                      }}
                      priority
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 border-t border-border bg-background/90">
              
                           {/* Mobile Controls */}
                           <div className="flex md:hidden items-center justify-center gap-2 mb-4">
                <button
                  onClick={handleZoomOut}
                  disabled={scale <= minScale}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomOut size={16} />
                  <span className="text-sm">Out</span>
                </button>
                
                <span className="text-sm font-medium text-text-secondary px-3 py-2 bg-background border border-border rounded-lg min-w-[4rem] text-center">
                  {Math.round(scale * 100)}%
                </span>
                
                <button
                  onClick={handleZoomIn}
                  disabled={scale >= maxScale}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ZoomIn size={16} />
                  <span className="text-sm">In</span>
                </button>
                
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border transition-colors"
                  title="Reset View"
                >
                  <RotateCcw size={16} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text-muted flex items-center gap-2 justify-center sm:justify-start mb-1">
                    {scale > 1 && (
                      <>
                        <Move size={14} />
                        <span>Drag to pan • </span>
                      </>
                    )}
                    <span>Ctrl+Scroll to zoom • ESC to close</span>
                  </p>
                  <p className="text-xs text-text-muted">
                    Keyboard: + (zoom in) • - (zoom out) • 0 (reset) • Arrow keys (navigate)
                  </p>
                </div>
                
                {/* Mobile Close Button */}
                <button
                  onClick={onClose}
                  className="sm:hidden w-full py-3 px-6 rounded-xl bg-brand-blue text-white font-semibold hover:opacity-90 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}