'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Loader2 } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  containerClassName?: string
  gradientColor?: string
}

export function VideoPlayer({
  src,
  poster,
  className = '',
  containerClassName = '',
  gradientColor = 'from-orange-500 to-red-500'
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    // Set loading to false once metadata is loaded
    const handleCanPlay = () => {
      setIsLoading(false)
      setHasError(false)
    }

    videoElement.addEventListener('canplay', handleCanPlay)
    videoElement.addEventListener('loadeddata', handleCanPlay)

    // Intersection Observer to play video when in viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
          if (entry.isIntersecting && !isLoading) {
            videoElement.play().catch((error) => {
              console.error('Video autoplay error:', error)
            })
          } else {
            videoElement.pause()
          }
        })
      },
      {
        threshold: 0.3, // Play when 30% of video is visible
        rootMargin: '100px'
      }
    )

    observerRef.current.observe(videoElement)

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay)
      videoElement.removeEventListener('loadeddata', handleCanPlay)
      if (observerRef.current && videoElement) {
        observerRef.current.unobserve(videoElement)
      }
    }
  }, [isLoading])

  const handleLoadedData = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video loading error:', e)
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Gradient glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} blur-3xl opacity-20 -z-10`} />

      {/* Video container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
        {/* Loading state */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10 aspect-video">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
              <p className="text-sm text-gray-400">Loading video...</p>
            </motion.div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center p-8">
            <div className="text-center">
              <Play className="h-16 w-16 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">Video unavailable</p>
              <p className="text-xs text-gray-500 mt-2">{src}</p>
            </div>
          </div>
        )}

        {/* Video element */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onLoadedData={handleLoadedData}
          onCanPlay={handleLoadedData}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play indicator overlay (subtle) */}
        {!isLoading && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradientColor} opacity-10 blur-2xl pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${gradientColor} opacity-10 blur-2xl pointer-events-none`} />
      </div>

      {/* Decorative border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientColor} opacity-20 -z-10 blur-sm`} />
    </div>
  )
}
