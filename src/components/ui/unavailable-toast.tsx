'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react'
import { useActiveToast } from '@/contexts/ActiveToastContext';

const UnavailableToast = () => {

    const { isActiveUnavailableToast } = useActiveToast();

    return  (
        <div className={`fixed bottom-0 right-8 mb-8 z-40 ${isActiveUnavailableToast ? "pointer-events-auto" : "pointer-events-none"}`}>
            <motion.div initial={false} animate={{ opacity: isActiveUnavailableToast ? 1 : 0, scale: isActiveUnavailableToast ? 1 : 0.5, y: isActiveUnavailableToast ? 0 : 40 }} transition={{ type: 'spring', stiffness: 600, damping: 30 }}   id="toast-unavailable" className="flex items-center w-full max-w-xs p-4  space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 " role="alert">
                <Image src="https://img.icons8.com/material-outlined/F5C451/info--v1.png" alt="not-available" height={20} width={20} className="mr-4" />
                <div className="flex flex-col gap-1 ps-8 text-end">
                    <span className=" text-sm font-semibold">Feature unavailable</span>
                    <p className="text-xs font-medium text-zinc-500">Stay tuned for updates!</p>
                </div>
            </motion.div>
        </div>
    ) 
}

export default UnavailableToast