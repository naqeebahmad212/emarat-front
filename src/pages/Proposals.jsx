import { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useParams } from "react-router-dom";
import ProposalCard from "../components/ProposalCard";
import { backend_url } from "../context/ShopContext";

const Proposals = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(backend_url + "/project/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, [id]);

  return (
    <div className="p-5 md:p-10 lg:p-10">
      <h1 className="text-3xl font-bold">Proposals</h1>

      {project &&
        project.proposals &&
        project.proposals.map((proposal, i) => (
          <ProposalCard key={i} proposal={proposal} />
        ))}
    </div>
  );
};

export default Proposals;
