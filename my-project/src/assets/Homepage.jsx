export default function Homepage() {
  return (
    <div className="font-Poppins h-[36rem] text-5xl text-white bg-light_green px-16 py-32">
      <div className="flex italic font-bold space-x-3 ">
        <h1>Rent.</h1>
        <h1>Relax.</h1>
        <h1>Repeat.</h1>
      </div>
      <h5 className="font-light py-6">Renting is the new Buying...</h5>

      <form>
        <div class="flex">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600"
            type="button"
          >
            All categories{" "}
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-white bg-gray-50 rounded-r-lg h-12  dark:bg-gray-700 dark:placeholder-gray-400"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 h-12 text-sm font-medium text-white bg-green rounded-r-lg border border-green hover:bg-light_green"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="trending_topics flex space-x-8 text-base text-center p-4">
        <div className="pt-1">
          <h5>Trending:</h5>
        </div>

         <div className="bg-green rounded-2xl h-8 w-28 p-0" >
            <h5 className="pt-1">Ambler</h5>
         </div> 
        
         <div className="bg-green rounded-2xl h-8 w-28 p-0" >
            <h5 className="pt-1">PS-5</h5>
         </div> 
        
         <div className="bg-green rounded-2xl h-8 w-28 p-0" >
            <h5 className="pt-1">Cricket Kit</h5>
         </div> 
        
      </div>
    </div>
  );
}
