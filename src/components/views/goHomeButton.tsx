import React from 'react'
import { useHistory } from 'react-router'
import { motion } from 'framer-motion'
// assets
import goBackHome from '../../assets/svg/goHome.svg'

const GoHomeButton: React.FC = (): any => {
    const history = useHistory()

    const buttonVariance = { hover: { scale: 1.2 } }

    return (
        <div>
            <motion.button
                variants={buttonVariance}
                whileHover="hover"
                type="button"
                style={{
                    outline: 'none',
                    border: 'none',
                    background: 'transparent',
                }}
                onClick={() => history.push('/')}
            >
                <img
                    src={goBackHome}
                    style={{
                        height: '80px',
                        outline: 'none',
                        border: 'none',
                    }}
                    alt="go back home"
                />
            </motion.button>
        </div>
    )
}
export default GoHomeButton
