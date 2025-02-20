const TeamSection = () => {
    const teamMembers = [
      {
        name: "John Doe",
        phone: "+123 456 7890",
        description: "Expert in web development with 5 years of experience.",
        image: "https://loremflickr.com/200/200?flower=6",
      },
      {
        name: "Jane Smith",
        phone: "+987 654 3210",
        description: "Specialist in UI/UX design with a passion for creativity.",
        image: "https://loremflickr.com/200/200?flower=4",
      },
      {
        name: "Alice Brown",
        phone: "+555 123 4567",
        description: "Marketing strategist with expertise in digital campaigns.",
        image: "https://loremflickr.com/200/200?flower=5",
      },
    ];
  
    return (
      <section className="px-6 sm:px-[10%] mx-auto py-28 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* Meet My Team */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Meet My Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.phone}</p>
                  <p className="text-gray-700 mt-2">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.761359908077!2d78.68975357461369!3d10.829565889322437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5892b5ed461%3A0x23992c5c469ac168!2sSt.%20Joseph's%20College!5e0!3m2!1sen!2sin!4v1738939462825!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  