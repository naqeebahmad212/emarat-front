import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Chat from "../components/CotumerSupportChatbot";
import toast, { LoaderIcon } from "react-hot-toast";
import { backend_url } from "../context/ShopContext";

const ProjectDetails = () => {
  const [isAllreadySubmitted, setIsAllreadySubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [project, setProject] = useState();
  const [proposal, setProposal] = useState({
    experience: "",
    message: "",
    phone: "",
    price: "",
    projectId: id,
  });

  const changeHandler = (e) => {
    setProposal({ ...proposal, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch(backend_url + "/project/" + id)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, [id]);

  const submitHandler = () => {
    if (
      proposal.price === "" ||
      proposal.message === "" ||
      proposal.experience === "" ||
      proposal.phone === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    if (localStorage.getItem("auth-token")) {
      setIsLoading(true);
      fetch(backend_url + "/proposal", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify(proposal),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            toast.success("Submitted Successfully");
            setIsLoading(false);
            setProposal({
              experience: "",
              message: "",
              phone: "",
              price: "",
            });
          } else if (data.error) {
            console.log(data.error);
            toast.error(data.error);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div className="p-5 md:p-10 lg:p-15">
      {project && <ProjectCard work={project} isDetailsPage={true} />}

      <div className="flex flex-col lg:flex-row gap-5 justify-around w-full">
        <div className="flex flex-col gap-4 mt-7 w-1/2  p-7">
          <input
            name="phone"
            value={proposal.phone}
            onChange={changeHandler}
            type="number"
            placeholder="Your Phone Number"
            className=" w-full p-2 bg-white outline-none border rounded-md text-sm"
          />
          <input
            name="experience"
            type="text"
            value={proposal.experience}
            onChange={changeHandler}
            placeholder="Your Experience"
            className=" w-full p-2 bg-white outline-none border rounded-md text-sm"
          />
          <input
            name="price"
            type="text"
            value={proposal.price}
            onChange={changeHandler}
            placeholder="Price"
            className=" w-full p-2 bg-white outline-none border rounded-md text-sm"
          />
          <textarea
            rows={8}
            name="message"
            onChange={changeHandler}
            placeholder="Message"
            className=" w-full p-2 bg-white outline-none border rounded-md text-sm"
          >
            {proposal.message}
          </textarea>
          <button
            className="bg-secondary p-2 rounded-lg"
            onClick={submitHandler}
          >
            {isLoading ? <LoaderIcon className="mx-auto" /> : "Send"}
          </button>
        </div>
        <div className="mt-10">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
