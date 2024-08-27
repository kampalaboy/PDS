import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-24">
      <div className="flex space-x-5 grid-cols-2">
        <div>
          <table className="min-w-full text-black bg-white border border-gray-200 shadow-md">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-2 px-4 border-r">Team</th>
                <th className="text-center py-2 px-4 border-r">Pld</th>
                <th className="text-center py-2 px-4 border-r">W</th>
                <th className="text-center py-2 px-4 border-r">D</th>
                <th className="text-center py-2 px-4 border-r">L</th>
                <th className="text-center py-2 px-4">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="flex items-center py-2 px-4 border-r">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/images/teamicons/SCVilla.svg"
                        alt="SC Villa"
                        height={40}
                        width={40}
                      />
                    </div>
                  </label>
                  <span className="ml-2">SC Villa</span>
                </td>
                <td className="text-center py-2 px-4 border-r">10</td>
                <td className="text-center py-2 px-4 border-r">10</td>
                <td className="text-center py-2 px-4 border-r">10</td>
                <td className="text-center py-2 px-4 border-r">10</td>
                <td className="text-center py-2 px-4">10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section
          className="w-full bg-center bg-cover text-center p-20 flex flex-col items-center justify-center h-[300px]"
          style={{ backgroundImage: 'url("/assets/Clouds.jpg")' }}
        >
          <div className="bg-black bg-opacity-50 p-10 rounded-lg">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-white text-lg md:text-xl mb-8">
              Discover the latest updates and insights in our top story.
            </p>
            <a
              href="/article/top-story"
              className="text-white bg-blue-500 hover:bg-blue-600 p-3 rounded-lg mt-4 inline-block font-bold"
            >
              Read More
            </a>
          </div>
        </section>
      </div>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            News{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get the latest sports news
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Videos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Watch the unforgattable sports highlights from the past week!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
