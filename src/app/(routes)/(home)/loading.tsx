import SpinerLogo from "@/app/components/fn/SpinerLogo"

export default function LoadingHome() {
    return (
        <div className="flex items-center justify-center w-[60%]">
            <SpinerLogo size={100} />
        </div>
    )
}