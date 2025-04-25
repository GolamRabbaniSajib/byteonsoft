import Button from "../components/Shared/Button/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16 text-[#0a1f44]">
      <div className="max-w-lg text-center">
        <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-[#e0f7f5] animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#14b8a6]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-bold md:text-4xl">
          Oops! Something Went Wrong
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Don’t worry, you can go back or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-[#0a1f44] border border-gray-300 rounded-lg transition hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-[#14b8a6]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            Go Back
          </button>

          <Button
            label="Take Me Home"
            onClick={() => navigate("/")}
            className="bg-[#14b8a6] hover:bg-[#0ea5e9] text-white transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
