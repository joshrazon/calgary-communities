const styles = {
  fontSize: "1rem",
};

export function Requirements() {
  return (
    <div style={styles}>
      <h1>Requirements</h1>
      <p>
        Create a simple web application using React, Vue, or another framework
        that retrieves data from the provided RESTful endpoints and displays it
        to the user. Feel free to use any libraries that would be useful!
      </p>
      <p>
        You must present a collection of geographic communities in alphabetical
        order. Each geographic community is to be displayed with the minimum
        following information:
      </p>
      <ul>
        <li>Community name</li>
        <li>Image for the community</li>
        <li>
          The average price of all the homes associated with that community
        </li>
      </ul>
      <p>
        The two endpoints that you have access to are documented{" "}
        <a href='https://codingtest.openhouse.ai/?version=latest'>here</a>
      </p>
      <p>
        If you run into rate limit or the mock endpoints are unavailable please
        mock the server calls and “return” the examples responses for each.
      </p>
      <h4>Done Criteria</h4>
      <ul>
        <li>
          The submitted application can be deployed where we can test remotely
          or can be placed in a repository which we can run locally per your
          documentation
        </li>
        <li>
          The source code and the documentation should be submitted for our code
          review
        </li>
        <li>
          Additional documentation and comments can be submitted with the
          README.md
        </li>
      </ul>
      <h4>Follow Up Question:</h4>
      <p>
        If given more time, how would you improve the quality of your
        application? Would you implement anything differently? Please provide
        your comments in the README.
      </p>

      <h2>Evalutation Considerations</h2>

      <ul>
        <li>
          Is the information displayed in a way that is easy to understand?
        </li>
        <li>Does your application meet all the requirements?</li>
        <li>
          Is the application designed to be mobile-friendly or mobile-first?
        </li>
        <li>How are network errors handled?</li>
        <li>Does your application handle invalid data?</li>
        <li>Is your code/components/folders structured in a thoughtful way</li>
      </ul>
    </div>
  );
}
