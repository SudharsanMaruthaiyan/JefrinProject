import React from 'react';

const Achievement = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Developer Award",
      description: "Recognized as the best developer in the annual coding competition.",
      image: "https://ik.imagekit.io/jjyo3gsee/Insperation%20Image/FeaturedCourse/course-5.png?updatedAt=1728051063990",
    },
    {
      id: 2,
      title: "Graduation with Distinction",
      description: "Graduated with a distinction in Computer Science.",
      image: "https://ik.imagekit.io/jjyo3gsee/Insperation%20Image/FeaturedCourse/course-3.png?updatedAt=1728051064006",
    },
    {
      id: 3,
      title: "Completed MERN Stack Project",
      description: "Developed a full-stack hospital management system.",
      image: "https://ik.imagekit.io/jjyo3gsee/Insperation%20Image/FeaturedCourse/course-1.png?updatedAt=1728051063839",
    },
    {
      id: 4,
      title: "Internship at Revamp Academy",
      description: "Worked on real-world projects and improved React.js skills.",
      image: "https://ik.imagekit.io/jjyo3gsee/2.jpg?updatedAt=1741868812916",
    },
    {
      id: 5,
      title: "Hackathon Winner",
      description: "Won 1st place in a national-level web development hackathon.",
      image: "https://ik.imagekit.io/jjyo3gsee/1.jpg?updatedAt=1741868812770",
    },
    {
      id: 6,
      title: "Open Source Contributions",
      description: "Contributed to open-source projects and collaborated with global developers.",
      image: "https://ik.imagekit.io/jjyo3gsee/3.jpg?updatedAt=1741868812713",
    },
  ];

  return (
    <div className=" sm:px-[8%] px-6 mx-auto pt-32 pb-20">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">🏆 Achievements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white p-4 rounded-lg shadow-lg border hover:shadow-blue-200 hover:-translate-y-3 transition-all">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold text-gray-800 mt-4">{achievement.title}</h2>
            <p className="text-gray-600 mt-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
