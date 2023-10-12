import { useNav } from './useNav'
import Logo from '../../assets/react.svg'

export function Nav() {
  const state = useNav()
  return (
    <nav className={'w-full h-20 bg-white flex justify-center px-3 sm:px-0'}>
      <div className={'container flex flex-row items-center justify-between'}>
        <img src={Logo} alt={'Logo'} />
        {state.showLogoutButton && (
          <button type={'submit'} onClick={state.handleLogout} className={'bg-[#ADFC80] px-4 py-2 rounded-xl'}>
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
