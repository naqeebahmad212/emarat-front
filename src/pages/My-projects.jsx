import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { backend_url } from "../context/ShopContext";

const MyProjects = () => {
  const [works, setWorks] = useState([]);

  const fetchInfo = () => {
    if (!localStorage.getItem("auth-token")) {
      window.location.href = "/login";
    }
    fetch(backend_url + "/my-projects", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setWorks(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  console.log(works);
  return (
    <div className="p-5 md:p-10 lg:p-10">
      {works.length > 0 &&
        works.map((work) => (
          <ProjectCard
            key={work._id}
            isMyproject={true}
            work={work}
            fetchInfo={fetchInfo}
          />
        ))}
    </div>
  );
};

export default MyProjects;
