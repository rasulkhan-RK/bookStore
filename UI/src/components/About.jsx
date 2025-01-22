const About = () => {
  return (
    <div>
      <h1 className="text-center mb-20 text-2xl mt-10">
        Benefits of reading books
      </h1>
      <div className="my-10 flex flex-col justify-around m-32 order-2 md:flex-row gap-16">
        <img
          className="w-full flex  max-w-[400px]"
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360"
          alt="about_image"
        />
        <div className="flex flex-col justify-center order-1 gap-6 md:w-2/4 ">
          <p>
            The Joy of Reading Books, Books are windows into different worlds,
            offering an escape from the everyday and a chance to experience life
            through the eyes of others. Whether you prefer the thrilling
            adventures of fantasy novels, the intricate plots of mysteries, or
            the deep emotional connections found in literary fiction, theres a
            book out there for everyone.
          </p>

          <b className="text-gray-400">Reading Books</b>
          <p>
            One of the most significant benefits of reading is its profound
            impact on cognitive development. Engaging with complex narratives
            and intricate plots encourages critical thinking and enhances memory
            retention. As readers navigate through characters’ journeys, they
            are compelled to remember details and make connections, which
            sharpens their analytical skills. The vocabulary and language skills
            gained through reading are invaluable, enriching communication and
            expression. This linguistic growth is especially beneficial for
            students and professionals alike, providing a foundation for
            effective articulation of thoughts and ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
