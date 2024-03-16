import { Link } from 'react-router-dom'

interface ProfileLinkProps {
  username: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function ProfileLink({ username, onClick }: ProfileLinkProps) {
  return (
    <Link
      to={`user/${username}`}
      className="flex align-items-center shape-small overlay p-8"
      onClick={onClick}
      draggable={false}
    >
      <div className="size-60 shape-round" style={{ backgroundColor: 'green' }} />
      <div className="ml-8 mb-4">
        <div className="font-24">{username}</div>
        <div className="font-12">See your profile</div>
      </div>
    </Link>
  )
}
