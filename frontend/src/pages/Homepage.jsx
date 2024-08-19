
// El componente 'HomePage' contiene todo lo que seria el inicio de la aplicacion
function Homepage() {
  return (
    <div className='m-4'>
      <Search />
      <SortRepos />
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
        <ProfileInfo />
        <Repos />
      </div>
    </div>
  )
}

export default Homepage