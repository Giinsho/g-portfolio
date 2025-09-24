import React, { useEffect, useState } from "react";
import styles, { layout } from "../../style";
import Projects from "./Projects";
import Typing from "../TypingAnimation/Typing";
const GITHUB_USERNAME = "Giinsho"; // Change to your GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();
        const filteredRepos = data.filter((repo) => !repo.fork);

        // Map GitHub API response to match project structure
        const formattedProjects = filteredRepos
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((repo, index) => ({
            id: `project-${index + 1}`,
            content: repo.description || "No description provided.",
            name: repo.name,
            date: new Date(repo.created_at).toLocaleDateString(),
            link: repo.html_url,
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative text-dim-white`}
    >
      <div
        className={`${layout.sectionInfo} mb-8 flex flex-col justify-center items-center text-center`}
      >
        <h2 className={styles.heading2}>
          <span>
            <Typing
              texts={["Projects From GitHub"]}
              typingSpeed={110}
              deletingSpeed={40}
              pauseBetween={5000}
              loop={true}
              className=" break-words "
            />
          </span>
        </h2>
      </div>

      <div className="flex sm:flex-wrap sm:flex-row flex-col sm:justify-between justify-center content-center w-full feedback-container relative z-[1]">
        {projects.length > 0 ? (
          projects.map((card) => <Projects key={card.id} {...card} />)
        ) : (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;
