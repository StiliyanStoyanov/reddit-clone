import { Add, Edit, Groups } from '@assets/svg'
import { DropdownLink, DropdownToggle } from '..'
import { useDropdown } from '@/hooks'

export const CreateDropdown = () => {
  const { Dropdown, closeDropdown } = useDropdown()

  return (
    <Dropdown
      Toggle={<DropdownToggle Icon={<Add width={28} height={28} />} />}
      outerContainerProps={{ id: 'create-dropdown' }}
      innerContainerProps={{ className: 'nav-dropdown-container' }}
    >
      <DropdownLink onClick={closeDropdown} to="/submit" text="Create Post" Icon={<Edit />} />
      <DropdownLink onClick={closeDropdown} to="/community/create" text="Create Community" Icon={<Groups />} />
    </Dropdown>
  )
}
