import { useEffect, useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { backend_url } from "../../../admin/src/components/Navbar";

const PostWork = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [workDetails, setWorkDetails] = useState({
    title: "",
    budget: "",
    description: "",
    duration: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      window.location.href = "/login";
    }
  });

  const changeHandler = (e) => {
    setWorkDetails({ ...workDetails, [e.target.name]: e.target.value });
  };

  const Add_Work = async () => {
    if (
      workDetails.title === "" ||
      workDetails.budget === "" ||
      workDetails.description === "" ||
      workDetails.duration === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    let work = workDetails;
    setIsLoading(true);
    if (localStorage.getItem("auth-token")) {
      await fetch(backend_url + "/postWork", {
        method: "POST",
        headers: {
          "auth-token": `${localStorage.getItem("auth-token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(work),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setIsLoading(false);
          data.success
            ? toast.success("Project posted successfully")
            : toast.error("Upload Failed");

          setWorkDetails({
            title: "",
            budget: "",
            description: "",
            duration: "",
          });
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(err.message);
        });
    }
  };

  return (
    <section className="flex justify-center">
      <div className="p-8 box-border w-full md:max-w-[500px]  bg-white  rounded-sm mt-5 lg:ml-">
        <h1 className="h3 mb-10 underline">Post Your Project</h1>
        <div className="mb-3">
          <h4 className="bold-18 pb-2">Work Tile:</h4>
          <input
            value={workDetails.name}
            onChange={changeHandler}
            type="text"
            name="title"
            required={true}
            placeholder="Type here.."
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
          />
        </div>
        <div className="mb-3">
          <h4 className="bold-18 pb-2">Budget:</h4>
          <input
            value={workDetails.budget}
            onChange={changeHandler}
            type="text"
            name="budget"
            placeholder="Type here.."
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            required
          />
        </div>

        <div className="mb-3">
          <h4 className="bold-18 pb-2">Description:</h4>
          <input
            value={workDetails.description}
            onChange={changeHandler}
            type="text"
            name="description"
            placeholder="Type here.."
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            required
          />
        </div>

        <div className="mb-3">
          <h4 className="bold-18 pb-2">Duration:</h4>
          <input
            value={workDetails.duration}
            onChange={changeHandler}
            type="text"
            name="duration"
            placeholder="Type here.."
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
            required
          />
        </div>

        <button
          disabled={isLoading}
          onClick={() => {
            Add_Work();
          }}
          className="btn-dark rounded-lg mt-4 flexCenter gap-x-1"
        >
          {isLoading ? <LoaderIcon /> : "Post"}
        </button>
      </div>
    </section>
  );
};

export default PostWork;
