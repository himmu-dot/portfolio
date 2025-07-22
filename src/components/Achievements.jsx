export default function Achievements() {
  const achievements = [
    "Consistently maintained a strong academic record with a CGPA above 9.0",
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-gray-900 text-white scroll-mt-[100px] p-6"
    >
      <h2 className="text-3xl font-bold mb-6 underline underline-offset-4 decoration-yellow-400">
        Achievements
      </h2>

      <ul className="list-disc pl-5 space-y-3 text-sm">
        {achievements.map((item, index) => (
          <li key={index} className="text-gray-200">
            {item}
          </li>
        ))}

        <li className="text-gray-200">
          Successfully completed the Full MERN Stack Development Course by Apna College
          <a
            href="https://drive.google.com/file/d/11xQVf8jeSRkUVrTHTgVv_YsH8AmXerx0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline ml-1"
          >
            [View Certificate]
          </a>
        </li>
      </ul>
    </section>
  );
}
