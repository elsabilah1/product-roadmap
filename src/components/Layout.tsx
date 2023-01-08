interface Props {
  children: React.ReactNode
}

function Layout(props: Props) {
  return (
    <div className='min-h-screen grid place-items-center'>{props.children}</div>
  )
}

export default Layout
