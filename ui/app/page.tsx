export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <ol className=' list-inside  text-sm/6 text-center sm:text-left list-none'>
          <li className='text-center'>
            <h3 className='text-4xl font-bold mb-3'>Dynamic Form Creation </h3>
            <code className='bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded'>
              Developing by MKINFOPOINT
            </code>
          </li>
        </ol>
      </main>
    </div>
  );
}
