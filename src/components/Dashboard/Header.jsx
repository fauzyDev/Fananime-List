'use client'

import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr/ArrowSquareLeft"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <button onClick={handleBack}>
                <ArrowSquareLeft size={32} />
            </button>
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
        </div>
    )
}

export default Header