import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    children: React.ReactNode
    from?: "left" | "right"
    delay?: number
}

export const Motion1 = (p: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: p.delay ?? 0 }}
        >
            {p.children}
        </motion.div>
    )
}