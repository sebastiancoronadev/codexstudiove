import { motion, useSpring } from 'framer-motion'
import { useCursorGlow } from '../../hooks/useCursorGlow'

export default function CursorGlow() {
  const { position, isHovering } = useCursorGlow()
  
  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(position.x, springConfig)
  const y = useSpring(position.y, springConfig)

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998]"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{
          width: isHovering ? 300 : 200,
          height: isHovering ? 300 : 200,
          opacity: isHovering ? 0.25 : 0.12,
        }}
        transition={{ duration: 0.4 }}
        className="rounded-full bg-gradient-to-br from-brand-pink/30 via-brand-orange/20 to-brand-cyan/20 blur-[80px]"
      />
    </motion.div>
  )
}
