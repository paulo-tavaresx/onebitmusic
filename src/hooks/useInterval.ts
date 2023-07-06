import React, { useState, useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay?: number) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    if (callback) savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (savedCallback) savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
