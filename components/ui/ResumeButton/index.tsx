const ResumeButton = () => {
  return (
    <a
      href="/api/resume"
      target="_blank"
      className="text-center mt-8 py-3 px-6 bg-white hover:bg-gray-100 active:bg-gray-300 rounded-lg text-black font-bold w-full sm:w-64 shadow-lg"
    >
      Download Résumé/CVs
    </a>
  );
};

export default ResumeButton;
