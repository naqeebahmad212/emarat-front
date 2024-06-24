import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { backend_url } from "../../../admin/src/components/Navbar";

const FindWork = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      window.location.href = "/login";
    }
    fetch(backend_url + "/allworks", {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setWorks(data));
  }, []);
  return (
    <div className="p-5 md:p-10 lg:p-10">
      {works.length > 0 &&
        works.map((work) => <ProjectCard key={work._id} work={work} />)}
    </div>
  );
};

export default FindWork;
