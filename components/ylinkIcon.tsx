import { Link } from '@gravity-ui/icons'
import cn from '@/utils/cn'

export default function YlinkIcon({ className, ...props }: { className?: string }) {
  return (
    <div className={cn('bg-[#0058bc] p-3 rounded-lg w-12 h-12', className)}>
      <Link color="white" width="100%" height="100%" />
    </div>
  )
}
