import { useState, useEffect, useRef } from 'react'

const TYPING_SPEED = 130   // ms per char (typing)
const DELETE_SPEED = 70    // ms per char (deleting)
const PAUSE_AFTER = 5000   // ms pause after full word
const PAUSE_BEFORE = 800   // ms pause before typing next

export function useTypingAnimation(words) {
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!words?.length) return

    let timeout

    const tick = () => {
      const current = words[indexRef.current]

      if (!isDeleting) {
        // Typing
        setDisplay(prev => {
          const next = current.slice(0, prev.length + 1)
          if (next === current) {
            // Full word typed — pause then start deleting
            timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER)
            return next
          }
          timeout = setTimeout(tick, TYPING_SPEED)
          return next
        })
      } else {
        // Deleting
        setDisplay(prev => {
          const next = prev.slice(0, -1)
          if (next === '') {
            // Done deleting — move to next word
            indexRef.current = (indexRef.current + 1) % words.length
            setIsDeleting(false)
            timeout = setTimeout(tick, PAUSE_BEFORE)
            return ''
          }
          timeout = setTimeout(tick, DELETE_SPEED)
          return next
        })
      }
    }

    timeout = setTimeout(tick, TYPING_SPEED)
    return () => clearTimeout(timeout)
  }, [isDeleting, words])

  return display
}
