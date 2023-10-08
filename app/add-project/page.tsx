"use client";
import { scrapeAndStoreProject } from "@/lib/actions";
import { isURLValid } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";

function AddProjectPage() {
  const [projectURL, setProjectURL] = React.useState("");
  const [URLError, setURLError] = React.useState<string | null>(null);
  const [isLoading, setLoading] = React.useState(false);

  const router = useRouter();

  async function addProject() {
    console.log(projectURL);

    if (!isURLValid(projectURL)) {
      setURLError(
        "Please provide a valid URL. At the moment we only support URLs from zooniverse.org."
      );
      return;
    }

    try {
      setLoading(true);

      // Scrape the project from the URL
      await scrapeAndStoreProject(projectURL);
    } catch (error) {
      console.error(error);

      return;
    } finally {
      setLoading(false);
    }

    router.push("/", { scroll: false });
  }

  return (
    <>
      <section className="px-6 md:px-20 py-24 flex flex-col items-center">
        <h1 className="text-black font-medium text-2xl ">
          Add an Open Science Project via URL
        </h1>
        <div className="mt-8 flex">
          <input
            type="text"
            className="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="URL"
            value={projectURL}
            onChange={(e) => {
              setProjectURL(e.target.value);
              setURLError(null);
            }}
          />
          <button
            type="button"
            className="ml-2 outline-none text-white bg-primary hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={addProject}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Project"}
          </button>
        </div>
        <p
          className={`mt-4 ${
            URLError ? "text-red-600" : "text-gray-500"
          }  text-sm`}
        >
          {URLError
            ? URLError
            : "At the moment we only support URLs from zooniverse.org."}
        </p>
      </section>
    </>
  );
}

export default AddProjectPage;
