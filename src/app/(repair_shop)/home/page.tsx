function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const Home = () => {
  const random = getRandomInt(2)
  if (random === 1) {
    throw new Error('Error loading review')
  }
  return <div>Home page</div>
}

export default Home
