import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

/** Fades and lifts content in when it scrolls into view. */
const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
)

export default Reveal
