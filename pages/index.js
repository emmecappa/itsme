import style from "../styles/home.module.css"


function Home() {

  return (
    <div class="flex flex-col min-h-screen">
      <header class="py-4">
          <div class="container mx-auto">
              <h1 class="text-2xl font-bold">Hello my name is Marco Casto, but everybody calls me MK.</h1>
          </div>
      </header>

      <main class="flex-grow container mx-auto py-8">
          <h2 class="text-2xl">Coming soon</h2>
      </main>

      <footer class="py-4">
          <div class="container mx-auto">
          </div>
      </footer>
    </div>
  )
}

export default Home
