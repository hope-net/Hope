export default function About() {
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
      <section className="about-content">
        <h1>About Us</h1>

        <p>
          <strong className="red-text">Welcome to Hope</strong> – your ultimate
          academic companion for success at <strong>KTU</strong>. Our mission is simple: to provide KTU
          students with easy access to the best study materials and resources
          available, helping you excel in your engineering courses.
        </p>

        <h2>Our Story</h2>
        <p>
          <strong className="red-text">
            Hope was created with a singular purpose
          </strong>{" "}
          – to bridge the gap between students and the resources they need for
          academic success. Born out of the vision of graduate students who
          understand the challenges faced by today's learners, our platform is
          dedicated to making quality study materials more accessible. The idea
          is to provide every KTU student with the tools, resources, and support
          they need to perform at their best and achieve their goals.
        </p>
        <p>
          We believe that the key to academic success lies in having easy access
          to the right study materials. To achieve this, Hope curates and
          organizes existing high-quality resources, such as study notes,
          videos, previous year question papers, and the official syllabus, all
          in one place. Whether you're in Computer Science, Electronics and Communication, 
          Civil Engineering or any other branch, Hope is here
          to provide you with easy navigation links to all the resources you
          need for success.
        </p>

        <h2>What We Offer</h2>
        <ul className="definition-list">
    <li><span className="bold-text">Study Notes:</span> We provide access to detailed and well-organized study notes for a wide range of engineering subjects across different branches. These notes are curated from various reliable sources and are structured to align with the KTU syllabus.</li>
    <li><span className="bold-text">Official Syllabus:</span> We offer the official syllabus for all engineering branches at KTU. This ensures that you always have a clear understanding of the topics you need to focus on for each subject and stay aligned with university requirements.</li>
    <li><span className="bold-text">Study Videos:</span> We provide links to high-quality educational videos covering a variety of subjects. These videos come from trusted platforms and help break down complex concepts, offering you an easier and more engaging way to learn.</li>
    <li><span className="bold-text">Previous Year Question Papers:</span> To assist with exam preparation, we offer direct access to previous year question papers. These are valuable resources for understanding the exam patterns and identifying key areas to focus on.</li>
    <li><span onClick={() => openExternalLink("https://codexpertweb.netlify.app")} className="bold-text codeXpertlink">Programming Courses (CodeXpert):</span> In addition to the free study resources, we also offer premium programming courses through our programming training classes, CodeXpert. CodeXpert is run by the same team behind Hope and provides in-depth, paid programming courses in languages such as Python, Java, C#, and Web Development. These courses are designed to help you master coding skills through structured lessons, hands-on projects, and expert guidance. While Hope offers free access to study materials, CodeXpert focuses on providing specialized programming education for those who wish to further enhance their technical skills. Click CodeXpert to know more!</li>
</ul>

<h2>Why Hope?</h2>
<ul className="definition-list">
    <li><span className="bold-text">Centralized Access:</span> Hope brings all the best study materials together in one place. No more searching across multiple platforms for notes, videos, or courses. We provide you with organized, easy-to-navigate links to access everything you need from a single platform.</li>
    <li><span className="bold-text">Free Access:</span> All the resources we provide are completely free of charge. We believe that access to quality educational materials should not be restricted by financial barriers, and we are committed to helping you succeed without any cost.</li>
    <li><span className="bold-text">Quality Resources:</span> We ensure that all the materials linked on our platform come from trusted, reliable sources. Whether it’s notes, videos, programming courses, or question papers, you can be confident that the resources provided are of high quality and up-to-date.</li>
    <li><span className="bold-text">User-Friendly Platform:</span> Our platform is designed to be intuitive and easy to navigate. We want you to spend less time searching for resources and more time learning. With Hope, accessing study materials is quick and hassle-free.</li>
</ul>


        <h2>Our Vision</h2>
        <p>
          At Hope, our vision is to be the go-to platform for KTU students,
          offering a comprehensive and easy-to-use resource center. We aim to
          create a community of students who can rely on us for easy access to
          the best educational content, helping them stay organized, efficient,
          and focused on their academic success.
        </p>
        <p>
          Whether you're just beginning your journey at KTU or preparing for
          your final exams, Hope is here to help you succeed every step of the
          way.
        </p>
      </section>
  );
}
