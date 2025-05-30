export default async function Template({
  //Templates re render - layouts do not
  children
}: {
  children: React.ReactNode
}) {
  return <div className='animate-fadeIn'>{children}</div>
}
